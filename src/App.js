import './App.css';
import video from './assets/videos/compressed.mp4';

function App() {
  return (
    <div className="scroll-container">
      <video className="background-video" autoPlay="autoplay" muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="wrapper">
        <div className="header">
          THE CREATIVE
          <br />
          WEB AGENCY
          <br />
          DESIGN/CODE
        </div>
      </div>
    </div>
  );
}

export default App;
