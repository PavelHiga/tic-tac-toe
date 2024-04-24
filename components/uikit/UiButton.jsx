import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export const UiButton = ({ children, className, size, variant }) => {
  const buttonClassName = clsx(
    className,
    "transition-colors",
    {
      md: "text-sm rounded py-2 px-6 leading-tight",
      lg: "text-2xl rounded-lg py-2 px-5 leading-tight",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "text-teal-600 bg-white hover:bg-teal-50 border-teal-600 border",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
};
