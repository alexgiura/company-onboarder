import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
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
    <div className="min-h-screen bg-primary text-primary-foreground flex flex-col">
      {/* Logo top-left */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L6 8L14 14L22 8L14 2Z" fill="hsl(var(--accent))" opacity="0.9" />
            <path d="M14 14L6 20L14 26L22 20L14 14Z" fill="hsl(var(--primary-foreground))" opacity="0.7" />
            <path d="M14 8L6 14L14 20L22 14L14 8Z" fill="hsl(var(--primary-foreground))" opacity="0.4" />
          </svg>
          <span className="text-base font-bold tracking-tight text-primary-foreground">Factura</span>
        </div>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-xl text-center">

          {/* STEP 1 - CUI */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-primary-foreground">
                Pentru ce firmă creezi contul Factura?
              </h1>
              <p className="text-primary-foreground/60 text-sm sm:text-base mb-10">
                Introdu codul fiscal sau denumirea firmei. Vom prelua datele automat.
              </p>

              <form onSubmit={handleCuiLookup} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="text"
                  value={cui}
                  onChange={(e) => setCui(e.target.value)}
                  placeholder="Introdu codul fiscal sau denumirea"
                  className="flex-1 h-12 px-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="h-12 px-8 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shrink-0"
                >
                  Continuă
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 text-left max-w-lg mx-auto">
                <p className="text-primary-foreground/40 text-sm">sau</p>
                <button
                  type="button"
                  onClick={() => { setMode("manual"); setStep(2); }}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Sari acest pas și introdu mai târziu codul fiscal
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 - Company details */}
          {step === 2 && (
            <div className="animate-fade-in text-left max-w-md mx-auto">
              <StepProgress current={2} total={3} />
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
                Datele firmei tale
              </h1>
              <p className="text-primary-foreground/60 text-sm mb-8">
                Verifică și completează informațiile companiei.
              </p>

              <form onSubmit={handleCompanySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                    Numele firmei <span className="text-accent">*</span>
                  </label>
                  <input type="text" value={numeFirma} onChange={(e) => setNumeFirma(e.target.value)}
                    placeholder="Numele firmei" className="signup-input" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                      CUI <span className="text-accent">*</span>
                    </label>
                    <input type="text" value={cuiManual || cui} onChange={(e) => setCuiManual(e.target.value)}
                      placeholder="RO12345678" className="signup-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                      Reg. comerț
                    </label>
                    <input type="text" value={regComert} onChange={(e) => setRegComert(e.target.value)}
                      placeholder="J00/000/0000" className="signup-input" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                    Adresă <span className="text-accent">*</span>
                  </label>
                  <input type="text" value={adresa} onChange={(e) => setAdresa(e.target.value)}
                    placeholder="Strada, nr., bloc, etc." className="signup-input" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                      Județ <span className="text-accent">*</span>
                    </label>
                    <select value={judet} onChange={(e) => setJudet(e.target.value)}
                      className="signup-input appearance-none cursor-pointer" required>
                      <option value="">Selectează județul</option>
                      {JUDETE.map((j) => <option key={j} value={j}>{j}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                      Localitate
                    </label>
                    <input type="text" value={localitate} onChange={(e) => setLocalitate(e.target.value)}
                      placeholder="ex: Oradea" className="signup-input" />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <span className="text-sm font-medium text-primary-foreground/80">
                    Plătitor TVA? <span className="text-accent">*</span>
                  </span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="tva" checked={platitorTva} onChange={() => setPlatitorTva(true)}
                      className="accent-accent" />
                    <span className="text-sm text-primary-foreground">Da</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="tva" checked={!platitorTva} onChange={() => setPlatitorTva(false)}
                      className="accent-accent" />
                    <span className="text-sm text-primary-foreground">Nu</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button type="button" onClick={() => setStep(1)}
                    className="h-12 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/5 transition-colors">
                    Înapoi
                  </button>
                  <button type="submit"
                    className="h-12 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                    Continuă
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3 - Account */}
          {step === 3 && (
            <div className="animate-fade-in text-left max-w-md mx-auto">
              <StepProgress current={3} total={3} />
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
                Creează-ți contul
              </h1>
              <p className="text-primary-foreground/60 text-sm mb-8">
                Ultimul pas — setează credențialele de acces.
              </p>

              <form onSubmit={handleAccountSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                    E-mail <span className="text-accent">*</span>
                  </label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplu@firma.ro" className="signup-input" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                    Parolă <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} value={password}
                      onChange={(e) => setPassword(e.target.value)} placeholder="Minim 8 caractere"
                      className="signup-input pr-12" required minLength={8} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">
                    Confirmă parola <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input type={showConfirm ? "text" : "password"} value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repetă parola"
                      className="signup-input pr-12" required minLength={8} />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                      {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button type="button" onClick={() => setStep(2)}
                    className="h-12 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/5 transition-colors">
                    Înapoi
                  </button>
                  <button type="submit"
                    className="h-12 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                    Creează cont
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Footer link */}
          <p className="text-sm text-primary-foreground/40 mt-10">
            Deja ai un cont?{" "}
            <Link to="/sign-in" className="font-semibold text-primary-foreground/70 underline underline-offset-2 hover:text-primary-foreground transition-colors">
              Înapoi la login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
