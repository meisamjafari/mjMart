import { useContext, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { getProductById } from "../services/productService";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, increase, decrese, setCartItems } = useContext(ShoppingCartContext);
  const [cartItemsDetails, setCartItemsDetails] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const result = await Promise.all(
        cartItems.map((item) => {
          return getProductById(item.id);
        })
      );
      setCartItemsDetails(result);
    };

    cartItems.length > 0 ? fetchAll() : setCartItemsDetails([]);
  }, [cartItems]);
  // console.log(cartItemsDetails);

  const getQty = (id) => {
    const found = cartItems.find((i) => i.id == id);
    return found ? found.qty : 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeSingleItem = (id) => {
    console.log('Removing item with id:', id);
    console.log('Current cartItems:', cartItems);
    setCartItems(prev => {
      console.log('Previous cartItems:', prev);
      const filtered = prev.filter(item => item.id != id); // از == استفاده می‌کنیم
      console.log('Filtered cartItems:', filtered);
      return filtered;
    });
  };

  const totalPrice = cartItemsDetails.reduce((acc, item) => {
    const qty = getQty(item.id);
    return acc + (item.price * qty);
  }, 0);

  return (
    <div className="grid grid-cols-12 container mx-auto mt-10 gap-5">
      <div className="md:col-span-8 col-span-12 mb-10">
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">سبد خرید</h1>
            <button
              onClick={clearCart}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaTrash />
              پاک کردن کل سبد خرید
            </button>
          </div>
        )}
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">سبد خرید شما خالی است</h2>
            <p className="text-gray-600 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
            <Link to="../products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead className="border-b-2 border-slate-500    ">
              <tr>
                <th className="py-2 text-start">محصول</th>
                <th className="py-2 text-start">قیمت</th>
                <th className="py-2 text-start">تعداد</th>
                <th className="py-2 text-start">قیمت کل</th>
              </tr>
            </thead>
            <tbody>
              {cartItemsDetails.map((item) => {
                return (
                  <tr key={item.id} className="border-b-1 border-slate-300 ">
                    <td className="flex items-center gap-2 py-2">
                      <span 
                        className="text-2xl cursor-pointer hover:text-red-500 transition-all"
                        onClick={() => {
                          console.log('Clicking remove for item:', item.id);
                          console.log('Item type:', typeof item.id);
                          removeSingleItem(item.id);
                        }}
                        title="حذف محصول"
                      >
                        <IoIosCloseCircleOutline />
                      </span>
                      <span>
                        <img
                          className="w-15 h-15 xl:w-20 xl:h-20"
                          src={item.images?.[0]}
                          alt={item.title}
                        />
                      </span>
                      <span> {item.title} </span>
                    </td>
                    <td className="py-2 ">
                      <span>{item.price.toLocaleString()}</span> <span>تومان</span>
                    </td>
                    <td className="py-2 text-white   whitespace-nowrap ">
                      <button
                        onClick={() => decrese(item.id)}
                        className="px-3  bg-red-500 hover:bg-red-400 transition-all cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3  text-black ">{getQty(item.id)}</span>
                      <button
                        onClick={() => increase(item.id)}
                        className="px-3  bg-green-500 hover:bg-green-400 transition-all cursor-pointer"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 ">
                      <span>{(getQty(item.id) * item.price).toLocaleString()}</span>{" "}
                      <span>تومان</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      
      <div className="md:col-span-4 col-span-12">
        <div className="w-full mx-auto space-y-4">
          <h2 className="text-gray-800 font-bold p-2 border-b-2 border-slate-500">
            مجموع کل سبد خرید
          </h2>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">قیمت کل</span>
            <span className="text-gray-700">{totalPrice.toLocaleString()} تومان</span>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">حمل و نقل</p>

            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                className="mt-1"
                name="shipping"
                defaultChecked
              />
              <span className="font-medium">ارسال با چاپار (پس کرایه)</span>
            </label>

            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer mt-2">
              <input type="radio" className="mt-1" name="shipping" />
              <span className="font-medium">ارسال با تیپاکس (پس کرایه)</span>
            </label>

            <p className="text-xs text-gray-400 mt-2">حمل و نقل به تهران.</p>
          </div>

          <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-200">
            <span className="text-gray-600">مجموع</span>
            <span className="font-bold text-gray-900">{totalPrice.toLocaleString()} تومان</span>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-md transition-colors">
            اقدام به پرداخت
          </button>

          <div className="pt-2 border-t border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-medium">
              <span>کوپن</span>
              <span role="img" aria-label="coupon">
                🏷️
              </span>
            </div>

            <label className="text-sm text-gray-500">کد تخفیف:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button className="w-full border border-gray-300 rounded-md px-3 py-2 text-md text-gray-700 hover:bg-gray-200 transition">
              اعمال تخفیف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
