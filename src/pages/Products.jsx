import ProductCart from "../components/ProductCart";
import productData from "../data/productData";
import Pagination from "../components/Pagination";
export default function Products() {
  return (
    <div className="container mx-auto my-16">
      <Pagination
        items={productData}
        itemsPerPage={5}
        renderItems={(products) => {
          return products.map((product) => (
            <ProductCart  key={product.id} product={product} />
          ));
        }}
      />
    </div>
  );
}
