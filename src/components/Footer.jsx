import {React} from 'react';
import '../assets/styles/Footer.scss';

const Footer = () => {
    return(
        <footer>
        <h1>Get better work</h1>
        <br />
        <p>See why million of people across 195</p>
        <p>uses Desh dot</p>
        <form>
          <input placeholder="artalisajid@gmail.com" />
          <button>Try Free</button>
        </form>
        <div className="footer-nav">
          <div className="footer-nav-col1">
            <h3>Sajid Studio</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="footer-nav-col2">
            <h3>Links</h3>
            <br />
            <ul>
              <li>Home</li>
              <li>Prior</li>
              <li>Download</li>
              <li>About</li>
              <li>Service</li>
            </ul>
          </div>
          <div className="footer-nav-col2">
            <h3>Support</h3>
            <br />
            <ul>
              <li>FAQ</li>
              <li>How it</li>
              <li>Features</li>
              <li>Contact</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className="footer-nav-col1">
            <h3>Contact Us</h3>
            <br />
            <p>+923431279488</p>
            <p>artalisajid@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright & Design by Sajid</span>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </footer>
    )
}

export default Footer;