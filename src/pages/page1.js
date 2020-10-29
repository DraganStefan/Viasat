import Logomark from "../images/Logomark.png";
import commercialPicture from "../images/commercial-picture.jpg";

export default function Page1(props) {
  return (
    <div>
      <div className="logo">
        Viasat
        <span className="tm">TM</span>
        <img className="Logomark" src={Logomark} alt="Logo" />
      </div>
      <div className="picture">
        <img src={commercialPicture} className="commercial" alt="commercial" />
        <div className="transparency"></div>
      </div>
      <div className="content">
        <div className="page1-container">
          <div className="title">Buy VIASAT</div>
          <div className="description">Want to become a member of VIASAT?</div>
          <div className="description">
            Let us know your location and what plans you prefer and we will do
            the rest.
          </div>
          <a href="#" className="btn" onClick={props.onClick}>
            Get started now <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="login-question">
        Already have an account?
        <a href="#" className="login">
          LOG IN
        </a>
      </div>
    </div>
  );
}
