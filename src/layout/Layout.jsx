import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import { HeaderItems } from "../dataBase/HeaderItems";

const Layout = () => {
  return (
    <div>
      <Container>
        <Header />
        <div className="sm:max-h-[calc(100vh-61px)] sm:h-[calc(100vh-61px)] h-[calc(100vh-106px)] max-h-[calc(100vh-106px)] overflow-y-auto">
          <Outlet />
          <Footer />
        </div>
        <ul className="sm:hidden flex h-[45px] sticky bottom-0 w-[100%] bg-white border-t border-gray-500 px-4 justify-center">
          {HeaderItems.map((item) => (
            <NavLink
              key={item.title}
              className="header-menu-item h-full px-1 md:rounded-none flex justify-center w-full items-center text-[10px]"
              to={item.link}
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Layout;
