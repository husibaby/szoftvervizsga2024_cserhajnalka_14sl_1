import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


function Layout() {
    const navbarLeftSide = [];
    const navbarRightSide = [];
    const navbarRightSideOthers = [];
    
    navbarLeftSide.push({to: "/create-book", text: "Új könyv felvétele"});
    navbarLeftSide.push({to: "https://petrik.hu/", text: "Petrik honlap"});

    return (
        <>
          <Navbar leftSide={navbarLeftSide} rightSide={navbarRightSide} rightSideOthers={navbarRightSideOthers}/>
          <main className="container mt-2">
            <Outlet />
          </main>
        </>
      );
}

export default Layout;