const AuthLogo = ({ subtitle }: { subtitle: string }) => (
  <div className="flex items-center gap-2 mb-8">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L6 8L14 14L22 8L14 2Z" fill="hsl(var(--accent))" opacity="0.8" />
      <path d="M14 14L6 20L14 26L22 20L14 14Z" fill="hsl(var(--foreground))" opacity="0.6" />
      <path d="M14 8L6 14L14 20L22 14L14 8Z" fill="hsl(var(--foreground))" opacity="0.3" />
    </svg>
    <span className="text-xl font-semibold text-foreground">{subtitle}</span>
  </div>
);

export default AuthLogo;
