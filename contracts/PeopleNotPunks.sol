// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title PeopleNotPunks
 * @notice ERC-721 NFT collection — 500 max supply, deployed on Base.
 * @dev Uses OpenZeppelin v5. Token IDs start at 1.
 */
contract PeopleNotPunks is ERC721, ERC721Enumerable, Ownable, Pausable, ReentrancyGuard {

    // ──────────────────────────────────────────────────────────────────────────
    // State
    // ──────────────────────────────────────────────────────────────────────────

    uint256 public constant MAX_SUPPLY = 500;

    uint256 public mintPrice;
    uint256 public maxMintPerTx;

    string private _baseTokenURI;
    uint256 private _nextTokenId;

    // ──────────────────────────────────────────────────────────────────────────
    // Events
    // ──────────────────────────────────────────────────────────────────────────

    event MintPriceUpdated(uint256 newPrice);
    event MaxMintPerTxUpdated(uint256 newMax);
    event BaseURIUpdated(string newBaseURI);
    event Withdrawn(address indexed to, uint256 amount);

    // ──────────────────────────────────────────────────────────────────────────
    // Constructor
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * @param _mintPrice  Initial price in wei per token.
     * @param baseURI     Initial base URI (e.g. "ipfs://<CID>/").
     */
    constructor(
        uint256 _mintPrice,
        string memory baseURI
    ) ERC721("People Not Punks", "PNP") Ownable(msg.sender) {
        mintPrice      = _mintPrice;
        maxMintPerTx   = 5;
        _baseTokenURI  = baseURI;
        _nextTokenId   = 1;
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Public mint
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * @notice Mint `quantity` tokens. Caller must send at least mintPrice * quantity.
     */
    function mint(uint256 quantity) external payable whenNotPaused nonReentrant {
        require(quantity > 0,                              "Quantity must be > 0");
        require(quantity <= maxMintPerTx,                  "Exceeds max per tx");
        require(_nextTokenId + quantity - 1 <= MAX_SUPPLY, "Exceeds max supply");
        require(msg.value >= mintPrice * quantity,         "Insufficient ETH");

        uint256 tokenId = _nextTokenId;
        _nextTokenId = tokenId + quantity;
        for (uint256 i = 0; i < quantity;) {
            _safeMint(msg.sender, tokenId);
            unchecked { tokenId++; i++; }
        }
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Owner controls
    // ──────────────────────────────────────────────────────────────────────────

    /// @notice Update the price per token (in wei).
    function setMintPrice(uint256 _price) external onlyOwner {
        mintPrice = _price;
        emit MintPriceUpdated(_price);
    }

    /// @notice Update how many tokens can be minted per transaction.
    function setMaxMintPerTx(uint256 _max) external onlyOwner {
        require(_max > 0, "Max must be > 0");
        maxMintPerTx = _max;
        emit MaxMintPerTxUpdated(_max);
    }

    /// @notice Update the base metadata URI. Applies to all existing tokens.
    function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
        emit BaseURIUpdated(baseURI);
    }

    /// @notice Pause public minting.
    function pause() external onlyOwner {
        _pause();
    }

    /// @notice Resume public minting.
    function unpause() external onlyOwner {
        _unpause();
    }

    /// @notice Withdraw all ETH in the contract to the owner.
    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        require(balance > 0, "Nothing to withdraw");
        address payable to = payable(owner());
        emit Withdrawn(to, balance);
        (bool ok, ) = to.call{value: balance}("");
        require(ok, "Transfer failed");
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Views
    // ──────────────────────────────────────────────────────────────────────────

    /// @notice Number of tokens minted so far.
    function totalMinted() external view returns (uint256) {
        return _nextTokenId - 1;
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Internal overrides required by OpenZeppelin v5
    // ──────────────────────────────────────────────────────────────────────────

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
