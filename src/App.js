import './App.css';
import VideoPlayer from "./VideoPlayer";

// cloudName and public id are both public data as they show up in the
// Cloudinary URL.
const params = { cloudName: "pictures77", publicId: "climbing" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Streaming Video with Adpative Bitrate Streaming</h1>
          <div>
            <VideoPlayer params={params} />
          </div>
      </header>
    </div>
  );
}

export default App;
