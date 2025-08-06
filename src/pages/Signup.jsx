import React, { useState } from "react";
import { registerUser } from "../services/signupService";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(name, email, password);
      alert("با موفقیت ثبت نام کردید");

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("ثبت‌نام با خطا مواجه شد");
    }
  };

  return (
    <div className=" container mx-auto   h-[calc(100vh-112px)] flex justify-center items-center my-auto pb-5">
      <div className="w-11/12 sm:w-1/2 md:w:1/3 lg:w-1/3 xl:1/5 bg-red-400 h-max flex flex-col items-center justify-around p-5 text-slate-800 text-lg">
        <div className="w-full  ">
          <label className="block" htmlFor="">
            نام
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-red-200 w-full outline-0 p-1"
            type="text"
          />
        </div>
        <div className="w-full  mt-4">
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
            onClick={handleSignup}
            className="block bg-green-300 w-2/3 p-1 text-lg hover:bg-green-400 hover:text-white cursor-pointer transition-colors"
            type="submit"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}
