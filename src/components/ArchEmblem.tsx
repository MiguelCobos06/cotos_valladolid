interface ArchEmblemProps {
  className?: string;
}

export function ArchEmblem({ className = 'w-7 h-7 text-cenote shrink-0' }: ArchEmblemProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="14" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M9 22V14.5C9 10.634 12.134 7.5 16 7.5C19.866 7.5 23 10.634 23 14.5V22"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M12.5 22V15C12.5 13.067 14.067 11.5 16 11.5C17.933 11.5 19.5 13.067 19.5 15V22"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="16" cy="16.5" r="1.4" fill="#8C5319" />
    </svg>
  );
}
