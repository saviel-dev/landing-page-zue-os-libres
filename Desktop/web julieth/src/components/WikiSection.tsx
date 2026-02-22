import { useState } from "react";
import { BookOpen, Brain, Moon, Leaf, AlertTriangle, Smartphone, Baby, ChevronDown, ExternalLink } from "lucide-react";

interface WikiTopic {
  id: string;
  icon: React.ElementType;
  title: string;
  intro: string;
  content: React.ReactNode;
}

const topics: WikiTopic[] = [
  {
    id: "insomnio",
    icon: Moon,
    title: "¿Qué es el Insomnio?",
    intro: "Trastorno del sueño que afecta a millones de personas, dificultando conciliar o mantener el sueño.",
    content: (
      <>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          El insomnio es un trastorno del sueño común caracterizado por la dificultad para conciliar el sueño, mantenerse dormido o despertar muy temprano, lo que resulta en un sueño de mala calidad y no reparador. Afecta el funcionamiento diario, causando fatiga, irritabilidad y falta de concentración.
        </p>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Características y Síntomas</h4>
        <ul className="space-y-2 mb-6">
          {[
            { label: "Dificultad para iniciar el sueño", desc: "Tardar mucho tiempo en dormirse, a menudo más de 30 minutos." },
            { label: "Despertares nocturnos", desc: "Despertarse frecuentemente y tener problemas para volver a dormirse." },
            { label: "Despertar precoz", desc: "Despertarse demasiado temprano sin poder retomar el sueño." },
            { label: "Sueño no reparador", desc: "Sentirse cansado, agotado y sin energía al despertar." },
            { label: "Impacto diurno", desc: "Somnolencia, fatiga, irritabilidad, ansiedad, dolores de cabeza y dificultades cognitivas." },
          ].map((s) => (
            <li key={s.label} className="flex gap-3 items-start">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-muted-foreground text-sm"><strong className="text-foreground">{s.label}:</strong> {s.desc}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Tipos de Insomnio</h4>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg gradient-primary-soft">
            <h5 className="font-semibold text-foreground mb-1">Agudo</h5>
            <p className="text-sm text-muted-foreground">Temporal, vinculado a situaciones puntuales de estrés. Suele durar días o semanas y se resuelve solo.</p>
          </div>
          <div className="p-4 rounded-lg gradient-primary-soft">
            <h5 className="font-semibold text-foreground mb-1">Crónico</h5>
            <p className="text-sm text-muted-foreground">Persistente, ocurre al menos 3 veces por semana durante 3 meses o más. Requiere atención médica.</p>
          </div>
        </div>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Causas Comunes</h4>
        <ul className="space-y-2">
          {[
            "Estrés y factores emocionales: ansiedad, depresión o preocupaciones laborales/personales.",
            "Malos hábitos de sueño: horarios irregulares, uso de pantallas en la cama, cafeína o nicotina.",
            "Factores físicos: dolor crónico, problemas gastrointestinales, apnea del sueño o efectos secundarios de medicamentos.",
          ].map((c, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-muted-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "estrategias",
    icon: Brain,
    title: "Estrategias para Combatir el Insomnio",
    intro: "Técnicas y hábitos respaldados por la ciencia para mejorar la calidad de tu descanso.",
    content: (
      <>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Para combatir el insomnio es fundamental mejorar los hábitos de sueño. En casos crónicos, se recomienda buscar atención médica para tratar las causas subyacentes.
        </p>
        <div className="space-y-4">
          {[
            { title: "Rutina de Sueño Consistente", desc: "Acuéstate y levántate a la misma hora todos los días, incluso fines de semana, para regular tu reloj biológico (ritmo circadiano). La consistencia es clave para que tu cuerpo sepa cuándo es hora de dormir." },
            { title: "Optimiza el Entorno", desc: "Mantén el dormitorio a una temperatura agradable (18-20°C), oscuro y sin ruidos. Usa cortinas opacas, tapones para oídos o máquinas de ruido blanco si es necesario." },
            { title: "Relajación Pre-sueño", desc: "Toma una ducha caliente, lee un libro, escucha música suave o medita 30-60 minutos antes de acostarte. Evita actividades estimulantes." },
            { title: "Limitar Estimulantes", desc: "Evita la cafeína y el alcohol después del mediodía. Aunque el alcohol induce somnolencia inicial, fragmenta el sueño durante la noche." },
            { title: "Manejo de Tecnología", desc: "Evita pantallas (celulares, tablets, televisión) al menos una hora antes de dormir. La luz azul suprime la producción de melatonina, la hormona del sueño." },
            { title: "Técnica de los 20 minutos", desc: "Si tras 20-30 minutos no has conciliado el sueño, levántate y haz una actividad relajante sin pantallas. Regresa a la cama solo cuando sientas sueño." },
            { title: "Alimentación y Ejercicio", desc: "Realiza ejercicio físico regular pero no cerca de la hora de dormir. Evita comidas pesadas por la noche, aunque un refrigerio ligero puede ayudar." },
            { title: "Técnicas Respiratorias", desc: "Practica la respiración abdominal: inhala lentamente por la nariz (4 seg), retén el aire (7 seg) y exhala por la boca (8 seg). Repite 4 veces." },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-lg border border-border">
              <h5 className="font-semibold text-foreground mb-1">{s.title}</h5>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "estres",
    icon: AlertTriangle,
    title: "Insomnio por Estrés y Trauma",
    intro: "Cómo el estrés y las experiencias traumáticas afectan al sueño, y tratamientos especializados.",
    content: (
      <>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Insomnio por Estrés</h4>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Ocurre cuando preocupaciones (trabajo, familia, salud) activan la mente de noche, impidiendo el descanso. Suele ser un insomnio agudo que desaparece al resolverse el conflicto. Sin embargo, si se prolonga más de tres semanas puede volverse crónico y derivar en ansiedad o depresión.
        </p>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Insomnio por Trauma (TEPT)</h4>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Es un síntoma frecuente del Trastorno de Estrés Postraumático, donde la exposición al trauma duplica o triplica el riesgo de insomnio. Se caracteriza por:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Miedo a dormir por temor a pesadillas o perder el control.",
            "Hiperactivación: estado de alerta constante que impide el descanso.",
            "Pesadillas recurrentes relacionadas con el evento traumático.",
            "Hipervigilancia que afecta la fase REM del sueño.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Tratamientos Especializados</h4>
        <div className="space-y-3">
          {[
            { title: "TCC-I (Terapia Cognitivo-Conductual para Insomnio)", desc: "El tratamiento más efectivo, mejora el sueño en aproximadamente el 80% de los casos. Reestructura pensamientos y comportamientos negativos asociados al sueño." },
            { title: "Terapia de Ensayo en Imaginación (IRT)", desc: "Enfocada en modificar las pesadillas recurrentes. El paciente reescribe el guion de sus pesadillas durante el día para reducir su impacto nocturno." },
            { title: "EMDR", desc: "Desensibilización y Reprocesamiento por Movimientos Oculares. Útil para reducir la frecuencia y gravedad de las pesadillas al trabajar el trauma subyacente." },
            { title: "Técnicas de conexión a tierra", desc: "Ejercicios de respiración o meditación para reducir la ansiedad al despertar de una pesadilla. Incluyen la técnica 5-4-3-2-1 (5 cosas que ves, 4 que tocas, etc.)." },
          ].map((t, i) => (
            <div key={i} className="p-4 rounded-lg gradient-primary-soft">
              <h5 className="font-semibold text-foreground mb-1">{t.title}</h5>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "plantas",
    icon: Leaf,
    title: "Plantas Medicinales para Dormir",
    intro: "Remedios naturales con eficacia comprobada para mejorar la calidad del sueño.",
    content: (
      <>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Las plantas medicinales han sido utilizadas durante siglos para tratar problemas de sueño. Se consumen generalmente en infusiones 30-60 minutos antes de dormir, ayudando a calmar la mente y reducir la tensión muscular.
        </p>
        <div className="space-y-4 mb-6">
          {[
            { name: "Raíz de Valeriana", latin: "Valeriana officinalis", desc: "Considerada uno de los mejores remedios para el insomnio. Contiene ácido valerénico que actúa sobre los receptores GABA del cerebro, produciendo un efecto sedante natural. Reduce el tiempo para conciliar el sueño hasta en un 40%." },
            { name: "Pasiflora", latin: "Passiflora incarnata", desc: "Ideal para personas con 'pensamientos acelerados' que no pueden calmar su mente por la noche. Aumenta los niveles de GABA, reduciendo significativamente los despertares nocturnos." },
            { name: "Manzanilla", latin: "Matricaria chamomilla", desc: "Una ayuda suave y efectiva. Contiene apigenina, un flavonoide que se une a los receptores de benzodiacepinas del cerebro, produciendo relajación. Su efecto calmante está comprobado en estudios clínicos." },
            { name: "Melisa o Toronjil", latin: "Melissa officinalis", desc: "Planta relajante que equilibra el sistema nervioso. Especialmente efectiva para el insomnio asociado al estrés leve o moderado. Actúa en aproximadamente 20 minutos." },
            { name: "Amapola de California", latin: "Eschscholzia californica", desc: "Ayuda a regular el ciclo del sueño (ritmo circadiano) y mejora la conciliación de forma natural, sin efectos secundarios significativos." },
            { name: "Lavanda", latin: "Lavandula", desc: "Versátil: puede usarse en aromaterapia (aceite esencial) o como infusión. El linalool de la lavanda reduce los niveles de cortisol y la frecuencia cardíaca, facilitando la relajación." },
            { name: "Lúpulo", latin: "Humulus lupulus", desc: "Contiene 2-metil-3-buten-2-ol, un compuesto con efectos sedantes. Se utiliza frecuentemente en combinación con valeriana para potenciar sus efectos." },
          ].map((p, i) => (
            <div key={i} className="p-4 rounded-lg border border-border">
              <div className="flex items-baseline gap-2 mb-1">
                <h5 className="font-semibold text-foreground">{p.name}</h5>
                <span className="text-xs italic text-muted-foreground">({p.latin})</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-lg bg-accent">
          <h5 className="font-semibold text-accent-foreground mb-2">⚠️ Recomendaciones de uso</h5>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Tomar infusiones entre 30-60 minutos antes de dormir.</li>
            <li>• La melatonina y el magnesio son suplementos naturales complementarios.</li>
            <li>• Consultar a un médico antes de combinar con otros medicamentos.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Apps y Tecnología para el Sueño",
    intro: "Herramientas digitales que combinan meditación, sonidos relajantes y monitoreo del sueño.",
    content: (
      <>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Apps de Relajación y Meditación</h4>
        <div className="space-y-3 mb-6">
          {[
            { name: "Calm", platform: "iOS / Android", desc: "Historias para dormir narradas por voces relajantes, meditaciones guiadas y paisajes sonoros. Ideal para reducir la ansiedad antes de dormir." },
            { name: "Headspace", platform: "iOS / Android", desc: "Incluye 'Sleepcasts' (narraciones relajantes) y técnicas de TCC-I. Programa estructurado para mejorar progresivamente el sueño." },
            { name: "BetterSleep", platform: "iOS / Android", desc: "Permite mezclar sonidos binaurales e isocrónicos para crear un ambiente sonoro personalizado adaptado a tus preferencias." },
            { name: "Loóna", platform: "iOS / Android", desc: "Enfocada en relajación emocional a través de narrativas guiadas y actividades inmersivas antes de dormir." },
            { name: "Insomnia App", platform: "Gratuita", desc: "Especializada en afirmaciones positivas y sonidos diseñados específicamente para combatir el insomnio." },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-lg gradient-primary-soft flex justify-between items-start gap-4">
              <div>
                <h5 className="font-semibold text-foreground">{a.name}</h5>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
              <span className="text-xs text-primary font-medium whitespace-nowrap shrink-0">{a.platform}</span>
            </div>
          ))}
        </div>
        <h4 className="font-display text-lg font-semibold text-foreground mb-3">Apps de Monitoreo y Análisis</h4>
        <div className="space-y-3">
          {[
            { name: "Sleep Cycle", desc: "Analiza patrones de sueño a través del sonido o movimiento para despertarte en la fase más ligera." },
            { name: "Sleep as Android", desc: "Gráficas detalladas, detección de ronquidos y alarmas inteligentes basadas en tus ciclos de sueño." },
            { name: "Pillow", desc: "Ideal para Apple Watch. Analiza las etapas de sueño: REM, profundo y ligero con gran precisión." },
            { name: "SleepScore", desc: "Usa sonar pasivo para evaluar la calidad del sueño sin necesidad de llevar puesto ningún dispositivo." },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-lg border border-border">
              <h5 className="font-semibold text-foreground mb-1">{a.name}</h5>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "edades",
    icon: Baby,
    title: "El Insomnio Según la Edad",
    intro: "Cómo afecta el insomnio en cada etapa de la vida, desde la infancia hasta la vejez.",
    content: (
      <>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          El insomnio puede comenzar a cualquier edad, pero su prevalencia y características varían significativamente según la etapa de la vida.
        </p>
        <div className="space-y-4">
          {[
            { stage: "Infancia (6 meses – 5 años)", prevalence: "20-30%", desc: "Predomina el insomnio conductual: resistencia a acostarse y despertares nocturnos frecuentes. Generalmente se asocia a la falta de rutinas consistentes y a la dificultad del niño para aprender a dormirse solo. La intervención temprana con rutinas de sueño estructuradas es muy efectiva." },
            { stage: "Adolescencia", prevalence: "15-25%", desc: "Aparece el síndrome de retraso de fase: el reloj biológico se desplaza, dificultando dormir temprano y despertarse a tiempo. El uso excesivo de pantallas y la presión académica empeoran el problema. Afecta directamente el rendimiento escolar y el estado emocional." },
            { stage: "Adultez (25-60 años)", prevalence: "30-40%", desc: "El estrés laboral, las responsabilidades familiares y los cambios hormonales (especialmente en mujeres durante el embarazo y la menopausia) son los principales desencadenantes. El insomnio crónico es más común en esta etapa." },
            { stage: "Vejez (60+ años)", prevalence: "Hasta 50%", desc: "Cambios fisiológicos naturales reducen el sueño profundo. El dolor crónico, el uso de múltiples medicamentos y condiciones como la apnea del sueño contribuyen significativamente. Se recomienda especial atención a la higiene del sueño." },
          ].map((s, i) => (
            <div key={i} className="p-5 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-foreground">{s.stage}</h5>
                <span className="text-xs font-semibold text-primary bg-accent rounded-full px-3 py-1">Prevalencia: {s.prevalence}</span>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg gradient-primary-soft">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Dato importante:</strong> El riesgo de insomnio es mayor en mujeres y aumenta con el estrés, cambios de horario o enfermedades crónicas. La detección temprana y el tratamiento adecuado son fundamentales en todas las edades.
          </p>
        </div>
      </>
    ),
  },
];

const WikiSection = () => {
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const toggle = (id: string) => setOpenTopic(openTopic === id ? null : id);

  return (
    <section id="wiki" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Base de conocimiento
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Wiki del Sueño
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Información completa y detallada sobre el insomnio, sus causas, tratamientos naturales y herramientas
            para mejorar tu descanso. Basada en fuentes médicas y científicas.
          </p>
        </div>

        {/* Topics */}
        <div className="max-w-4xl mx-auto space-y-4">
          {topics.map((topic, i) => {
            const isOpen = openTopic === topic.id;
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className={`reveal reveal-delay-${(i % 4) + 1} rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 ${isOpen ? "shadow-brand" : ""}`}
              >
                <button
                  onClick={() => toggle(topic.id)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5 truncate">{topic.intro}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'text-primary rotate-180' : 'text-muted-foreground'}`}
                  />
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition: "grid-template-rows 350ms ease, opacity 300ms ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div className="px-6 pb-6 pt-2 border-t border-border">
                      {topic.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resources */}
        <div className="max-w-4xl mx-auto mt-12 reveal">
          <div className="p-6 rounded-xl gradient-primary-soft border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recursos y Referencias
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "MedlinePlus — Insomnio", url: "https://medlineplus.gov/spanish/insomnia.html" },
                { label: "MedlinePlus — Higiene del Sueño", url: "https://medlineplus.gov/spanish/ency/patientinstructions/000853.htm" },
                { label: "Healthline — Remedios Naturales", url: "https://www.healthline.com/health/es/remedios-naturales-para-dormir" },
                { label: "ScienceDirect — Insomnio y Trauma", url: "https://www.sciencedirect.com/science/article/abs/pii/S108707922030126X" },
              ].map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
