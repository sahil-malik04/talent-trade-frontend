// import { Fragment } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Menu, Transition } from "@headlessui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export const Navbar = () => {
  return (
    <>
      <nav className="bg-peacockblue-100 p-5 text-white font-bold">
        <div className="flex">
          <div className="ml-4">
            <img
              className="h-8 w-14 rounded-full"
              src="/assets/images/brand_logo.png"
              alt="user"
            />
          </div>
          <div></div>
          <div className="ml-auto mr-14">
            <ul className="flex space-x-7">
              <li className="cursor-pointer"> About Us</li>
              <li className="cursor-pointer"> Contact</li>
              <li className="cursor-pointer">{/* Profile dropdown */}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
