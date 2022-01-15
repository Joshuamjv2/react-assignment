import "../css/card.css"
import Profile from "./Profile"
import Content from "./Content"
import Footer from "./Footer"

export default function Card(){
    return (
        <div className="container">
            <Profile />
            <Content />
            <Footer />
        </div>
    )
}
