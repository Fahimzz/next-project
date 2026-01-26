interface ToolBarProps {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
export type { ToolBarProps, ButtonProps };