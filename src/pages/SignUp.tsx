import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, ChevronLeft } from "lucide-react";

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

  const [cui, setCui] = useState("");
  const [numeFirma, setNumeFirma] = useState("");
  const [cuiManual, setCuiManual] = useState("");
  const [regComert, setRegComert] = useState("");
  const [adresa, setAdresa] = useState("");
  const [judet, setJudet] = useState("");
  const [localitate, setLocalitate] = useState("");
  const [platitorTva, setPlatitorTva] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCuiLookup = (e: React.FormEvent) => { e.preventDefault(); setStep(2); };
  const handleCompanySubmit = (e: React.FormEvent) => { e.preventDefault(); setStep(3); };
  const handleAccountSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 sm:px-10 pt-8 pb-4">
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L6 8L14 14L22 8L14 2Z" fill="hsl(var(--accent))" opacity="0.9" />
            <path d="M14 14L6 20L14 26L22 20L14 14Z" fill="hsl(var(--foreground))" opacity="0.7" />
            <path d="M14 8L6 14L14 20L22 14L14 8Z" fill="hsl(var(--foreground))" opacity="0.3" />
          </svg>
          <span className="text-base font-bold tracking-tight text-foreground">Factura</span>
        </div>
        <Link to="/sign-in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Ai deja cont? <span className="font-semibold text-foreground underline underline-offset-2">Conectează-te</span>
        </Link>
      </header>

      {/* Step indicator — thin accent bar */}
      <div className="px-6 sm:px-10">
        <div className="max-w-2xl mx-auto flex gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                s < step
                  ? "bg-accent"
                  : s === step
                  ? "bg-accent"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main content — vertically centered */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-10 pb-16">
        <div className="w-full max-w-2xl">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-fade-in">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
                Pasul 1 — Identificare
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
                Cu ce firmă
                <br />
                <span className="text-accent">lucrezi?</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-10">
                Introdu codul fiscal sau denumirea, iar noi completăm datele automat.
              </p>

              <form onSubmit={handleCuiLookup} className="space-y-4 max-w-lg">
                <div className="relative">
                  <input
                    type="text"
                    value={cui}
                    onChange={(e) => setCui(e.target.value)}
                    placeholder="Codul fiscal sau denumirea firmei"
                    className="w-full h-14 pl-5 pr-36 rounded-2xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-xl bg-accent text-accent-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Continuă
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              <button
                type="button"
                onClick={() => { setMode("manual"); setStep(2); }}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Completez manual, fără cod fiscal
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-fade-in">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ChevronLeft size={16} />
                Înapoi
              </button>

              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
                Pasul 2 — Date firmă
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-2">
                Completează
                <br />
                <span className="text-accent">datele firmei.</span>
              </h1>
              <p className="text-muted-foreground text-base mb-8">
                Verifică informațiile precompletate și adaugă ce lipsește.
              </p>

              <form onSubmit={handleCompanySubmit} className="space-y-4 max-w-lg">
                <div>
                  <label className="signup-label">Numele firmei <span className="text-accent">*</span></label>
                  <input type="text" value={numeFirma} onChange={(e) => setNumeFirma(e.target.value)}
                    placeholder="S.C. Exemplu S.R.L." className="signup-field" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="signup-label">CUI <span className="text-accent">*</span></label>
                    <input type="text" value={cuiManual || cui} onChange={(e) => setCuiManual(e.target.value)}
                      placeholder="RO12345678" className="signup-field" required />
                  </div>
                  <div>
                    <label className="signup-label">Reg. comerț</label>
                    <input type="text" value={regComert} onChange={(e) => setRegComert(e.target.value)}
                      placeholder="J00/000/0000" className="signup-field" />
                  </div>
                </div>

                <div>
                  <label className="signup-label">Adresă <span className="text-accent">*</span></label>
                  <input type="text" value={adresa} onChange={(e) => setAdresa(e.target.value)}
                    placeholder="Strada, nr., bloc, etc." className="signup-field" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="signup-label">Județ <span className="text-accent">*</span></label>
                    <select value={judet} onChange={(e) => setJudet(e.target.value)}
                      className="signup-field appearance-none cursor-pointer" required>
                      <option value="">Selectează</option>
                      {JUDETE.map((j) => <option key={j} value={j}>{j}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="signup-label">Localitate</label>
                    <input type="text" value={localitate} onChange={(e) => setLocalitate(e.target.value)}
                      placeholder="ex: Oradea" className="signup-field" />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <span className="text-sm font-medium text-foreground">
                    Plătitor TVA? <span className="text-accent">*</span>
                  </span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="tva" checked={platitorTva} onChange={() => setPlatitorTva(true)}
                      className="accent-accent" />
                    <span className="text-sm">Da</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="tva" checked={!platitorTva} onChange={() => setPlatitorTva(false)}
                      className="accent-accent" />
                    <span className="text-sm">Nu</span>
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit"
                    className="h-12 px-10 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Continuă
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-fade-in">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ChevronLeft size={16} />
                Înapoi
              </button>

              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
                Pasul 3 — Cont
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-2">
                Ultimul pas.
                <br />
                <span className="text-accent">Creează-ți contul.</span>
              </h1>
              <p className="text-muted-foreground text-base mb-8">
                Setează adresa de e-mail și o parolă pentru acces.
              </p>

              <form onSubmit={handleAccountSubmit} className="space-y-5 max-w-lg">
                <div>
                  <label className="signup-label">E-mail <span className="text-accent">*</span></label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplu@firma.ro" className="signup-field" required />
                </div>

                <div>
                  <label className="signup-label">Parolă <span className="text-accent">*</span></label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} value={password}
                      onChange={(e) => setPassword(e.target.value)} placeholder="Minim 8 caractere"
                      className="signup-field pr-12" required minLength={8} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="signup-label">Confirmă parola <span className="text-accent">*</span></label>
                  <div className="relative">
                    <input type={showConfirm ? "text" : "password"} value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repetă parola"
                      className="signup-field pr-12" required minLength={8} />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit"
                    className="h-12 px-10 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Creează cont
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SignUp;
