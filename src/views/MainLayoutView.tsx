import { Outlet } from "react-router-dom"
import { Footer, SideNavBar } from "../componets"
import './css/mainLayout.css'

export const MainLayoutView = () => {
    
    return (
        <div className="main-container">
            <SideNavBar />
            <div className="view-content">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}