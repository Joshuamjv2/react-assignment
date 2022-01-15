import "../css/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
        <div className="footer">
            <div className="footer--icon">
                <FontAwesomeIcon icon={["fab", "twitter"]}/>
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon={["fab", "pinterest"]}/>
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon={["fab", "github"]}/>
            </div>
            <div className="footer--icon">
                <FontAwesomeIcon icon={["fab", "facebook"]}/>
            </div>
        </div>
    )
}

export default Footer;