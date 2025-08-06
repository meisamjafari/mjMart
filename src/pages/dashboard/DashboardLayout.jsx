import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="container mx-auto my-10 flex flex-col md:flex-row gap-6">
    
      <div className="md:w-1/4 w-full space-y-4 bg-gray-100 p-4 rounded">
        <NavLink to="/dashboard" className="block hover:text-blue-600">داشبورد</NavLink>
        <NavLink to="/dashboard/orders" className="block hover:text-blue-600"> سفارش‌ها</NavLink>
        <NavLink to="/dashboard/profile" className="block hover:text-blue-600"> حساب کاربری</NavLink>
        <NavLink to="/dashboard/logout" className="block hover:text-blue-600"> خروج</NavLink>
      </div>

   
      <div className="flex-1 bg-white p-4 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
