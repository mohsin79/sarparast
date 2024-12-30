import React from "react";
const sizes = {
  textxs: "text-[14px] font-normal",
};
export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`${className} ${sizes[size as keyof typeof sizes]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
