import React from "react";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="absolute flex justify-between w-full max-w-[83%] mx-auto left-0 right-0 py-4">
      <div className=" bg-gradient-to-br from-black">
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="">
        <div className="flex justify-between items-center  text-white bg-black bg-opacity-80 px-2 py-1  rounded gap-1 border border-gray-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="default-ltr-cache-4z3qvp e1svuwfo1"
            data-name="Languages"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
              fill="currentColor"
            ></path>
          </svg>
          <select className="border-none outline-none bg-transparent pl-3 text-defaultFont pr-[8px]">
            <option value="en" className="text-black mt-2 w-full">
              English
            </option>
            <option value="hi" className="text-black mt-2 w-full">
              Hindi
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
