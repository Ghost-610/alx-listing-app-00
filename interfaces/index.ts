export interface CardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit";
  className?: string;
}
