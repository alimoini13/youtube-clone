import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import more_icon from '../../assets/more.png';
import upload_icon from '../../assets/upload.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/profile.png';
const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        <input type="text" placeholder="search" />
        <img src={search_icon} alt="" />
      </div>
      <div className="nav-right flex-div">
        <img src={more_icon} alt="" />
        <img src={upload_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
