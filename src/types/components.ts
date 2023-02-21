import React from "react";
// DropdownMenu types
export type Option = {
  value: string | number;
  label: string;
};

export type DropdownProps = {
  options: Option[];
  onSelect?: (option: Option) => void;
  width: React.CSSProperties;
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
  quantity?: number;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
  onAddToFavorites?: () => void;
  onRemoveFromFavorites?: () => void;
  onQuantityChange?: (newQuantity: number) => void;
};
// ------------------

// Form types
export type UserOrderFormValues = {
  name: string;
  surname: string;
  phone: number | string;
  email: string;
  city: string;
  district: string;
  address: string;
  apartmentNumber: number | string;
};
// ------------------
