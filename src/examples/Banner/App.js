import './App.css';
import { Banner, SecondBanner } from './Banner/Banners';

function App() {
  return (
    <div>
      <Banner>
        <h1>first banner</h1>
      </Banner>
      <SecondBanner>
        <h1>second banner</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
