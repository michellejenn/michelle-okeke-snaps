import "./Footer.scss";
import Facebook from '../Icons/Facebook';
import Explore from '../Icons/Explore';
import Instagram from '../Icons/Instagram';
import Pinterest from '../Icons/Pinterest';
// Component for the footer

function Footer(){
    return(
        <section className="footer">
            <section className="footer__wrapper">
                <h2 className="footer__snaps">Snaps</h2>

                <ul className="footer__unordered">
                    <li className="footer__list">
                        <p className="footer__item">For photographers</p>
                        <p className="footer__item">Hire talent</p>
                        <p className="footer__item">Inspiration</p>
                    </li>
                    <li className="footer__list">
                        <p className="footer__item">About</p>
                        <p className="footer__item">Careers</p>
                        <p className="footer__item">Support</p>
                    </li>
                    {/* Defined two footer icons to alternatively display them on mobile or desktop screens using display: none */}
                    <li className="footer__icons">
                        {/* <img src="src/assets/images/Facebook.svg" alt="facebook icon" className="footer__icon" />
                        <img src="src/assets/images/X_twitter.svg" alt="explore icon" className="footer__icon" />
                        <img src="src/assets/images/Instagram.svg" alt="instagram icon" className="footer__icon" />
                        <img src="src/assets/images/Pinterest.svg" alt="pinterest icon" className="footer__icon" /> */}
                        

                        <Facebook/>
                        <Explore/>
                        <Instagram/>
                        <Pinterest/>
                      
                    </li>
                </ul>
            </section>
            {/* Second footer icons. Would be display: none on larger screens*/ }
            <ul className="footer__bottom">
            <li className="footer__icons-second">
                        <Facebook/>
                        <Explore/>
                        <Instagram/>
                        <Pinterest/>
                      
            
                    {/* <img src="src/assets/images/Facebook.svg" alt="facebook icon" className="footer__icon" />
                    <img src="src/assets/images/X_twitter.svg" alt="explore icon" className="footer__icon" />
                    <img src="src/assets/images/Instagram.svg" alt="instagram icon" className="footer__icon" />
                    <img src="src/assets/images/Pinterest.svg" alt="pinterest icon" className="footer__icon" /> */}
            </li>
            <li className="footer__writings">
                <p className="footer__terms">&copy;2004 Snaps</p>
                <p className="footer__terms">Terms</p>
                <p className="footer__terms">Privacy</p>
                <p className="footer__terms">Cookies</p>
            </li>
            </ul>
            
        </section>
    )
}
export default Footer;