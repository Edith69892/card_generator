import reactLogo from '../assets/react.svg'
import '../Card.css'
import { FaXTwitter, FaInstagram } from "react-icons/fa6";



function Card1({cardData}) {
    return (
        <div className="container">
            <div className="card">
                <div id='avatar'>
                    {cardData.imgUrl instanceof File ? (
        <img
        id='avatarImg'
          src={URL.createObjectURL(cardData.imgUrl)}
          alt="uploaded"
        />
      ) : (
        <img
        
        id='avatarImg'
        src="./avatar1.png"
          alt="default"
        />
      )}
                </div>
                <div className='info'>
                    <span id='role'>{cardData.role}</span>
                    <h2>{cardData.name}</h2>
                    <div style={{
                        width: "150px",
                        height: "22px",
                        background: "#222",
                        borderRadius: "12px",
                        margin: "12px 0 6px 0"
                    }}  ></div>
                    <span id='email'>{cardData.email}</span>
                    <div className="socialLinks">
                        <div>
                            <FaXTwitter />
                            <span>{cardData.x}
                            </span>
                        </div>

                        <div>
                            <FaInstagram />
                            <span>{cardData.insta}</span>
                        </div>
                    </div>

                    <span id='link'>{cardData.link}</span>
                </div>
            </div>
        </div>
    )
}
export default Card1;