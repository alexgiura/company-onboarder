import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import AuthLayout from "@/components/AuthLayout";
import StepProgress from "@/components/StepProgress";

const JUDETE = [
  "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani",
  "Brăila", "Brașov", "București", "Buzău", "Călărași", "Caraș-Severin",
  "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu",
  "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș",
  "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Sălaj", "Satu Mare",
  "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea",
];

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<"cui" | "manual">("cui");

  // Step 1
  const [cui, setCui] = useState("");

  // Step 2 - company details
  const [numeFirma, setNumeFirma] = useState("");
  const [cuiManual, setCuiManual] = useState("");
  const [regComert, setRegComert] = useState("");
  const [adresa, setAdresa] = useState("");
  const [judet, setJudet] = useState("");
  const [localitate, setLocalitate] = useState("");
  const [platitorTva, setPlatitorTva] = useState(false);

  // Step 3 - account
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCuiLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <StepProgress current={step} total={3} />

      {/* STEP 1 - CUI */}
      {step === 1 && (
        <>
          <h1 className="text-3xl font-bold text-foreground mb-1">Datele firmei tale</h1>
          <p className="text-muted-foreground mb-8">
            Introdu CUI-ul firmei tale, iar noi îți vom extrage datele instant!
          </p>

          <form onSubmit={handleCuiLookup} className="space-y-5">
            <div>
              <label className="auth-label">
                CUI-ul firmei <span className="auth-label-required">*</span>
              </label>
              <input
                type="text"
                value={cui}
                onChange={(e) => setCui(e.target.value)}
                placeholder="RO12345678"
                className="auth-input"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Continuă
              </button>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">sau</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <button
              type="button"
              onClick={() => { setMode("manual"); setStep(2); }}
              className="w-full text-center text-sm font-semibold text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Introdu datele manual
            </button>
          </form>
        </>
      )}

      {/* STEP 2 - Company details */}
      {step === 2 && (
        <>
          <h1 className="text-3xl font-bold text-foreground mb-1">Datele firmei tale</h1>
          <p className="text-muted-foreground mb-8">Introdu datele companiei tale.</p>

          <form onSubmit={handleCompanySubmit} className="space-y-4">
            <div>
              <label className="auth-label">
                Numele firmei <span className="auth-label-required">*</span>
              </label>
              <input
                type="text"
                value={numeFirma}
                onChange={(e) => setNumeFirma(e.target.value)}
                placeholder="Numele firmei"
                className="auth-input"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="auth-label">
                  CUI <span className="auth-label-required">*</span>
                </label>
                <input
                  type="text"
                  value={cuiManual || cui}
                  onChange={(e) => setCuiManual(e.target.value)}
                  placeholder="RO12345678"
                  className="auth-input"
                  required
                />
              </div>
              <div>
                <label className="auth-label">Reg comerț (opțional)</label>
                <input
                  type="text"
                  value={regComert}
                  onChange={(e) => setRegComert(e.target.value)}
                  placeholder="Reg comerț"
                  className="auth-input"
                />
              </div>
            </div>

            <div>
              <label className="auth-label">
                Adresă <span className="auth-label-required">*</span>
              </label>
              <input
                type="text"
                value={adresa}
                onChange={(e) => setAdresa(e.target.value)}
                placeholder="Adresă"
                className="auth-input"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="auth-label">
                  Județ <span className="auth-label-required">*</span>
                </label>
                <select
                  value={judet}
                  onChange={(e) => setJudet(e.target.value)}
                  className="auth-input appearance-none cursor-pointer"
                  required
                >
                  <option value="">Județul sediului</option>
                  {JUDETE.map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="auth-label">Localitate (opțional)</label>
                <input
                  type="text"
                  value={localitate}
                  onChange={(e) => setLocalitate(e.target.value)}
                  placeholder="exemplu: Oradea"
                  className="auth-input"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <span className="text-sm font-medium text-foreground">
                Ești plătitor de TVA? <span className="auth-label-required">*</span>
              </span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="tva"
                  checked={platitorTva}
                  onChange={() => setPlatitorTva(true)}
                  className="accent-primary"
                />
                <span className="text-sm">Da</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="tva"
                  checked={!platitorTva}
                  onChange={() => setPlatitorTva(false)}
                  className="accent-primary"
                />
                <span className="text-sm">Nu</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="h-12 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Înapoi
              </button>
              <button
                type="submit"
                className="h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Continuă
              </button>
            </div>
          </form>
        </>
      )}

      {/* STEP 3 - Account */}
      {step === 3 && (
        <>
          <h1 className="text-3xl font-bold text-foreground mb-1">Creează contul</h1>
          <p className="text-muted-foreground mb-8">Introdu datele pentru contul tău.</p>

          <form onSubmit={handleAccountSubmit} className="space-y-5">
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
                  placeholder="Minim 8 caractere"
                  className="auth-input pr-12"
                  required
                  minLength={8}
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

            <div>
              <label className="auth-label">
                Confirmă parola <span className="auth-label-required">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repetă parola"
                  className="auth-input pr-12"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="h-12 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Înapoi
              </button>
              <button
                type="submit"
                className="h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Creează cont
              </button>
            </div>
          </form>
        </>
      )}

      <p className="text-center text-sm text-muted-foreground mt-6">
        Deja ai un cont?{" "}
        <Link to="/sign-in" className="font-semibold text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
          Înapoi la login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
