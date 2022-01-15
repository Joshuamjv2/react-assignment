import ContentButtons from "./Button"
import "../css/content.css"

function ContentText(){
    return (
        <>
            <div className="content--info">
                <h3 className="content--info_title">About</h3>
                <p className="content--info_details">
                    Lovelace is fueled by for understanding the nuances of cross-cultural advertising.
                    She considersager to both build on her 
                    academic foundations in psychology and sociology and stay in tune with 
                    the latest digital marketing strategies through continued coursework 
                    and professional development.
                </p>
            </div>

            <div className="content--info">
                <h3 className="content--info_title">Interests</h3>
                <p className="content--info_details">
                    Lovelace is fueled by her passion for understanding the nuances of cross-cultural advertising.
                    She considers herself a ‘forever student,’ eager to both build on her 
                    academic foundations in psychology and sociology and stay in tune with 
                    the latest digita.
                </p>
            </div>
        </> 
        )
}

export default function Content(){
    return (
        <div className="content">
            <ContentButtons />
            <ContentText />
        </div>
    )
}