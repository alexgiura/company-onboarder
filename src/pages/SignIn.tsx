import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import AuthLayout from "@/components/AuthLayout";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement auth
  };

  return (
    <AuthLayout>


      <h1 className="text-3xl font-bold text-foreground mb-1">Login</h1>
      <p className="text-muted-foreground mb-8">Introdu datele contului tău.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="auth-label">
            E-mail <span className="auth-label-required">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introdu e-mailul tău"
            className="auth-input"
            required
          />
        </div>

        <div>
          <label className="auth-label">
            Parolă <span className="auth-label-required">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introdu parola ta"
              className="auth-input pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-input accent-primary"
            />
            <span className="text-sm text-foreground">Ține-mă minte</span>
          </label>
          <button type="button" className="text-sm font-semibold text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
            Ți-ai uitat parola?
          </button>
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Nu ai cont?{" "}
        <Link to="/sign-up" className="font-semibold text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
          Înregistrează-ți compania
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignIn;
