import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-void border-t border-graphite mt-auto">
      <div className="page-container py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-sm font-mono tracking-widest text-bone uppercase mb-3">
              People Not Punks
            </p>
            <p className="text-sm text-bone/40 max-w-xs leading-relaxed">
              A curated collection of photorealistic AI portraits.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div>
              <p className="section-label mb-5">Project</p>
              <div className="flex flex-col gap-3">
                <Link to="/collection" className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">Collection</Link>
                <Link to="/about"      className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">About</Link>
                <Link to="/faq"        className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">FAQ</Link>
                <Link to="/mint"       className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">Mint</Link>
              </div>
            </div>

            <div>
              <p className="section-label mb-5">Technical</p>
              <div className="flex flex-col gap-3">
                <Link to="/technical"  className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">Technical Details</Link>
                <Link to="/creator"    className="text-sm text-bone/50 hover:text-bone transition-colors duration-200">Creator</Link>
                <span className="text-sm text-bone/20 cursor-not-allowed select-none">Contract</span>
                <span className="text-sm text-bone/20 cursor-not-allowed select-none">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-graphite/60 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-bone/30 font-mono tracking-wider">
            Chain: Base &middot; Status: In Development
          </p>
          <p className="text-xs text-bone/30">
            &copy; {new Date().getFullYear()} People Not Punks
          </p>
        </div>
      </div>
    </footer>
  )
}
