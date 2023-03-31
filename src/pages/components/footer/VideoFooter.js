import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter() {
    return (
        <div className='video_footer'>
            <div className='video_footer_text'>
                <h3>@Yurii</h3>
                
                <p>Descrição do Vídeo</p>
                
                <div className='video_footer_music'>
                    <MusicNoteIcon className='video_footer_icon'/>
                    <div className='video_footer_titulo'>
                        <p>Titulo da música</p>
                    </div>
                </div>
            </div>
            <img className='video_footer_record'
                alt='Imagem de Vinil'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png' />
        </div>
    )
}

export default videoFooter