import React, { useEffect, useState } from "react"
import './App.css';
import Video from "./pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from "firebase/firestore/lite";

// Este arquivo será o responsável pela conexão com o banco de dados

function App() {

  let maxHeight;
    if (window.innerHeight <= 800){
      maxHeight = window.innerHeight
    }
  
  // Esta parte serve para renderizar as informações do Banco de dados, trazendo e listando para o usuario
  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    // Faz a tela se adaptar com a maioria dos celulares
    <div className="App" style={{ maxHeight: maxHeight + "px"}}>
      <div className='app_videos'>

        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              descripition={item.descripition}
              music={item.music}
              url={item.url}
            />
          )
        })}

      </div>
    </div>
  );
}

export default App;
