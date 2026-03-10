/**
 * Temporary placeholder for portrait art.
 * Replace with <img> tags once actual NFT images are available.
 * Styled to sit cleanly on dark gallery sections (bg-void / bg-graphite).
 * Ensure image-rendering: pixelated is preserved when real art is added.
 */
const accents = [
  '#6F2BFF', // Signal Violet
  '#16C7C8', // Electric Teal
  '#D94BA8', // Soft Magenta
  '#3973D6', // Archive Blue
  '#6F2BFF',
  '#16C7C8',
  '#D94BA8',
  '#3973D6',
]

export default function PortraitPlaceholder({ index = 0, className = '' }) {
  const accent = accents[index % accents.length]

  return (
    <div
      className={`aspect-square relative overflow-hidden bg-graphite group cursor-pointer ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Subtle pixel grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#F3F0E8 1px, transparent 1px), linear-gradient(90deg, #F3F0E8 1px, transparent 1px)`,
          backgroundSize: '8px 8px',
        }}
      />

      {/* Centered pixel figure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: '52px', height: '52px' }}>
          {/* Head */}
          <div className="absolute" style={{ top: 4, left: 10, width: 32, height: 32, backgroundColor: accent, opacity: 0.9 }} />
          {/* Eyes */}
          <div className="absolute" style={{ top: 14, left: 15, width: 6, height: 6, backgroundColor: '#0B0B0D' }} />
          <div className="absolute" style={{ top: 14, left: 29, width: 6, height: 6, backgroundColor: '#0B0B0D' }} />
          {/* Neck / body */}
          <div className="absolute" style={{ top: 40, left: 6, width: 40, height: 10, backgroundColor: accent, opacity: 0.4 }} />
        </div>
      </div>

      {/* Token label */}
      <div className="absolute bottom-2 left-2">
        <span className="text-xs font-mono" style={{ color: accent, opacity: 0.5 }}>
          #{String(index + 1).padStart(4, '0')}
        </span>
      </div>

      {/* Hover state: thin violet border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-violet transition-colors duration-200" />
    </div>
  )
}
