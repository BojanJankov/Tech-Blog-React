import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="divflex">
        <section className="footer-section">
          <section>
            <img
              className="logo"
              src="../../../src/assets/logo.png"
              title="logo"
              alt="logo"
            />
            <address className="address">
              <li>Ul.Makedonija bb</li>
              <li>1000,Skopje</li>
              <li>+00389 02 2465672</li>
              <li>info@techspehere.com.mk</li>
            </address>

            <span className="social-links">
              <h2>Follow Us</h2>
              <a>
                <img
                  className="facebook"
                  src="../../../src/assets/facebook_145802.png"
                  alt="Facebook"
                />
              </a>
              <a>
                <img
                  className="instagram"
                  src="../../../src/assets/instagram_2111463.png"
                  alt="Instagram"
                />
              </a>
              <a>
                <img
                  className="linkedin"
                  src="../../../src/assets/linkedin_145807.png"
                  alt="Linkedin"
                />
              </a>
            </span>
          </section>
          <section className="infoone">
            <menu>
              <h2>Support</h2>
              <li>
                <a className="footer-contact-link"> Contact</a>
              </li>
              <li>
                <a> Help Center</a>
              </li>
              <li>
                <a> Site Map</a>
              </li>
              <li>
                <a> Professional Services</a>
              </li>
            </menu>
          </section>
          <section className="infotwoo">
            <menu>
              <h2>Company</h2>
              <li>
                <a className="footer-about-link"> About Us</a>
              </li>
              <li>
                <a> Careers</a>
              </li>
              <li>
                <a> Newsroom</a>
              </li>
              <li>
                <a> Resources</a>
              </li>
            </menu>
          </section>
        </section>
      </div>
      <section className="infothree">
        <li>
          <a> Terms of use</a>
        </li>
        <li>
          <a> Privacy Notice</a>
        </li>
        <li>
          <a> Cookie Policy</a>
        </li>
        <li>
          <a> FAQ</a>
        </li>
      </section>
      <section className="footer-botom">
        Copyright &copy; 2024 - All Rights Reserved - TECH Sphere
      </section>
    </footer>
  );
}

export default Footer;
