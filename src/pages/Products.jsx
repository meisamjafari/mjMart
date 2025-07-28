import ProductCart from "../components/ProductCart";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    };

    fetchData();
  }, []);

  console.log(products);
  return (
    <div className="container mx-auto my-16">
      <Pagination
        items={products}
        itemsPerPage={10}
        renderItems={(products) => {
          return products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ));
        }}
      />
    </div>
  );
}
