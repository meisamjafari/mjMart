import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';

export default function Home() {
  const [specialProducts, setSpecialProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log('API Response:', data[0]); // برای دیدن ساختار داده
        setSpecialProducts(data.slice(0, 9)); // فقط ۹ محصول اول را نمایش بده
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-6 text-gray-800">
            خرید از MJ Mart
          </h1>
          <p className="text-xl text-center mb-12 text-gray-600">
            بهترین محصولات با کیفیت و قیمت مناسب
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <button className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                مشاهده محصولات
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            ویژگی‌های MJ Mart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-truck"
                >
                  <rect x="2" y="15" width="20" height="10" rx="2" ry="2" />
                  <path d="M22 10H2v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V10z" />
                  <path d="M5 15h14" />
                  <path d="M8 9h8" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">ارسال سریع</h3>
                <p className="text-gray-600">
                  تحویل سریع و آسان با خدمات پیشرفته
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shield"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">پشتیبانی 24/7</h3>
                <p className="text-gray-600">
                  پشتیبانی فوق‌العاده و راه‌های سریع‌ترین راه‌های حل مشکل
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-credit-card"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">پرداخت امن</h3>
                <p className="text-gray-600">
                  پرداخت‌های امن و آسان با روش‌های مختلف
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Products Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            محصولات ویژه
          </h2>
          {loading ? (
            <div className="text-center text-lg">در حال بارگذاری...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <Link to={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={product.images}
                        alt={product.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                          مشاهده محصول
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <span className="ml-2 text-gray-500 text-sm">۵.۰</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            نظرات مشتریان
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-700 mb-2 text-center">
                تجربه خرید از MJ Mart عالی بود! ارسال سریع و پشتیبانی فوق‌العاده.
              </p>
              <div className="text-sm text-gray-500">مریم رضایی</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-700 mb-2 text-center">
                تنوع محصولات و قیمت‌ها خیلی خوبه. حتماً دوباره خرید می‌کنم.
              </p>
              <div className="text-sm text-gray-500">علی محمدی</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-700 mb-2 text-center">
                بسته‌بندی عالی و محصولات با کیفیت. ممنون از MJ Mart!
              </p>
              <div className="text-sm text-gray-500">سارا احمدی</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
