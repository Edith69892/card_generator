import { useRef, useState } from 'react'
import './App.css'
import Card2 from './Components/Card2.jsx'
import Card1 from './Components/Card1.jsx'
import Form from './Components/Form.jsx'
import html2canvas from "html2canvas";


function App() {
  const cardRef = useRef(null)
  const [cardData, setCardData] = useState({
        cardType: "Basic",
        name: "",
        role: "",
        email: "",
        link: "",
        socialLinks: {
            x: "",
            insta: ""
        },
        imgUrl : null
    })
    const [download , setDownload] = useState(false)

    async function handleDownload(){
      if(!cardRef.current) return;

      const canvas = await html2canvas(cardRef.current,{
        scale :2,
        useCORS: true
      })

      const img = canvas.toDataURL("image/png")

       const link = document.createElement("a");
    link.href = img;
    link.download =`${cardData.name}-card.png`;
    link.click();
    }

  return (
    <>
      <br />
      {/* <Card /> */}
      <div className='main-container'>
        <Form cardData={cardData} setCardData={setCardData} setDownload={setDownload} />
      {
        download ? 
                  (cardData.cardType === "Basic" 
                      ? <div ref={cardRef}> <Card1 cardData={cardData}/> </div> 
                      : <div ref={cardRef}> <Card2 cardData={cardData}/> </div> )
                 : null
      }
      {
        download ? <button onClick={handleDownload}>Download</button> : null
      }
      </div>
    </>
  )
}

export default App
