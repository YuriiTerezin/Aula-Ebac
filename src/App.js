
import './App.css';
import Video from "./pages/Video"

//Este arquivo será o responsável pela conexão com o banco de dados

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video 
          likes={101}
          messages={202}
          shares={303}
          name="Yurii"
          descripition="Gato louco sem controle"
          music="Musica de ação"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={404}
          messages={505}
          shares={606}
          name="Locoo"
          descripition="Gato fofo brincando"
          music="Sem música"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
      </div>
    </div>
  );
}

export default App;
