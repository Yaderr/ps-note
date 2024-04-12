import { SideNavBar } from "../componets"
import './css/mainLayout.css'
import { PrivateOutlet } from "../utils/PrivateOutlet"

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