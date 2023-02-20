// DropdownMenu types
export type Option = {
  value: string | number;
  label: string;
};

export type DropdownProps = {
  options: Option[];
  onSelect?: (option: Option) => void;
  width?: string;
};
// ------------------

// ProductCard types
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductCardProps = {
  product: Product;
};
// ------------------
