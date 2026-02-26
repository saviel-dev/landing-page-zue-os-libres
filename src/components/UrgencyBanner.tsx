import { useState } from "react";
import { X, Clock } from "lucide-react";

const UrgencyBanner = () => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="relative z-50 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground text-center py-2.5 px-4">
            <div className="flex items-center justify-center gap-3 flex-wrap text-sm font-medium">
                <Clock className="h-4 w-4 shrink-0 animate-pulse" />
                <span>
                    🌿 <strong>Oferta de lanzamiento:</strong> Descuento del 20% + Guía Gratuita del Sueño para las primeras 50 personas.
                </span>
                <a
                    href="#campana"
                    className="underline underline-offset-2 font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                    Ver el Pack →
                </a>
            </div>
            <button
                onClick={() => setDismissed(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Cerrar aviso"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default UrgencyBanner;
