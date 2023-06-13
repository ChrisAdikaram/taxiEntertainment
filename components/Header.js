import Logo from "@/components/Logo";
import menu from "@/config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;
  const [showMobileNav, setshowMobileNav] = useState(false);
  const router = useRouter();

  // states declaration
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <>
      <header
        className={`overflow-hidden  top-0 z-50  py-2 transition-all duration-100 delay-75 ${
          navFixed
            ? "shadow bg-darkgray fixed left-0 right-0"
            : "pt-4 md:pt-8 bg-transparent absolute left-0 right-0"
        }`}
      >
        <nav className="container relative flex flex-wrap items-center justify-between pl-8 pr-8 ml-auto mr-auto">
          {/* logo */}
          <div className="order-0">
            <Logo />
          </div>
          {/* navbar toggler */}
          <input
            id="nav-toggle"
            type="checkbox"
            className="hidden"
            onClick={() => {
              setshowMobileNav(!showMobileNav);
            }}
          />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="flex items-center order-2 cursor-pointer md:order-1 md:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="items-center order-2 hidden cursor-pointer md:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          {/* /navbar toggler */}

          <ul
            id="nav-menu"
            className="order-3 hidden w-full text-center md:text-left md:order-1 md:flex md:w-auto md:space-x-2"
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="relative mx-3 mr-0 group">
                    <span className="inline-flex items-center p-3 text-lg font-semibold text-white transition hover:text-primary md:p-4 hover:text-appyellow">
                      {menu.name}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="z-10 hidden p-4 transition bg-white rounded-lg shadow group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="mb-1" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="block min-w-[150px] py-1 text-lg font-semibold text-dark transition hover:text-primary hover:text-appyellow"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="mx-3">
                    <Link
                      href={menu.url}
                      className="block p-3 text-lg font-semibold text-white transition-all duration-75 hover:text-primary md:p-4 hover:text-appyellow"
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </header>
      {showMobileNav && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-darkgray/80">
          <div className="flex-row w-11/12 px-2 pb-3 space-y-3 bg-darkgray h-fit ">
            <div className="flex items-end justify-end w-full pt-3 pr-3 mb-5">
              <IoCloseSharp
                className="w-12 h-12 text-white"
                onClick={() => {
                  setshowMobileNav(false);
                }}
              />
            </div>
            {main.map((menu, index) => (
              <div
                key={"menu" + index}
                className="w-full py-4 border border-white hover:bg-appyellow group"
                onClick={() => {
                  setshowMobileNav(false);
                  router.push(menu.url);
                }}
              >
                <p className="text-2xl text-center group-hover:text-darkgray">
                  {menu?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
