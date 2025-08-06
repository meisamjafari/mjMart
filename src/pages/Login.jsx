import React, { useContext, useState } from "react";
import { loginUser } from "../services/loginService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IsLoginContex } from "../context/isLoginContex";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const{setIsLogin}=useContext(IsLoginContex)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.access_token);
      alert("ورود با موفقیت");
      navigate("/");
      setIsLogin(true)
    } catch (error) {
      console.log(error);
      alert("ورود ناموفق");
    }
  };

  return (
    <div className=" container mx-auto   h-[calc(100vh-112px)] flex justify-center items-center my-auto pb-5">
      <div className="w-11/12 sm:w-1/2 md:w:1/3 lg:w-1/3 xl:1/5 bg-red-400 h-max flex flex-col items-center justify-around p-5 text-slate-600">
        <div className="w-full  ">
          <label className="block" htmlFor="">
            ایمیل
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-red-200 w-full outline-0 p-1"
            type="text"
          />
        </div>
        <div className="w-full mt-4">
          <label className="block" htmlFor="">
            رمز عبور
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-red-200 w-full outline-0 p-1"
            type="password"
          />
        </div>
        <div className="w-full mt-7 flex justify-around">
          <button
            className="block bg-green-300 w-2/3 p-1 text-lg hover:bg-green-400 hover:text-white cursor-pointer transition-colors"
            type="submit"
            onClick={handleSubmit}
          >
            ورود
          </button>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-2 my-6 w-full">
            <div className="flex-1 border-t border-gray-100 w-full" />
            <span className="text-gray-600 text-2xl">یا</span>
            <div className="flex-1 border-t border-gray-100 w-full" />
          </div>

          <Link
            to={"/Signup"}
            className="text-center mt-4  w-2/3 bg-green-300 p-1 text-lg hover:bg-green-400 hover:text-white cursor-pointer transition-colors"
          >
            {" "}
            <button>ثبت نام</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
