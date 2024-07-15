import { ReactNode } from "react";
import "./AboutTeamCard.css";

interface AboutTeamCardProps {
  img: string;
  name: string;
  role: string;
  email: string;
}

function AboutTeamCard({
  img,
  name,
  role,
  email,
}: AboutTeamCardProps): ReactNode {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="Team member image" />
      </div>
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-role">{role}</p>
        <p className="card-email">{email}</p>
        <p>
          <button className="button">Contact</button>
        </p>
      </div>
    </div>
  );
}

export default AboutTeamCard;
