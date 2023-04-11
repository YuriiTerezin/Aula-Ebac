import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import VideoAdd from './components/add/VideoAdd'
import "./video.css"

function Video({ likes, messages, shares, name, descripition, music, url }) {

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

  // Se o video foi iniciado entrará em loop
  return (
    <div className='video'>
      <video className='video_player'
        ref={videoRef} onClick={handdleStart} loop
        src={url}>
      </video>

      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />

      <VideoFooter
        name={name}
        descripition={descripition}
        music={music}
      />

      <VideoAdd />

    </div>
  )
}

export default Video