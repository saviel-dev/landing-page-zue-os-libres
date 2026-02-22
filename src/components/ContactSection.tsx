import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Ingresa un email válido").max(255),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

interface FieldProps {
  id: string;
  label: string;
  icon: React.ElementType;
  error?: string;
  children: React.ReactNode;
}

const Field = ({ id, label, icon: Icon, error, children }: FieldProps) => (
  <div style={{ marginBottom: "1.4rem" }}>
    <div
      className={`cf-field${error ? " cf-field--error" : ""}`}
    >
      <span className="cf-field__icon-wrap">
        <Icon className="cf-field__icon" />
      </span>
      <div style={{ flex: 1, position: "relative" }}>
        {children}
        <label htmlFor={id} className="cf-label">{label}</label>
      </div>
      <span className="cf-bar" />
    </div>
    {error && (
      <p className="cf-error">
        <span className="cf-error__dot" />
        {error}
      </p>
    )}
  </div>
);

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fe[err.path[0] as string] = err.message; });
      setErrors(fe);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("¡Mensaje enviado con éxito!");
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
    }, 1200);
  };

  const ripple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const d = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    const span = document.createElement("span");
    span.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - rect.left - d / 2}px;top:${e.clientY - rect.top - d / 2}px;position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:cf-ripple .55s linear;pointer-events:none;`;
    btn.appendChild(span);
    setTimeout(() => span.remove(), 600);
  };

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes cf-ripple { to { transform:scale(3); opacity:0; } }
        @keyframes cf-shake  { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-6px)} 40%,80%{transform:translateX(6px)} }
        @keyframes cf-pop    { 0%{transform:scale(0.6);opacity:0} 70%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
        @keyframes cf-spin   { to{transform:rotate(360deg)} }
        @keyframes cf-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
        @keyframes cf-pulse  { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.6;transform:scale(1.06)} }
        @keyframes cf-slide  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

        /* ── Section shell ── */
        #contacto {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.4) 100%);
        }

        /* Decorative orbs */
        .cf-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: cf-pulse 7s ease-in-out infinite;
        }
        .cf-orb--1 {
          width: 480px; height: 480px;
          left: -180px; top: -100px;
          background: hsl(var(--primary)/0.18);
          animation-delay: 0s;
        }
        .cf-orb--2 {
          width: 360px; height: 360px;
          right: -120px; bottom: -80px;
          background: hsl(var(--primary)/0.12);
          animation-delay: 3.5s;
        }
        .cf-orb--3 {
          width: 260px; height: 260px;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          background: hsl(var(--primary)/0.08);
          animation-delay: 1.8s;
        }

        /* Floating sparkle dots */
        .cf-dot {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: hsl(var(--primary)/0.5);
          animation: cf-float 6s ease-in-out infinite;
        }
        .cf-dot:nth-child(1){ top:18%; left:12%; animation-duration:6s; }
        .cf-dot:nth-child(2){ top:70%; left:8%;  animation-duration:8s; animation-delay:1s; }
        .cf-dot:nth-child(3){ top:30%; right:10%;animation-duration:7s; animation-delay:0.5s; }
        .cf-dot:nth-child(4){ top:80%; right:15%;animation-duration:9s; animation-delay:2s; }

        /* ── Badge ── */
        .cf-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 1rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: hsl(var(--primary)/0.12);
          color: hsl(var(--primary));
          border: 1px solid hsl(var(--primary)/0.25);
          margin-bottom: 1rem;
        }

        /* ── Card ── */
        .cf-card {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          background: hsl(var(--card)/0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid hsl(var(--border)/0.6);
          border-radius: 2rem;
          padding: 3rem 2.5rem;
          box-shadow:
            0 0 0 1px hsl(var(--primary)/0.06),
            0 20px 60px -16px hsl(var(--primary)/0.22),
            0 4px 16px -4px hsl(var(--background)/0.6);
          animation: cf-slide 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .cf-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          background: linear-gradient(135deg, hsl(var(--primary)/0.07) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Top accent line */
        .cf-card-accent {
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent);
        }

        /* ── Card title area ── */
        .cf-card-title {
          font-size: 1.55rem;
          font-weight: 700;
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.4rem;
          font-family: var(--font-display, serif);
        }
        .cf-card-sub {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          margin: 0 0 2rem;
          line-height: 1.6;
        }

        /* Divider */
        .cf-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, hsl(var(--border)), transparent);
          margin: 0 0 2rem;
        }

        /* ── Input field ── */
        .cf-field {
          position: relative;
          display: flex;
          align-items: flex-start;
          border: 1.5px solid hsl(var(--border));
          border-radius: 0.875rem;
          background: hsl(var(--background)/0.6);
          backdrop-filter: blur(8px);
          transition: border-color .25s, box-shadow .25s, transform .2s, background .25s;
          overflow: hidden;
        }
        .cf-field:hover {
          background: hsl(var(--background)/0.9);
          border-color: hsl(var(--primary)/0.45);
          box-shadow: 0 0 0 5px hsl(var(--primary)/0.07);
          transform: translateY(-1px);
        }
        .cf-field:focus-within {
          border-color: hsl(var(--primary));
          background: hsl(var(--background));
          box-shadow: 0 0 0 5px hsl(var(--primary)/0.14), 0 4px 16px -6px hsl(var(--primary)/0.3);
          transform: translateY(-2px);
        }
        .cf-field--error {
          border-color: hsl(var(--destructive)) !important;
          box-shadow: 0 0 0 4px hsl(var(--destructive)/0.1) !important;
          animation: cf-shake .35s ease;
        }

        /* Icon column */
        .cf-field__icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          padding-top: 1rem;
          flex-shrink: 0;
        }
        .cf-field__icon {
          width: 1rem; height: 1rem;
          color: hsl(var(--muted-foreground));
          transition: color .25s, transform .3s;
        }
        .cf-field:focus-within .cf-field__icon {
          color: hsl(var(--primary));
          transform: scale(1.2) rotate(-8deg);
        }

        /* Inputs */
        .cf-field input,
        .cf-field textarea {
          width: 100%;
          padding: 1.3rem 1rem 0.5rem 0.2rem;
          background: transparent;
          border: none;
          outline: none;
          font-size: 0.9rem;
          color: hsl(var(--foreground));
          resize: none;
          font-family: inherit;
          line-height: 1.55;
        }
        .cf-field textarea { min-height: 120px; }

        /* Floating label */
        .cf-label {
          position: absolute;
          left: 0.2rem;
          top: 0.95rem;
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          pointer-events: none;
          transition: all .22s cubic-bezier(0.4,0,0.2,1);
          transform-origin: left top;
        }
        .cf-field:focus-within .cf-label,
        .cf-field input:not(:placeholder-shown) ~ .cf-label,
        .cf-field textarea:not(:placeholder-shown) ~ .cf-label {
          transform: translateY(-0.58rem) scale(0.78);
          color: hsl(var(--primary));
          font-weight: 600;
        }

        /* Bottom bar */
        .cf-bar {
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, hsl(var(--primary)/0.6), hsl(var(--primary)), hsl(var(--primary)/0.6));
          border-radius: 2px;
          transition: width .35s ease, left .35s ease;
        }
        .cf-field:focus-within .cf-bar { width: 100%; left: 0; }

        /* ── Error ── */
        .cf-error {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.4rem;
          font-size: 0.76rem;
          color: hsl(var(--destructive));
          animation: cf-slide .22s ease;
        }
        .cf-error__dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: hsl(var(--destructive));
          flex-shrink: 0;
        }

        /* ── Character counter ── */
        .cf-counter {
          text-align: right;
          font-size: 0.72rem;
          color: hsl(var(--muted-foreground));
          margin-top: 0.3rem;
          transition: color .2s;
        }
        .cf-counter--warn { color: hsl(var(--destructive)); }

        /* ── Submit ── */
        .cf-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 1rem 2rem;
          border-radius: 0.875rem;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.025em;
          font-family: inherit;
          margin-top: 1.5rem;
          transition: transform .2s, box-shadow .2s, opacity .2s;
        }
        .cf-btn:not(:disabled):hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px -8px hsl(var(--primary)/0.55);
        }
        .cf-btn:not(:disabled):active { transform: translateY(0) scale(0.98); }
        .cf-btn:disabled { cursor: not-allowed; opacity: .7; }

        /* Spinner */
        .cf-spinner {
          width: 1.1rem; height: 1.1rem;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: cf-spin .7s linear infinite;
        }

        /* Success icon */
        .cf-check { animation: cf-pop .4s cubic-bezier(0.34,1.56,0.64,1); }

        /* ── Footer hint ── */
        .cf-hint {
          text-align: center;
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground)/0.7);
          margin-top: 1.2rem;
        }
        .cf-hint span {
          color: hsl(var(--primary)/0.8);
          font-weight: 600;
        }
      `}</style>

      <section id="contacto" className="py-28">
        {/* Decorative background */}
        <div className="cf-orb cf-orb--1" />
        <div className="cf-orb cf-orb--2" />
        <div className="cf-orb cf-orb--3" />
        <div className="cf-dot" />
        <div className="cf-dot" />
        <div className="cf-dot" />
        <div className="cf-dot" />

        <div className="container mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
          {/* Section header */}
          <div className="text-center mb-14 reveal">
            <div className="cf-badge">
              <Sparkles style={{ width: "0.8rem", height: "0.8rem" }} />
              Contáctanos
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Estamos para{" "}
              <span style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.6))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ayudarte
              </span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              ¿Tienes preguntas sobre nuestros productos naturales? Nuestro equipo de especialistas
              está listo para orientarte en tu camino hacia un mejor descanso.
            </p>
          </div>

          {/* Card */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="cf-card reveal">
              <div className="cf-card-accent" />

              {/* Card header */}
              <h3 className="cf-card-title">Envíanos un mensaje</h3>
              <p className="cf-card-sub">
                Responderemos a tu consulta en menos de 24 horas. Todos los campos son obligatorios.
              </p>
              <div className="cf-divider" />

              <Field id="name" label="Nombre completo" icon={User} error={errors.name}>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder=" "
                  autoComplete="off"
                />
              </Field>

              <Field id="email" label="Correo electrónico" icon={Mail} error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder=" "
                  autoComplete="off"
                />
              </Field>

              <Field id="message" label="Tu mensaje" icon={MessageSquare} error={errors.message}>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder=" "
                  maxLength={1000}
                />
              </Field>

              <p className={`cf-counter${form.message.length > 900 ? " cf-counter--warn" : ""}`}>
                {form.message.length} / 1000
              </p>

              <button
                ref={btnRef}
                type="submit"
                disabled={sent || loading}
                className="cf-btn gradient-primary text-primary-foreground shadow-brand"
                onClick={ripple}
              >
                {loading ? (
                  <span className="cf-spinner" />
                ) : sent ? (
                  <>
                    <CheckCircle style={{ width: "1.1rem", height: "1.1rem" }} className="cf-check" />
                    ¡Mensaje enviado con éxito!
                  </>
                ) : (
                  <>
                    <Send style={{ width: "1.1rem", height: "1.1rem" }} />
                    Enviar mensaje
                  </>
                )}
              </button>

              <p className="cf-hint">
                Tu información está protegida · <span>Respuesta en &lt;24h</span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
