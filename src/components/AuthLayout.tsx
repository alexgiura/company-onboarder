import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex justify-center bg-background px-4 py-12 sm:px-8">
      <div className="w-full max-w-md animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
