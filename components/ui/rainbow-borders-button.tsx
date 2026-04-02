import * as React from "react";
import { cn } from "@/lib/utils";
import "./rainbow-borders-button.css";

export interface RainbowBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

/**
 * Кнопка с анимированной радужной обводкой и свечением.
 * Не использует styled-jsx — совместимо с App Router и shadcn.
 */
export function RainbowBorderButton({
  className,
  children = "Button",
  type = "button",
  ...props
}: RainbowBorderButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rainbow-border relative flex h-10 w-[140px] cursor-pointer items-center justify-center gap-2.5 rounded-xl border-0 bg-black px-4 font-black text-white transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/** Обертка как в оригинальном демо (центр экрана). */
export function RainbowBorderButtonDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <RainbowBorderButton />
    </div>
  );
}

/** @deprecated Используйте RainbowBorderButton — имя для совместимости с импортом Button */
export const Button = RainbowBorderButton;
