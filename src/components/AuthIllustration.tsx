const AuthIllustration = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-primary rounded-3xl flex items-center justify-center">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/10" />

      {/* Simple dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Central content */}
      <div className="relative z-10 text-center px-12 max-w-sm">
        {/* Simple icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-foreground mb-3">
          Gestionează-ți afacerea
        </h2>
        <p className="text-primary-foreground/60 text-sm leading-relaxed">
          Platformă completă pentru managementul firmei tale. Facturi, rapoarte și mult mai mult.
        </p>

        {/* Simple decorative line */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-8 h-px bg-primary-foreground/20" />
          <div className="w-2 h-2 rounded-full bg-accent/40" />
          <div className="w-8 h-px bg-primary-foreground/20" />
        </div>
      </div>
    </div>
  );
};

export default AuthIllustration;
