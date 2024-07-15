import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <section className="NotFoundPage">
      <div className="error-page-message-div">
        <h1>Page Not Found, ERROR 404!</h1>
        <Link to="/">
          <p>Back to home page</p>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
