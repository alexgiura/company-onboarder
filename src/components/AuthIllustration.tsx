const AuthIllustration = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-primary rounded-3xl flex items-center justify-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating shapes */}
      <svg className="absolute w-full h-full" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large diamond */}
        <g className="animate-float-slow">
          <rect
            x="200" y="180" width="100" height="100"
            rx="8"
            transform="rotate(45 250 230)"
            fill="hsl(var(--primary-foreground))"
            opacity="0.12"
          />
        </g>

        {/* Small circle top-right */}
        <g className="animate-float-medium">
          <circle cx="380" cy="120" r="30" fill="hsl(var(--accent))" opacity="0.25" />
        </g>

        {/* Dotted circle */}
        <g className="animate-float-reverse">
          <circle
            cx="140" cy="150" r="50"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
            opacity="0.2"
          />
        </g>

        {/* Triangle */}
        <g className="animate-float-medium">
          <path
            d="M350 380 L390 450 L310 450 Z"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1.5"
            fill="hsl(var(--primary-foreground))"
            opacity="0.08"
          />
        </g>

        {/* Small squares cluster */}
        <g className="animate-float-slow" style={{ animationDelay: '1s' }}>
          <rect x="100" y="380" width="20" height="20" rx="4" fill="hsl(var(--accent))" opacity="0.2" />
          <rect x="130" y="395" width="14" height="14" rx="3" fill="hsl(var(--primary-foreground))" opacity="0.1" />
        </g>

        {/* Large ring */}
        <g className="animate-float-reverse">
          <circle
            cx="350" cy="260" r="70"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1"
            fill="none"
            opacity="0.1"
          />
        </g>

        {/* Hexagon */}
        <g className="animate-float-medium" style={{ animationDelay: '2s' }}>
          <path
            d="M130 300 L160 280 L190 300 L190 340 L160 360 L130 340 Z"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1.5"
            fill="hsl(var(--primary-foreground))"
            opacity="0.06"
          />
        </g>

        {/* Accent dots */}
        <g className="animate-float-slow" style={{ animationDelay: '3s' }}>
          <circle cx="420" cy="480" r="6" fill="hsl(var(--accent))" opacity="0.35" />
          <circle cx="80" cy="480" r="4" fill="hsl(var(--primary-foreground))" opacity="0.15" />
          <circle cx="300" cy="80" r="5" fill="hsl(var(--primary-foreground))" opacity="0.12" />
        </g>

        {/* Cross / Plus sign */}
        <g className="animate-float-reverse" style={{ animationDelay: '1.5s' }}>
          <path
            d="M430 350 L430 370 M420 360 L440 360"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.2"
          />
        </g>
      </svg>

      {/* Central content */}
      <div className="relative z-10 text-center px-12">
        <div className="flex justify-center mb-6">
          <svg width="56" height="56" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L6 8L14 14L22 8L14 2Z" fill="hsl(var(--accent))" opacity="0.9" />
            <path d="M14 14L6 20L14 26L22 20L14 14Z" fill="hsl(var(--primary-foreground))" opacity="0.7" />
            <path d="M14 8L6 14L14 20L22 14L14 8Z" fill="hsl(var(--primary-foreground))" opacity="0.4" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-primary-foreground mb-3">
          Gestionează-ți afacerea
        </h2>
        <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">
          Platformă completă pentru managementul firmei tale. Facturi, rapoarte și mult mai mult.
        </p>
      </div>
    </div>
  );
};

export default AuthIllustration;
