import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 border-t-1">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
       
        <div>
          <h3 className="font-bold mb-3 text-lg">MJ Mart</h3>
          <p className="mb-4 leading-6">
            فروشگاهی آنلاین برای تجربه خریدی آسان، سریع و مطمئن. با ما همیشه در دسترس!
          </p>
         
          <div className="flex gap-4 text-xl text-gray-600">
            <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="font-bold mb-3 text-base">لینک‌های مفید</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-600">صفحه اصلی</a></li>
            <li><a href="/products" className="hover:text-blue-600">محصولات</a></li>
            <li><a href="/dashboard" className="hover:text-blue-600">پنل کاربری</a></li>
            <li><a href="/login" className="hover:text-blue-600">ورود</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold mb-3 text-base">تماس با ما</h4>
          <p>ایمیل: info@mjmart.com</p>
          <p>تلفن: 021-875421</p>
          <p>آدرس: تهران، خیابان جردن، پلاک 123</p>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4 text-xs">
        © {new Date().getFullYear()} MJ Mart. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
