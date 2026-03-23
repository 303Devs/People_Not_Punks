// test/PeopleNotPunks.test.cjs
// Run: npx hardhat test

const { expect }      = require("chai");
const { ethers }      = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("PeopleNotPunks", function () {

  // ──────────────────────────────────────────────────────────────────────────
  // Fixture
  // ──────────────────────────────────────────────────────────────────────────

  async function deployFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const MINT_PRICE = ethers.parseEther("0.01");
    const BASE_URI   = "ipfs://test-cid/";

    const PeopleNotPunks = await ethers.getContractFactory("PeopleNotPunks");
    const contract       = await PeopleNotPunks.deploy(MINT_PRICE, BASE_URI);
    await contract.waitForDeployment();

    return { contract, owner, addr1, addr2, MINT_PRICE, BASE_URI };
  }

  // ──────────────────────────────────────────────────────────────────────────
  // Deployment
  // ──────────────────────────────────────────────────────────────────────────

  describe("Deployment", function () {
    it("sets name and symbol", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.name()).to.equal("People Not Punks");
      expect(await contract.symbol()).to.equal("PNP");
    });

    it("sets the mint price", async function () {
      const { contract, MINT_PRICE } = await loadFixture(deployFixture);
      expect(await contract.mintPrice()).to.equal(MINT_PRICE);
    });

    it("sets MAX_SUPPLY to 500", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.MAX_SUPPLY()).to.equal(500);
    });

    it("sets default maxMintPerTx to 5", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.maxMintPerTx()).to.equal(5);
    });

    it("starts with 0 tokens minted", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.totalMinted()).to.equal(0);
      expect(await contract.totalSupply()).to.equal(0);
    });

    it("assigns ownership to deployer", async function () {
      const { contract, owner } = await loadFixture(deployFixture);
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Minting
  // ──────────────────────────────────────────────────────────────────────────

  describe("Minting", function () {
    it("mints a single token with correct ETH", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      expect(await contract.balanceOf(addr1.address)).to.equal(1);
      expect(await contract.ownerOf(1)).to.equal(addr1.address);
    });

    it("mints up to maxMintPerTx in one tx", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(5, { value: MINT_PRICE * 5n });
      expect(await contract.balanceOf(addr1.address)).to.equal(5);
    });

    it("accepts overpayment", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).mint(1, { value: MINT_PRICE * 2n })
      ).to.not.be.reverted;
    });

    it("reverts when quantity is 0", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).mint(0, { value: 0 })
      ).to.be.revertedWith("Quantity must be > 0");
    });

    it("reverts when exceeding maxMintPerTx", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).mint(6, { value: MINT_PRICE * 6n })
      ).to.be.revertedWith("Exceeds max per tx");
    });

    it("reverts with insufficient ETH", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).mint(1, { value: 0 })
      ).to.be.revertedWith("Insufficient ETH");
    });

    it("reverts when paused", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.pause();
      await expect(
        contract.connect(addr1).mint(1, { value: MINT_PRICE })
      ).to.be.revertedWithCustomError(contract, "EnforcedPause");
    });

    it("increments token IDs sequentially starting at 1", async function () {
      const { contract, addr1, addr2, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(2, { value: MINT_PRICE * 2n });
      await contract.connect(addr2).mint(1, { value: MINT_PRICE });
      expect(await contract.ownerOf(1)).to.equal(addr1.address);
      expect(await contract.ownerOf(2)).to.equal(addr1.address);
      expect(await contract.ownerOf(3)).to.equal(addr2.address);
    });

    it("returns correct tokenURI", async function () {
      const { contract, addr1, MINT_PRICE, BASE_URI } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      expect(await contract.tokenURI(1)).to.equal(BASE_URI + "1");
    });

    it("tracks totalMinted and totalSupply", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(3, { value: MINT_PRICE * 3n });
      expect(await contract.totalMinted()).to.equal(3);
      expect(await contract.totalSupply()).to.equal(3);
    });

    it("reverts when quantity would exceed max supply", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.setMaxMintPerTx(501);
      await expect(
        contract.connect(addr1).mint(501, { value: MINT_PRICE * 501n })
      ).to.be.revertedWith("Exceeds max supply");
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Owner controls
  // ──────────────────────────────────────────────────────────────────────────

  describe("Owner controls", function () {
    it("owner can update mint price", async function () {
      const { contract } = await loadFixture(deployFixture);
      const newPrice = ethers.parseEther("0.05");
      await expect(contract.setMintPrice(newPrice))
        .to.emit(contract, "MintPriceUpdated")
        .withArgs(newPrice);
      expect(await contract.mintPrice()).to.equal(newPrice);
    });

    it("owner can update maxMintPerTx", async function () {
      const { contract } = await loadFixture(deployFixture);
      await expect(contract.setMaxMintPerTx(10))
        .to.emit(contract, "MaxMintPerTxUpdated")
        .withArgs(10);
      expect(await contract.maxMintPerTx()).to.equal(10);
    });

    it("reverts setMaxMintPerTx(0)", async function () {
      const { contract } = await loadFixture(deployFixture);
      await expect(contract.setMaxMintPerTx(0)).to.be.revertedWith("Max must be > 0");
    });

    it("owner can update base URI", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      await expect(contract.setBaseURI("ipfs://new-cid/"))
        .to.emit(contract, "BaseURIUpdated")
        .withArgs("ipfs://new-cid/");
      expect(await contract.tokenURI(1)).to.equal("ipfs://new-cid/1");
    });

    it("owner can pause and unpause", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.pause();
      await expect(
        contract.connect(addr1).mint(1, { value: MINT_PRICE })
      ).to.be.revertedWithCustomError(contract, "EnforcedPause");
      await contract.unpause();
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      expect(await contract.balanceOf(addr1.address)).to.equal(1);
    });

    it("non-owner cannot set mint price", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).setMintPrice(ethers.parseEther("0.1"))
      ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount");
    });

    it("non-owner cannot pause", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).pause()
      ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount");
    });

    it("non-owner cannot setBaseURI", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).setBaseURI("ipfs://evil/")
      ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount");
    });

    it("non-owner cannot setMaxMintPerTx", async function () {
      const { contract, addr1 } = await loadFixture(deployFixture);
      await expect(
        contract.connect(addr1).setMaxMintPerTx(10)
      ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount");
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Withdrawal
  // ──────────────────────────────────────────────────────────────────────────

  describe("Withdrawal", function () {
    it("owner can withdraw all ETH", async function () {
      const { contract, owner, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(3, { value: MINT_PRICE * 3n });

      const expected  = MINT_PRICE * 3n;
      const balBefore = await ethers.provider.getBalance(owner.address);

      const tx      = await contract.withdraw();
      const receipt = await tx.wait();
      const gasCost = receipt.gasUsed * receipt.gasPrice;

      const balAfter = await ethers.provider.getBalance(owner.address);
      expect(balAfter).to.be.closeTo(
        balBefore + expected - gasCost,
        ethers.parseEther("0.0001")
      );
    });

    it("emits Withdrawn event", async function () {
      const { contract, owner, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      await expect(contract.withdraw())
        .to.emit(contract, "Withdrawn")
        .withArgs(owner.address, MINT_PRICE);
    });

    it("reverts when balance is zero", async function () {
      const { contract } = await loadFixture(deployFixture);
      await expect(contract.withdraw()).to.be.revertedWith("Nothing to withdraw");
    });

    it("non-owner cannot withdraw", async function () {
      const { contract, addr1, MINT_PRICE } = await loadFixture(deployFixture);
      await contract.connect(addr1).mint(1, { value: MINT_PRICE });
      await expect(
        contract.connect(addr1).withdraw()
      ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount");
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // supportsInterface
  // ──────────────────────────────────────────────────────────────────────────

  describe("supportsInterface", function () {
    it("supports ERC-721", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.supportsInterface("0x80ac58cd")).to.be.true;
    });

    it("supports ERC-721 Enumerable", async function () {
      const { contract } = await loadFixture(deployFixture);
      expect(await contract.supportsInterface("0x780e9d63")).to.be.true;
    });
  });
});
