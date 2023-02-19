import React, { useState, useEffect, ChangeEvent } from "react";
import { addNotification } from "@src/utils/notifications";
import { api } from "@src/api";
import ProductCard from "@src/components/ProductCard/ProductCard";
import DropdownMenu from "@src/components/DropdownMenu/DropdownMenu";
import { Product, Option } from "@src/types";
import styles from "./Products.module.scss";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const dropDownMenuOptions: Option[] = [
    {
      value: "",
      label: "Sıralama",
    },
    {
      value: "sortRating",
      label: "Puana göre sırala",
    },
    {
      value: "sortAscendingPrice",
      label: "Artan fiyat",
    },
    {
      value: "sortDescendingPrice",
      label: "Azalan fiyat",
    },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await api.products.axios_get("/products", {
          limit: 10,
        });
        setProducts(data.products);
      } catch {
        addNotification({
          title: "Bağlantı Hatası",
          message: "İnternet bağlantınızı kontrol ediniz.",
          type: "danger",
        });
      }
    }

    fetchProducts();
  }, []);

  const handleProductFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.currentTarget.value;
    const filtered = products.filter(
      (product) =>
        product.brand.includes(searchTerm) ||
        product.category.includes(searchTerm) ||
        product.title.includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleProductSort = (option: Option) => {
    switch (option.value) {
      case "sortRating": {
        const sortedProducts = [...products].sort(
          (a, b) => b.rating - a.rating
        );
        setProducts(sortedProducts);
        break;
      }
      case "sortAscendingPrice": {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
        break;
      }
      case "sortDescendingPrice": {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
        break;
      }
    }
  };

  return (
    <>
      <div className={styles.row}>
        <input
          type="text"
          placeholder={'example"apple"'}
          onChange={handleProductFilter}
        />
        <DropdownMenu
          options={dropDownMenuOptions}
          onSelect={(option) => handleProductSort(option)}
        />
      </div>
      <div className={styles.row} style={{ flexWrap: "wrap" }}>
        {(filteredProducts.length === 0 ? products : filteredProducts).map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
    </>
  );
}

export default Products;
