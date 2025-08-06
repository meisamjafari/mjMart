import { FaShippingFast, FaHeadset, FaUndo, FaRegSmile } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8">درباره MJ Mart</h1>

      <div className="max-w-3xl mx-auto text-justify leading-8 space-y-6">
        <p>
          فروشگاه اینترنتی MJ Mart فعالیت خود را از پاییز سال ۱۴۰۲ آغاز کرد؛ با این هدف که تجربه‌ای نوین، ساده و دلنشین از خرید اینترنتی را برای کاربران ایرانی فراهم کند. در روزگاری که سرعت و راحتی در زندگی روزمره اهمیت دوچندانی یافته، MJ Mart تلاش می‌کند تا با فراهم‌کردن بستری امن، قابل اعتماد و با رابط کاربری آسان، فرآیند خرید را از ابتدا تا انتها بدون دردسر و کاملاً شفاف برای مشتریان رقم بزند. ما معتقدیم خرید آنلاین باید نه‌تنها راحت بلکه لذت‌بخش هم باشد، و برای تحقق این دیدگاه، تیمی متعهد و باانگیزه را کنار هم جمع کرده‌ایم.
        </p>

        <p>
          MJ Mart با گردآوری مجموعه‌ای متنوع از محصولات با کیفیت از برندهای معتبر داخلی و خارجی، این امکان را برای مشتریان فراهم کرده است که بدون نیاز به حضور فیزیکی در فروشگاه‌ها، هر آنچه که نیاز دارند را تنها با چند کلیک درب منزل تحویل بگیرند. ما نه‌تنها بر تنوع کالا، بلکه بر اصالت و سلامت محصولات نیز تأکید داریم. بخش کنترل کیفیت MJ Mart، پیش از ارسال هر سفارش، محصولات را بررسی می‌کند تا از رضایت شما اطمینان حاصل شود.
        </p>

        <p>
          مشتری‌مداری تنها یک شعار برای ما نیست. در MJ Mart، پشتیبانی ۲۴ ساعته واقعی است و تیم ما همواره آماده پاسخ‌گویی به سوالات، مشکلات و نیازهای شماست. همچنین ما سیستم بازخورد مشتریان را بسیار جدی می‌گیریم و به صورت مداوم بر اساس بازخوردهای دریافتی، خدمات و تجربه کاربری فروشگاه را بهبود می‌دهیم. در کنار همه این‌ها، قیمت‌گذاری منصفانه یکی دیگر از ارزش‌هایی است که MJ Mart بر پایه آن شکل گرفته؛ تا خرید از ما، هم به‌صرفه باشد و هم دل‌چسب.
        </p>

        <p>
          در طول یک سال گذشته، با حمایت مشتریان عزیز، MJ Mart رشد چشمگیری را تجربه کرده است. از گسترش دسته‌بندی‌های محصولی گرفته تا بهبود فرآیند ارسال سفارشات، ما همواره در حال توسعه و پیشرفت هستیم. به‌زودی با اضافه‌کردن قابلیت‌هایی مانند پنل فروشندگان، فیلترهای هوشمند و باشگاه مشتریان، تجربه شما را باز هم بهبود خواهیم داد. هدف ما این است که MJ Mart نه‌فقط یک فروشگاه اینترنتی، بلکه یک همراه همیشگی برای نیازهای خرید شما باشد.
        </p>
      </div>

    
      <div className="max-w-5xl mx-auto mt-12 grid gap-6 md:grid-cols-4 text-center">
        <div className="p-6 bg-gray-100 rounded shadow">
          <FaShippingFast size={32} className="mx-auto mb-3 text-blue-600" />
          <h4 className="font-bold mb-2 text-lg">ارسال سریع</h4>
          <p className="text-sm text-gray-600">تحویل سریع سفارشات در کمترین زمان، با بسته‌بندی ایمن و مناسب.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <FaHeadset size={32} className="mx-auto mb-3 text-blue-600" />
          <h4 className="font-bold mb-2 text-lg">پشتیبانی ۲۴/۷</h4>
          <p className="text-sm text-gray-600">در هر ساعت از شبانه‌روز پاسخگوی سوالات و نیازهای شما هستیم.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <FaUndo size={32} className="mx-auto mb-3 text-blue-600" />
          <h4 className="font-bold mb-2 text-lg">ضمانت بازگشت</h4>
          <p className="text-sm text-gray-600">۷ روز مهلت بازگشت بدون قید و شرط، برای خریدی مطمئن‌تر.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <FaRegSmile size={32} className="mx-auto mb-3 text-blue-600" />
          <h4 className="font-bold mb-2 text-lg">رضایت مشتری</h4>
          <p className="text-sm text-gray-600">رضایت شما هدف ماست، و تمام تلاش‌مان در این مسیر است.</p>
        </div>
      </div>

      
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">تاریخچه فروشگاه</h2>
        <ul className="relative border-s border-gray-300 ps-6 space-y-6">
          <li className="relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -start-5 top-1" />
            <h3 className="font-bold text-gray-800">پاییز ۱۴۰۲</h3>
            <p className="text-sm text-gray-600">تأسیس رسمی MJ Mart و راه‌اندازی فروشگاه با دسته‌بندی‌های اولیه</p>
          </li>
          <li className="relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -start-5 top-1" />
            <h3 className="font-bold text-gray-800">زمستان ۱۴۰۲</h3>
            <p className="text-sm text-gray-600">افزایش تنوع کالاها، جذب بیش از ۱۰۰۰ مشتری و گسترش تیم پشتیبانی</p>
          </li>
          <li className="relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -start-5 top-1" />
            <h3 className="font-bold text-gray-800">تابستان ۱۴۰۳</h3>
            <p className="text-sm text-gray-600">راه‌اندازی سیستم پنل فروشندگان و آغاز همکاری با برندهای مطرح</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
