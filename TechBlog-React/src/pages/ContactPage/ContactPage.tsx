import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-main">
      <div className="box">
        <div className="contact-flexbox">
          <div className="contact form">
            <h3>Send a Message</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="Enter first name" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="Enter email" />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <div className="send-button">
                  <div className="inputBox">
                    <button type="button">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="info-map-flexbox">
          <div className="contact info">
            <h3>Contact info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p className="adress-p">11 Oktomvri 33, Skopje, Macedonia</p>
              </div>
              <div>
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <a href="mailto:techsphere@gmail.com">techsphere@gmail.com</a>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <a href="tel:+389 76 811 927">+389 76 811 927</a>
              </div>
            </div>
          </div>
          <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2097.0027721206643!2d21.438643308167457!3d41.987187625158796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354156e09f8f943%3A0x4f70677f66ebc77c!2sQinshift%20Academy!5e0!3m2!1smk!2smk!4v1719705662759!5m2!1smk!2smk"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
