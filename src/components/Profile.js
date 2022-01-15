import dp from "../images/dp.jpg";
import "../css/profile.css";


function ProfileContent(){
    return (
        <div className="profile">
            <img className="profile--image" src={dp} alt="user profile"></img>
            <div className="profile--details">
                <h3 className="profile--details_name">Ada Lovelace</h3>
                <p className="profile--details_title">FullStack Developer</p>
                <p className="profile--details_phrase">Learning React Everyday</p>
            </div>
        </div>
    )
};

export default function Profile(){
    return(
        <div>
            <ProfileContent />
        </div>
    )
}