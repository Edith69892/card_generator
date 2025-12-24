import { useState } from "react";
import "../Form.css"
function Form({ cardData, setCardData, setDownload }) {

    function handleImgChange(e) {
        const file = e.target.files[0]
        setCardData(prev => ({
            ...prev,
            imgUrl: file
        }))
    }

    function onCardTypeChange(type) {
        setCardData(prev => ({
            ...prev,
            cardType: type
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDownload(d => !d)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>

                <h1>Make Your Card</h1>
                <div className="type">
                    <label htmlFor="cardType">Select Card Type</label>
                    <select name="cardType" id="" onChange={(e) => onCardTypeChange(e.target.value)}>
                        <option value="Basic">
                            Basic
                        </option>
                        <option value="Business">
                            Business
                        </option>
                    </select>
                </div>
                <div className="inputs">

                    <input type="text" value={cardData.name}
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                name: e.target.value
                            }))
                        }}
                        placeholder="Enter Your Name" />
                    <input type="text" value={cardData.role}
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                role: e.target.value
                            }))
                        }}
                        placeholder="Enter Your Role" />
                    <input type="text" value={cardData.email}
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }}
                        placeholder="Enter Your Email" />
                    {
                        cardData.cardType === "Basic" ?
                            <>
                                <input type="text" value={cardData.socialLinks.x}
                                    onChange={(e) => {
                                        setCardData(prev => ({
                                            ...prev,
                                            x: e.target.value
                                        }))
                                    }}
                                    placeholder="Enter Your Twitter" />
                                <input type="text" value={cardData.socialLinks.insta}
                                    onChange={(e) => {
                                        setCardData(prev => ({
                                            ...prev,
                                            insta: e.target.value
                                        }))
                                    }}
                                    placeholder="Enter Your Instagram" />
                            </>
                            : null
                    }
                    <input type="text" value={cardData.link}
                        onChange={(e) => {
                            setCardData(prev => ({
                                ...prev,
                                link: e.target.value
                            }))
                        }}
                        placeholder="Enter Your link" />
                    <input type="file" accept="image/*" onChange={handleImgChange} />
                </div>

                <button id="submitBtn" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form;