import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Cart() {
  return (
    <div className="grid grid-cols-12 container mx-auto mt-10 gap-5">
      <div className="md:col-span-8 col-span-12 mb-10">
        <table className="w-full   ">
          <thead className="border-b-2 border-slate-500    ">
            <tr>
              <th className="py-2 text-start">محصول</th>
              <th className="py-2 text-start">قیمت</th>
              <th className="py-2 text-start">تعداد</th>
              <th className="py-2 text-start">قیمت کل</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-1 border-slate-300 ">
              <td className="flex items-center gap-2 py-2">
                <span className="text-2xl cursor-pointer hover:text-red-500 transition-all">
                  <IoIosCloseCircleOutline />
                </span>
                <span>
                  <img className="w-15 h-15 xl:w-20 xl:h-20" src="/images/shirt1.jpg" alt="" />
                </span>
                <span>گینر رول وان 2.7 کیلوگرم</span>
              </td>
              <td className="py-2 ">
                <span>۴,۲۹۰,۰۰۰</span> <span>تومان</span>
              </td>
              <td className="py-2 text-white   whitespace-nowrap ">
                <button className="px-3  bg-red-500 hover:bg-red-400 transition-all cursor-pointer">
                  -
                </button>
                <span className="px-3  text-black ">1</span>
                <button className="px-3  bg-green-500 hover:bg-green-400 transition-all cursor-pointer">
                  +
                </button>
              </td>
              <td className="py-2 ">
                <span>۴,۲۹۰,۰۰۰</span> <span>تومان</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:col-span-4 col-span-12">
        <div className="w-full  mx-auto    space-y-4">
          <h2 className="text-gray-800 font-bold p-2  border-b-2 border-slate-500">
            مجموع کل سبد خرید
          </h2>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">قیمت کل</span>
            <span className="text-gray-700">۱۴,۲۷۰,۰۰۰ تومان</span>
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
            <span className="font-bold text-gray-900">۱۴,۲۷۰,۰۰۰ تومان</span>
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
