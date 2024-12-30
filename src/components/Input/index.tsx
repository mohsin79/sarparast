import React from "react";
const shapes = {
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-a700 shadow-xs text-gray-700",
  },
} as const;
const sizes = {
  xs: "h-[74px] px-6 text-[16px]",
} as const;
type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center sm:px-5 cursor-text text-gray-700 text-[16px] bg-white-a700 shadow-xs flex-grow rounded-lg 
        ${
          variant &&
          (variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ] ||
            variants[variant])
        } ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
export { Input };
