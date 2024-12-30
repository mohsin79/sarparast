import React from "react";

const sizes = {
  textxs: "text-[16px] font-medium",
  headingxs: "text-[14px] font-bold",
  headings: "text-[20px] font-bold",
  headingmd: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
  headinglg: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  texts: "text-[16px] font-medium",
  textmd: "text-[20px] font-medium",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-700 font-inter ${className} ${
        sizes[size] as keyof typeof sizes
      }`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
