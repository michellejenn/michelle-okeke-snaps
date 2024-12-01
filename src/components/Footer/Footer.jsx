import "./Footer.scss";

function Footer(){
    return(
        <section className="footer">
            <h2 className="footer__snaps">Snaps</h2>

            <ul className="footer__unordered">
                <li class="footer__list">
                    <p className="footer__item">For photographers</p>
                    <p className="footer__item">Hire talent</p>
                    <p className="footer__item">Inspiration</p>
                </li>
                <li class ="footer__list">
                    <p className="footer__item">About</p>
                    <p className="footer__item">Careers</p>
                    <p className="footer__item">Support</p>
                </li>
                <li className="footer__icons">
                    <img src="src/assets/images/Facebook.svg" alt="facebook icon" className="footer__icon" />
                    <img src="src/assets/images/X_twitter.svg" alt="explore icon" className="footer__icon" />
                    <img src="src/assets/images/Instagram.svg" alt="instagram icon" className="footer__icon" />
                    <img src="src/assets/images/Pinterest.svg" alt="pinterest icon" className="footer__icon" />
                   
            </li>
                
                
            </ul>
            <ul className="footer__bottom">
            <li className="footer__icons">
                    <img src="src/assets/images/Facebook.svg" alt="facebook icon" className="footer__icon" />
                    <img src="src/assets/images/X_twitter.svg" alt="explore icon" className="footer__icon" />
                    <img src="src/assets/images/Instagram.svg" alt="instagram icon" className="footer__icon" />
                    <img src="src/assets/images/Pinterest.svg" alt="pinterest icon" className="footer__icon" />
                   
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