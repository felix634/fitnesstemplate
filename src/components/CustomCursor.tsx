"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") !== null ||
                target.closest("a") !== null
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Small Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full z-[9998] pointer-events-none"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 2.5 : 1,
                    backgroundColor: isPointer ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0)",
                    borderColor: isPointer ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.4)",
                }}
            />
        </>
    );
}
