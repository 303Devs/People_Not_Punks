import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-void border-t border-graphite mt-auto">
      <div className="page-container py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-sm font-mono tracking-widest text-bone uppercase mb-2">
              People Not Punks
            </p>
            <p className="text-xs text-bone/40 max-w-xs leading-relaxed">
              A curated pixel portrait collection.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <p className="section-label mb-4">Project</p>
              <div className="flex flex-col gap-2.5">
                <Link to="/collection" className="text-sm text-bone/50 hover:text-bone transition-colors">Collection</Link>
                <Link to="/about"      className="text-sm text-bone/50 hover:text-bone transition-colors">About</Link>
                <Link to="/faq"        className="text-sm text-bone/50 hover:text-bone transition-colors">FAQ</Link>
                <Link to="/mint"       className="text-sm text-bone/50 hover:text-bone transition-colors">Mint</Link>
              </div>
            </div>

            <div>
              <p className="section-label mb-4">Technical</p>
              <div className="flex flex-col gap-2.5">
                <Link to="/technical"  className="text-sm text-bone/50 hover:text-bone transition-colors">Technical Details</Link>
                <Link to="/creator"    className="text-sm text-bone/50 hover:text-bone transition-colors">Creator</Link>
                <span className="text-sm text-bone/20 cursor-not-allowed">Contract</span>
                <span className="text-sm text-bone/20 cursor-not-allowed">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-graphite mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-bone/30 font-mono">
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
