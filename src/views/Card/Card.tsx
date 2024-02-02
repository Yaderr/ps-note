import { CardList, CreateNewButtonModal } from "../../componets"


export const Card = () => {
    
    return (
        <div>
            <div className="head-nav">
                <h2>Cards</h2>
                <CreateNewButtonModal type="Card" />
            </div>
            <CardList />
        </div>
        
    )
}