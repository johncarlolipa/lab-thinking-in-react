import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products, searchString }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((searchString || "").toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
