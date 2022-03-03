import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-header-container">
        <Header />
      </div>
      <div className="app-body-container">body</div>
      <div className="app-footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
