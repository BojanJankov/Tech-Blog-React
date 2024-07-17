import AboutTeamCard from "../../components/AboutTeamCard/AboutTeamCard";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="AboutPage">
      <div className="about">
        <h1>About Us</h1>
        <p>Stay updated with the latest happenings in the tech industry...</p>
        <div className="about-info">
          <div className="about-img">
            <img src="../../../src/assets/only logo.png" alt="Logo" />
          </div>
          <div className="about-text-p">
            <p>
              Welcome to TECH Sphere Blog your go-to destination for all things
              tech! We are a passionate team of tech enthusiasts dedicated to
              bringing you the latest news, in-depth reviews, and insightful
              analysis of the ever-evolving world of technology. Our team is
              composed of experienced tech writers, analysts, and enthusiasts
              who share a deep passion for technology. With diverse backgrounds
              and expertise, we bring a balanced perspective to our content,
              ensuring it is both accurate and insightful. At TECH Sphere Blog,
              our mission is to empower our readers with knowledge and insights
              into the tech landscape. Whether you're a seasoned tech guru or a
              curious beginner, we aim to provide content that is both
              informative and engaging, helping you stay ahead in a fast-paced
              digital world.
            </p>
            <button className="about-read-more-button">Read More...</button>
          </div>
        </div>
      </div>
      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          <AboutTeamCard
            img="../../../src/assets/teamImagesMock/member-one.jpg"
            name="Jane"
            role="CEO and Founder"
            email="jane@example.com"
          />
          <AboutTeamCard
            img="../../../src/assets/teamImagesMock/member-two.jpg"
            name="Miller"
            role="Co-Founder"
            email="miller@example.com"
          />
          <AboutTeamCard
            img="../../../src/assets/teamImagesMock/member-one.jpg"
            name="Joe"
            role="Co-Founder"
            email="joe@example.com"
          />
        </div>
      </section>
      <BackToTopButton />
    </section>
  );
}

export default AboutPage;
