import { ReactNode } from "react";
import Navigation from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
