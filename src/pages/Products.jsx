import ProductCart from "../components/ProductCart";
import Pagination from "../components/Pagination";
import { useEffect, useState, useMemo } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../services/productService";

import Select from "react-select";
import { debounce } from "lodash";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState("all");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    if (selectedCatId === "all") {
      getProducts().then(setProducts);
    } else {
      getProductsByCategory(Number(selectedCatId)).then(setProducts);
    }
  }, [selectedCatId]);

  const categoryOptions = [
    { value: "all", label: "همه دسته بندی ها " },
    ...categories.map((cat) => {
      return { value: cat.id, label: cat.name };
    }),
  ];

  const debouncedSearch = useMemo(() => {
    return debounce((value) => {
      setSearchTerm(value);
    }, 600);
  }, []);

  useEffect(() => {
    debouncedSearch(searchInput);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchInput, debouncedSearch]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getProducts();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       console.log("finally");
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container mx-auto my-16">
      <Select
        options={categoryOptions}
        value={categoryOptions.find((opt) => opt.value === selectedCatId)}
        onChange={(selectedOption) => setSelectedCatId(selectedOption.value)}
        isSearchable={false}
      />

      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full mt-5 p-2 border-gray-300 placeholder:text-slate-600 border rounded-sm outline-0"
        type="text"
        placeholder="جستجو"
      />

      <Pagination
        items={products}
        itemsPerPage={10}
        renderItems={(products) => {
          return products
            .filter((product) =>
              product.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            )
            .map((product) => (
              <ProductCart key={product.id} product={product} />
            ));
        }}
      />
    </div>
  );
}
