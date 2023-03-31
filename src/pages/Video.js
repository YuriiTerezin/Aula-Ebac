import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import "./video.css"

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  //Aqui ele verifica se o vídeo ja foi iniciado ou não, com apenas um clique na tela ele inicia ou pausa o vídeo
  function handdleStart() {

    if (play) {
      videoRef.current.pause()
      setPlay(false)

    } else {
      videoRef.current.play()
      setPlay(true)
    }

  }

  //no 'SCR' eu coloco o link do vídeo que será exibido na tela

  return (
    <div className='video'>
      <video className='video_player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'>
      </video>
        {/* Side bar */}
        
        <VideoFooter />
        
    </div>
  )
}

export default Video