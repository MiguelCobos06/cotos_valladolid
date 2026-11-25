import { useState } from 'react';
import { ArchEmblem } from './ArchEmblem';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  darkFallback?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  darkFallback = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex flex-col items-center justify-center gap-3 p-6 text-center ${
          darkFallback
            ? 'bg-gradient-to-br from-cenote via-ink to-cenote/80 text-canvas'
            : 'bg-gradient-to-br from-canvas-warm via-canvas to-hairline/50 text-ink-muted border border-hairline'
        }`}
      >
        <ArchEmblem className={`w-8 h-8 ${darkFallback ? 'text-canvas/70' : 'text-cenote/60'}`} />
        <span className="font-serif-art italic text-lg">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
