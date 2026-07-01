import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
