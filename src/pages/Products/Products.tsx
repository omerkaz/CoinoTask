import React, { useState, useEffect } from "react";
import { addNotification } from "@src/utils/notifications";
import { api } from "@src/api";
import ProductCard, { Product } from "@src/components/ProductCard/ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.products.axios_get("/products", { limit: 10 });
      setProducts(data.products);
    } catch {
      addNotification({
        title: "Bağlantı Hatası",
        message: "İnternet bağlantınızı kontrol ediniz.",
        type: "danger",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
