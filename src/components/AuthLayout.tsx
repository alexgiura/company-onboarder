import { ReactNode } from "react";
import AuthIllustration from "@/components/AuthIllustration";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-8 lg:px-16">
        <div className="w-full max-w-md animate-fade-in">
          {children}
        </div>
      </div>

      {/* Right side - Illustration (hidden on mobile/tablet) */}
      <div className="hidden lg:block lg:flex-1 p-4">
        <AuthIllustration />
      </div>
    </div>
  );
};

export default AuthLayout;
