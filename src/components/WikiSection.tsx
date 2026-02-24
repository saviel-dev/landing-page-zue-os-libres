import { useState, useEffect, useRef } from "react";
import { BookOpen, Brain, Moon, Leaf, AlertTriangle, Smartphone, Baby, ChevronDown, ExternalLink, Zap, Coffee, PenLine, Award, Music2, Lightbulb, PhoneOff, Headphones, Wind, Ban, MonitorX, Clock, ArrowRight } from "lucide-react";
import anime from "animejs";
import insomioImg from "../assets/wiki media/Insomio.png";
import combatirInsomioImg from "../assets/wiki media/combatir insomio.png";
import insomioEstresImg from "../assets/wiki media/insomio por estres.png";
import appsSuenoImg from "../assets/wiki media/apps para el sueño.png";
import insomioEdadImg from "../assets/wiki media/insomio segun la edad.png";

interface WikiTopic {
  id: string;
  icon: React.ElementType;
  title: string;
  intro: string;
  content: React.ReactNode;
  image?: string;
}

const topics: WikiTopic[] = [
  {
    id: "insomnio",
    icon: Moon,
    title: "¿Qué es el Insomnio?",
    intro: "Trastorno del sueño que afecta a millones de personas, dificultando conciliar o mantener el sueño.",
    image: insomioImg,
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
    image: combatirInsomioImg,
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
  // ─── NUEVA SECCIÓN: Condicionamiento Operante ───
  {
    id: "condicionamiento",
    icon: Zap,
    title: "Condicionamiento Operante y Hábitos Naturales del Sueño",
    intro: "Cómo el reforzamiento positivo, negativo y el castigo moderado te ayudan a construir rutinas de descanso basadas en plantas y hábitos saludables.",
    content: (
      <>
        {/* ─ Intro ─ */}
        <p className="mb-4 text-muted-foreground leading-relaxed">
          El <strong className="text-foreground">condicionamiento operante</strong>, desarrollado por el psicólogo B. F. Skinner, explica cómo las consecuencias de nuestras acciones moldean nuestra conducta futura. Aplicado al sueño, este marco nos permite diseñar rutinas nocturnas con mayor intención: potenciar los hábitos que favorecen el descanso y reducir, de forma suave, los que lo sabotean. Lo mejor es que encaja de forma natural con las terapias a base de plantas, las rutinas de relajación y el bienestar integral que promueve Zueños Libres.
        </p>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          A diferencia de los enfoques puramente farmacológicos, combinar <em>reforzamiento insomnio natural</em> con hierbas como valeriana, pasiflora o manzanilla crea un ciclo poderoso: la mente asocia progresivamente la rutina nocturna con calma y sueño, haciendo que cada noche sea más fácil que la anterior.
        </p>

        {/* ─ Reforzamiento Positivo ─ */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
            <span className="text-primary-foreground font-bold text-base leading-none">+</span>
          </div>
          <h4 className="font-display text-lg font-semibold text-foreground">Reforzamiento Positivo</h4>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <p className="mb-5 text-muted-foreground leading-relaxed">
          El <strong className="text-foreground">reforzamiento positivo</strong> consiste en añadir una consecuencia agradable después de una conducta deseada, aumentando las probabilidades de que esa conducta se repita. Cuando conectas algo que te gusta (el aroma de la manzanilla, la calidez de una taza de valeriana) con el momento de prepararte para dormir, tu cerebro empieza a anticipar el descanso con placer en lugar de estrés.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {([
            { Icon: Coffee, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", title: "Ritual de infusión nocturna", desc: "Prepara manzanilla o melisa 30 min antes de acostarte. El olor y el calor actúan como señal sensorial que le indica al cerebro que es hora de relajarse. La repetición fortalece la asociación y reduce el tiempo para conciliar el sueño." },
            { Icon: PenLine, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/10", title: "Diario de gratitud + valeriana", desc: "Escribe 3 cosas positivas del día mientras tomas tu infusión de valeriana. El estado emocional positivo combinado con el efecto sedante de la planta refuerza ambas conductas simultáneamente." },
            { Icon: Award, color: "text-primary", bg: "bg-primary/10", title: "Pasiflora como recompensa de rutina", desc: "Reserva la pasiflora para los días en que completas toda tu rutina: estiramientos, apagar pantallas y lectura. La asocias con el 'premio' al esfuerzo, motivando mantener la rutina completa." },
            { Icon: Music2, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", title: "Playlist + aromaterapia de lavanda", desc: "Pon siempre la misma playlist junto con difusor de lavanda. Tu cerebro aprende a conectar esa combinación sensorial con el inicio del sueño — un ancla poderosa para hábitos de sueño positivos." },
          ] as const).map(({ Icon, color, bg, title, desc }, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200 items-start">
              <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <h5 className="font-semibold text-foreground text-sm mb-1">{title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Perfiles */}
        <div className="mb-8 p-5 rounded-xl bg-accent border border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <h5 className="font-semibold text-accent-foreground">Variantes por perfil de usuario</h5>
          </div>
          <div className="space-y-3">
            {[
              { label: "Estrés laboral", tip: "Valeriana + 10 min de journaling al finalizar la jornada. Crea un límite simbólico entre el trabajo y el descanso." },
              { label: "Adultos mayores", tip: "Manzanilla con miel + estiramientos suaves. Refuerza la movilidad articular y el sueño al mismo tiempo." },
              { label: "Jóvenes / estudiantes", tip: "Infusión de melisa + revisión breve de logros del día. Combate la ansiedad académica cerrando mentalmente la jornada." },
            ].map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{p.label}:</strong> {p.tip}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border italic">
            Fuentes: Skinner (1938) · MedlinePlus – Higiene del Sueño · Healthline – Natural Sleep Remedies
          </p>
        </div>

        {/* ─ Reforzamiento Negativo ─ */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
            <span className="text-primary-foreground font-bold text-lg leading-none">−</span>
          </div>
          <h4 className="font-display text-lg font-semibold text-foreground">Reforzamiento Negativo</h4>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <p className="mb-5 text-muted-foreground leading-relaxed">
          El <strong className="text-foreground">reforzamiento negativo</strong> no significa castigo; significa <em>eliminar o reducir un estímulo molesto</em> para que una conducta positiva aumente. Si eliminas la causa de tu inquietud antes de dormir, el alivio resultante refuerza el hábito de manera natural.
        </p>
        <div className="space-y-3 mb-8">
          {([
            { Icon: PhoneOff, color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10", title: "Apagar pantallas 60 minutos antes", desc: "Eliminar la luz azul y la estimulación de redes disminuye el cortisol y el ruido mental. El cuerpo detecta la ausencia del estímulo irritante y responde con una bajada natural de alerta. Usa el modo 'no molestar' como refuerzo." },
            { Icon: Headphones, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", title: "Apps de sonidos y ruido blanco", desc: "Aplicaciones como BetterSleep o Loóna eliminan el silencio incómodo o los ruidos ambientales (tráfico, vecinos) que generan alerta. Al quitar ese estímulo negativo, el sueño llega más rápido, noche tras noche." },
            { Icon: Wind, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-500/10", title: "Respiración 4-7-8 para callar la mente", desc: "Los pensamientos rumiantes son el estímulo aversivo más frecuente. La respiración diafragmática (inhala 4s, retén 7s, exhala 8s) activa el sistema parasimpático. Combinada con pasiflora, el efecto calmante se amplifica notablemente." },
          ] as const).map(({ Icon, color, bg, title, desc }, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200 items-start">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-1">{title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─ Castigo ─ */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h4 className="font-display text-lg font-semibold text-foreground">Castigo (uso moderado)</h4>
          <div className="flex-1 h-px bg-amber-400/30" />
        </div>
        <p className="mb-5 text-muted-foreground leading-relaxed">
          En el condicionamiento operante, el <strong className="text-foreground">castigo</strong> reduce una conducta indeseada al añadir una consecuencia negativa o retirar algo agradable. Aplicado al sueño, se trata de restricciones suaves y autoimpuestas, nunca punitivas. Siempre úsalo en combinación con las estrategias positivas anteriores.
        </p>
        <div className="space-y-3 mb-5">
          {([
            { Icon: Ban, color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-500/10", title: "Restricción de cafeína después del mediodía", desc: "La cafeína tarde (café, té negro, energizantes) fragmenta el sueño. La regla 'no cafeína tras las 14:00' interrumpe el hábito de forma gradual y sin confrontación." },
            { Icon: MonitorX, color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-500/10", title: "Sin pantallas como consecuencia del desvelo", desc: "Revisar el celular al despertar a medianoche es recompensar el desvelo con estimulación. Restringir pantallas tras despertares nocturnos acelera el retorno al sueño sin reforzar el ciclo." },
            { Icon: Clock, color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-500/10", title: "Restricción de siestas largas después de las 15h", desc: "Una siesta mayor de 30 minutos después de las 15:00 reduce la presión de sueño nocturna (adenosina acumulada). Limitarla motiva un descanso nocturno más consolidado." },
          ] as const).map(({ Icon, color, bg, title, desc }, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-amber-200/60 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-900/10 hover:border-amber-300/80 transition-colors items-start">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-1">{title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advertencia */}
        <div className="flex gap-3 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-900/15 border border-amber-200/60 dark:border-amber-800/40 mb-8 items-start">
          <div className="h-8 w-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Advertencia de uso</h5>
            <p className="text-sm text-amber-700/80 dark:text-amber-400/80">
              El castigo como herramienta aislada no es efectivo a largo plazo y puede generar ansiedad adicional. Úsalo siempre como complemento —no como base— de las estrategias de reforzamiento positivo y negativo. El objetivo es construir autonomía y bienestar, no restricción.
            </p>
          </div>
        </div>

        {/* ─ CTA ─ */}
        <div className="relative overflow-hidden p-6 rounded-2xl gradient-primary-soft border border-primary/20 text-center">
          <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary shadow-lg shadow-primary/30 mb-4">
              <Moon className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-foreground font-bold text-lg mb-2">¿Listo para aplicarlo esta noche?</p>
            <p className="text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
              Personaliza tu rutina, comparte tus avances en el foro o descarga la <strong className="text-foreground">Guía Gratuita de 7 Días</strong> con rituales específicos de <em>reforzamiento insomnio natural</em>, <em>hábitos de sueño positivos</em> y plantas adaptadas a tu perfil.
            </p>
            <a
              href="#contacto"
              className="star-btn inline-flex items-center gap-2 px-7 py-3 rounded-full gradient-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <Moon className="h-4 w-4" />
              Contáctanos y obtén 7 días gratis
              <ArrowRight className="h-4 w-4" />
              {[1, 2, 3, 4, 5, 6].map(n => (
                <span key={n} className={`star-${n}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1"
                    style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' } as unknown as React.CSSProperties}
                    viewBox="0 0 784.11 815.53">
                    <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                  </svg>
                </span>
              ))}
            </a>
            <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
              <a href="https://medlineplus.gov/spanish/insomnia.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3" /> MedlinePlus – Insomnio
              </a>
              <span className="text-muted-foreground/40 text-xs">·</span>
              <a href="https://www.healthline.com/health/es/remedios-naturales-para-dormir" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3" /> Healthline – Remedios naturales
              </a>
              <span className="text-muted-foreground/40 text-xs">·</span>
              <span className="text-xs text-muted-foreground">Skinner, B. F. (1938)</span>
            </div>
          </div>
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
        <div className="mb-5 rounded-xl overflow-hidden">
          <img
            src={insomioEstresImg}
            alt="Insomnio por estrés y trauma"
            className="w-full h-52 object-cover"
          />
        </div>
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
    id: "apps",
    icon: Smartphone,
    title: "Apps y Tecnología para el Sueño",
    intro: "Herramientas digitales que combinan meditación, sonidos relajantes y monitoreo del sueño.",
    content: (
      <>
        <div className="mb-5 rounded-xl overflow-hidden">
          <img
            src={appsSuenoImg}
            alt="Apps y tecnología para el sueño"
            className="w-full h-52 object-cover"
          />
        </div>
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
    id: "edades",
    icon: Baby,
    title: "El Insomnio Según la Edad",
    intro: "Cómo afecta el insomnio en cada etapa de la vida, desde la infancia hasta la vejez.",
    content: (
      <>
        <div className="mb-5 rounded-xl overflow-hidden">
          <img
            src={insomioEdadImg}
            alt="El insomnio según la edad"
            className="w-full h-52 object-cover"
          />
        </div>
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


// Componente individual para cada tópico de la Wiki
const WikiAccordionItem = ({
  topic,
  isOpen,
  toggle,
  index
}: {
  topic: WikiTopic,
  isOpen: boolean,
  toggle: () => void,
  index: number
}) => {
  const Icon = topic.icon;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Seleccionamos los elementos de texto clave dentro del contenido
      // para animarlos en cascada
      const targets = contentRef.current.querySelectorAll(
        "p, h4, li, .gradient-primary-soft, .border, .bg-accent"
      );

      // Reseteamos el estado inicial de la animación
      anime.set(targets, { opacity: 0, translateY: 15 });

      // Disparamos la animación en cascada (stagger) para dar el efecto
      // de que el contenido va apareciendo a medida que se despliega
      anime({
        targets,
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(40, { start: 150 }), // Pequeño retraso para que el acordeón empiece a abrirse
        easing: "easeOutCubic",
        duration: 400
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-xl border border-border bg-card overflow-hidden transition-[box-shadow,border-color] duration-300 ${isOpen ? "shadow-brand border-primary/50" : ""}`}
    >
      {/* Image outside the accordion, always visible */}
      {topic.image && (
        <div className="w-full overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-80 object-cover"
          />
        </div>
      )}
      <button
        onClick={toggle}
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
          transition: "grid-template-rows 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div ref={contentRef} className="px-6 pb-6 pt-2 border-t border-border">
            {topic.content}
          </div>
        </div>
      </div>
    </div>
  );
};

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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {topics.map((topic, i) => (
            <div
              key={topic.id}
              className={
                topic.id === "insomnio" || topic.id === "estrategias" || topic.id === "condicionamiento"
                  ? "md:col-span-2"
                  : ""
              }
            >
              <WikiAccordionItem
                topic={topic}
                index={i}
                isOpen={openTopic === topic.id}
                toggle={() => toggle(topic.id)}
              />
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 shadow-xl shadow-primary/5 transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Recursos Científicos
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fuentes y literatura médica consultada
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "MedlinePlus", sub: "Insomnio general", url: "https://medlineplus.gov/spanish/insomnia.html" },
                { label: "MedlinePlus", sub: "Higiene del Sueño", url: "https://medlineplus.gov/spanish/ency/patientinstructions/000853.htm" },
                { label: "Healthline", sub: "Remedios Naturales", url: "https://www.healthline.com/health/es/remedios-naturales-para-dormir" },
                { label: "ScienceDirect", sub: "Insomnio y Trauma", url: "https://www.sciencedirect.com/science/article/abs/pii/S108707922030126X" },
              ].map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-4 rounded-xl border border-border bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-3xl" />
                  <div className="flex items-center justify-between mb-1 relative z-10">
                    <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{r.label}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <span className="text-sm text-muted-foreground relative z-10">{r.sub}</span>
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
