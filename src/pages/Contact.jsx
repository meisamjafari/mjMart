import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-center mb-12">تماس با ما</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        <form className="space-y-6 bg-gray-50 p-6 rounded shadow">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">نام شما</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="مثلاً مهدی رضایی"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">ایمیل</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">پیام شما</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="پیام خود را اینجا بنویسید..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            ارسال پیام
          </button>
        </form>

   
        <div className="space-y-8 text-right bg-white p-6 rounded shadow border border-gray-100">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-bold">تلفن پشتیبانی</p>
              <p className="text-sm text-gray-600">+98 912 345 6789</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <p className="font-bold">ایمیل</p>
              <p className="text-sm text-gray-600">support@mjmart.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-bold">آدرس</p>
              <p className="text-sm text-gray-600">
                تهران، خیابان جردن پلاک ۱۵، طبقه دوم
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600 leading-7">
              ما همواره آماده پاسخگویی به سوالات و دریافت نظرات شما هستیم. تیم پشتیبانی MJ Mart با دقت و مسئولیت به پیام‌های شما رسیدگی می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
