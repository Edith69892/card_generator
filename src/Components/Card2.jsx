
import '../Card.css'
import { BsThreeDots } from "react-icons/bs";
import {
    VscNewFile,
    VscCopy,
    VscFolder,
    VscArrowDown,
    VscRefresh,
    VscJson,
    VscChromeMinimize,
    VscEllipsis
} from "react-icons/vsc";



function Card2({ cardData }) {

    return (
        <div className="container-2">
            <div className='head'>
                <div className='dots'>
                    <div style={{ width: "15px", height: "15px", backgroundColor: "#ff5f57", borderRadius: "10px" }}></div>
                    <div style={{ width: "15px", height: "15px", backgroundColor: " #febc2e", borderRadius: "10px" }}></div>
                    <div style={{ width: "15px", height: "15px", backgroundColor: "#28c840", borderRadius: "10px" }}></div>
                </div>
                <h3>Business Card.json</h3>
                <BsThreeDots className="dots-icon" />

            </div>

            <div className="toolbar">
                <div>
                    <VscNewFile />
                    <VscCopy />
                    <VscFolder />
                    <VscArrowDown />
                    <VscRefresh />
                    <VscJson />
                </div>
                <div>
                    <VscChromeMinimize />
                    <VscEllipsis />
                </div>
            </div>

            <div className="code-section">
                <div className='row'>
                    <span className="line">1</span>
                    <span className="brace">{`{`}</span>
                </div>
                <div className='row'>
                    <span className="line">2</span>
                    <span className="key">"name"</span>
                    <span className="colon">:</span>
                    <span className="value"> "{cardData.name}"</span>
                </div>
                <div className='row'>
                    <span className="line">3</span>
                    <span className="key">"role"</span>
                    <span className="colon">:</span>
                    <span className="value">"{cardData.role}"</span>
                </div>
                <div className='row'>
                    <span className="line">4</span>
                    <span className="key">"email"</span>
                    <span className="colon">:</span>
                    <span className="value"> "{cardData.email}"</span>
                </div>
                <div className='row'>
                    <span className="line">5</span>
                    <span className="key">"link"</span>
                    <span className="colon">:</span>
                    <span className="value"> "{cardData.link}"</span>
                </div>
                <div className='row'>
                    <span className="line">6</span>
                    <span className="brace">{`}`}</span>
                </div>
            </div>
        </div>
    )
}
export default Card2;