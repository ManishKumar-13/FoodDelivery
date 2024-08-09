import React from "react";
import { useState } from "react";
import { MdOutlineShoppingCart, MdLogout, MdAdd } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{  user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-20 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8" alt="logo" />
          <p className="text-orange-500 text-xl font-bold">QuickEats</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="font-thin hover:font-normal duration-100 transition-all ease cursor-pointer">
              Home
            </li>
            <li className="font-thin hover:font-normal duration-100 transition-all ease cursor-pointer">
              Menu
            </li>
            <li className="font-thin hover:font-normal duration-100 transition-all ease cursor-pointer">
              About Us
            </li>
            <li className="font-thin hover:font-normal duration-100 transition-all ease cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center"
            onClick={showCart}>
            <MdOutlineShoppingCart className="text-orange-500 text-2xl cursor-pointer" />
            <div className="absolute -top-2.5 -right-2 w-5 h-5 rounded-full bg-orange-700 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
              {cartItems.length}
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 cursor-pointer rounded-full"
              alt="User Profile"
              onClick={login}
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-10 "
              >
                {user && user.email === "myselfmanish13@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                                transition-all duration-100 ease-in-out"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                             transition-all duration-100 ease-in-out"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          <MdOutlineShoppingCart className="text-orange-500 text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
          <div className="absolute -top-2.5 -right-2 w-5 h-5 rounded-full bg-orange-700 flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8" alt="logo" />
          <p className="text-orange-500 text-xl font-bold">QuickEats</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={user ? user.photoURL : Avatar}
            className="w-8 cursor-pointer rounded-full"
            alt="User Profile"
            onClick={login}
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-10 "
            >
              {user && user.email === "myselfmanish13@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                transition-all duration-100 ease-in-out"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col ">
                <li
                  className="font-thin hover:font-normal hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease cursor-pointer"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="font-thin hover:font-normal hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease cursor-pointer"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="font-thin hover:font-normal hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease cursor-pointer"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="font-thin hover:font-normal hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease cursor-pointer"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-sm shadow-md flex items-center justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-slate-200
                transition-all duration-100 ease-in-out"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
