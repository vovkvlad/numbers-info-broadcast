import img from './Flag_of_Ukraine.svg.png';
import './Header.css';

export function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={img} alt="header-image" className="header-logo-img"/>
      </div>
      <div className="header-name">Mock Name</div>
    </div>
  );
}