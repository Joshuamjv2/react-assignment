import '../css/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'

// const linkedin = <FontAwesomeIcon icon={["far", "linked-in"]} />
// const email = <FontAwesomeIcon icon={["far", "envelope"]} />

export default function ContentButtons(){
    return(
        <div className="content--buttons">
            <div className="content--buttons_button content--buttons_button-light">
                <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                </div>
                <p className="content--buttons_text">Email</p>
            </div>
            
            <div className="content--buttons_button content--buttons_button-dark">
                <div className="icon">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </div>
                <p className="content--buttons_text">Linkedin</p>
            </div>
        </div>
        )
}

