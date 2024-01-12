import { Footer, SideNavBar } from "../componets"
import './css/mainLayout.css'
import { PrivateOutlet } from "../utils/privateOutlet"

export const MainLayoutView = () => {
    
    return (
        <div className="main-container">
            <SideNavBar />
            <div className="view-content">
                <PrivateOutlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}