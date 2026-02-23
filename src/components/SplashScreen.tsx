import { useEffect, useRef } from "react";
import anime from "animejs";
import { Moon, Star } from "lucide-react";
import logo from "../imgs/logo.png";

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    // Floating sleep particles
    useEffect(() => {
        if (!particlesRef.current) return;
        const particles = particlesRef.current.querySelectorAll(".splash-particle");

        anime({
            targets: particles,
            translateY: () => [anime.random(0, 60), anime.random(-200, -500)],
            translateX: () => [anime.random(-40, 40), anime.random(-100, 100)],
            scale: () => [anime.random(0.5, 1), anime.random(0.8, 1.4)],
            opacity: [
                { value: 0, duration: 0 },
                { value: () => anime.random(0.15, 0.5), duration: 1500 },
                { value: 0, duration: 1200, delay: () => anime.random(800, 2000) },
            ],
            rotate: () => anime.random(-45, 45),
            easing: "linear",
            duration: () => anime.random(4000, 8000),
            delay: anime.stagger(120),
            loop: true,
        });
    }, []);

    // Main entrance timeline
    useEffect(() => {
        if (!containerRef.current) return;

        const tl = anime.timeline({
            easing: "easeOutExpo",
            complete: onComplete,
        });

        tl.add({
            targets: ".splash-logo",
            scale: [0, 1],
            opacity: [0, 1],
            rotate: ["1turn", "0turn"],
            duration: 850,
        })
            .add({
                targets: ".splash-ring",
                scale: [0.6, 1.4],
                opacity: [0.6, 0],
                duration: 700,
                easing: "easeOutSine",
                offset: "-=400",
            })
            .add({
                targets: ".splash-title",
                opacity: [0, 1],
                translateY: [24, 0],
                duration: 650,
                offset: "-=350",
            })
            .add({
                targets: ".splash-tagline",
                opacity: [0, 1],
                translateY: [16, 0],
                duration: 500,
                offset: "-=300",
            })
            .add({
                targets: ".splash-bar",
                scaleX: [0, 1],
                duration: 600,
                easing: "easeOutQuart",
                offset: "-=400",
            })
            // Hold for a moment then fade out
            .add({
                targets: containerRef.current,
                opacity: [1, 0],
                duration: 600,
                delay: 500,
                easing: "easeInQuad",
            });
    }, [onComplete]);

    // Build particles: Zzz, stars, moons
    const particles = Array.from({ length: 22 }).map((_, i) => {
        const type = i % 3;
        const left = `${Math.random() * 100}%`;
        const bottom = `${-5 + Math.random() * 30}%`;
        const size = Math.max(14, Math.random() * 28);
        return (
            <div
                key={i}
                className="splash-particle absolute text-white/30 select-none will-change-transform font-display"
                style={{ left, bottom, fontSize: `${size}px` }}
            >
                {type === 0 ? (
                    "Zzz"
                ) : type === 1 ? (
                    <Star className="w-[1em] h-[1em]" />
                ) : (
                    <Moon className="w-[1em] h-[1em]" />
                )}
            </div>
        );
    });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[200] gradient-primary flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Particles */}
            <div
                ref={particlesRef}
                className="absolute inset-0 pointer-events-none overflow-hidden"
            >
                {particles}
            </div>

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_hsl(267,90%,40%,0.4)_0%,_transparent_70%)]" />

            {/* Logo */}
            <div className="relative mb-7 flex items-center justify-center">
                {/* Pulse ring */}
                <div
                    className="splash-ring absolute w-28 h-28 rounded-full border-2 border-white/30"
                    style={{ opacity: 0 }}
                />
                <img
                    src={logo}
                    alt="Zueños Libres"
                    className="splash-logo w-24 h-24 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    style={{ opacity: 0 }}
                />
            </div>

            {/* Brand name */}
            <h1
                className="splash-title font-display text-4xl md:text-5xl font-bold text-white tracking-wide mb-3"
                style={{ opacity: 0 }}
            >
                Zueños Libres
            </h1>

            {/* Tagline */}
            <p
                className="splash-tagline text-white/60 text-sm uppercase tracking-[0.35em]"
                style={{ opacity: 0 }}
            >
                Bienestar natural para el sueño
            </p>

            {/* Decorative underline bar */}
            <div
                className="splash-bar mt-5 w-16 h-0.5 bg-white/40 rounded-full origin-left"
                style={{ transform: "scaleX(0)" }}
            />
        </div>
    );
};

export default SplashScreen;
