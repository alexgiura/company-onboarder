import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Colored header section */}
      <div className="bg-primary text-primary-foreground px-6 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-6">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L6 8L14 14L22 8L14 2Z" fill="hsl(var(--accent))" opacity="0.9" />
              <path d="M14 14L6 20L14 26L22 20L14 14Z" fill="hsl(var(--primary-foreground))" opacity="0.7" />
              <path d="M14 8L6 14L14 20L22 14L14 8Z" fill="hsl(var(--primary-foreground))" opacity="0.4" />
            </svg>
            <span className="text-lg font-bold tracking-tight">Factura</span>
          </div>
          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl font-bold leading-snug">
            Gestionează-ți afacerea
            <br />
            <span className="text-primary-foreground/60 font-medium text-base sm:text-lg">
              Facturi, rapoarte și mult mai mult.
            </span>
          </h2>
        </div>
      </div>

      {/* Form section — overlaps the header */}
      <div className="flex-1 px-4 sm:px-6 -mt-8">
        <div className="w-full max-w-md mx-auto bg-card rounded-2xl shadow-xl shadow-black/5 border border-border/50 p-6 sm:p-8 animate-fade-in">
          {children}
        </div>
        {/* Bottom spacing */}
        <div className="h-10" />
      </div>
    </div>
  );
};

export default AuthLayout;
