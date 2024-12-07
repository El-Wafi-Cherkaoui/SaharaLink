import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function BodyContainer(params) {
    return(
        <div className="body_container">
            <Navbar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}