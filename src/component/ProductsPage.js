
import React, { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchString, setSearchString] = useState("");
  const [showInStock, setShowInStock] = useState(false);

  const handleSearchChange = (value) => {
    setSearchString(value);
  };

  const handleCheckboxChange = (value) => {
    setShowInStock(value);
  };

  // Filter products 
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchString.toLowerCase());
    const isInStock = showInStock ? product.inStock : true;
    return matchesSearch && isInStock;
  });

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar
        onSearchChange={handleSearchChange}
        onCheckboxChange={handleCheckboxChange}
        showInStock={showInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
