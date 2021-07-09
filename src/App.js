import './App.css';
import VideoPlayer from "./VideoPlayer";


const params = { cloudName: "pictures77", publicId: "climbing" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Streaming Video with Adpative Bitrate Streaming</h2>
          <div>
            <h3>Cloudinary Video Player</h3>
            <VideoPlayer params={params} />
          </div>
      </header>
    </div>
  );
}

export default App;
