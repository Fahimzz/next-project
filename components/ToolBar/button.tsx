import { ButtonProps } from "./interface";

export default function Button({
  onClick,
  children,
  className,
  style,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
