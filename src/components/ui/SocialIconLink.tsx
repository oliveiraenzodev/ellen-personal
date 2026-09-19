type SocialIconLinkProps = {
  network: "whatsapp" | "instagram";
  href: string;
  label: string;
  className?: string;
};

export function SocialIconLink({
  network,
  href,
  label,
  className = "",
}: SocialIconLinkProps) {
  return (
    <a
      className={`social-icon-link ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {network === "whatsapp" && (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3A12.9 12.9 0 0 0 5.09 22.73L3 29l6.47-2.02A12.96 12.96 0 1 0 16.04 3Zm0 23.62c-2.05 0-4.05-.55-5.78-1.58l-.41-.24-3.84 1.2 1.25-3.73-.27-.43a10.72 10.72 0 1 1 9.05 4.78Zm5.88-8.03c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.69 9.69 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.37.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-.99-2.39-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
        </svg>
      )}
      {network === "instagram" && (
        <svg className="instagram-icon" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="7" />
          <circle cx="16" cy="16" r="5.5" />
          <circle className="instagram-icon__dot" cx="23.25" cy="8.75" r="1.35" />
        </svg>
      )}
    </a>
  );
}
