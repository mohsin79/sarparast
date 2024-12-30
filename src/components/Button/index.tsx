import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    pink_50: "bg-pink-50 text-pink-600",
    pink_600: "bg-pink-600 text-white-a700",
    pink_A100: "bg-pink-a100 text-white-a700",
  },
} as const;
const sizes = {
  xs: "h-[42px] px-6 text-[16px]",
} as const;
type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onclick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "pink_A100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center sm:px-5 text-center cursor-pointer whitespace-nowrap text-[16px] font-medium rounded-lg ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant &&
        variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
export { Button };
