import { Link,Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
function Layout(){
    return (
        <>
        <Header/>
            <div className="container mt-4">

                <Outlet />
            </div>
            <Footer/>
        </>
    );
}
export default Layout;