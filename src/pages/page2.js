import Card from '../components/card';
import questionIconBlack from '../images/question-icon-black.png';
import questionIconGrey from '../images/question-icon-grey.png';
import toolIcon from '../images/tool-icon.png';
import routerIcon from '../images/router-icon.png';

export default function Page2(props) {
  return (
    <div className="container">
      <div className="header">
        <div className="action-primary">
          <span>Buy Viasat</span>
          <img
            src={questionIconBlack}
            className="questonIconBlack"
            alt="icon"
          />
        </div>
        <div className="action-secondary">
          <div>Select a plan</div>
          <div className="progress-bar">
            <div className="progress-bar-content" style={{ width: '25%' }} />
          </div>
        </div>
      </div>

      <div className="page2-content">
        <div className="description">
          <div className="line-1">
            <span>All our plans include:</span>
            <img src={questionIconGrey} className="questonIcon" alt="icon" />
          </div>
          <div className="line-2-3">
            <img src={toolIcon} className="description-icon" alt="icon" />
            <span>Free professional wquipmend and installation</span>
          </div>
          <div className="line-2-3">
            <img src={routerIcon} className="description-icon" alt="icon" />
            <span>Wifi router</span>
          </div>
          <div className="required">
            <span>Required *</span>
            <img src={questionIconGrey} className="questonIcon" alt="icon" />
          </div>
        </div>

        <Card
          icon="card-icon1.png"
          title="ILIMITADA 50"
          description="Best for TV and Netflix"
          internet="50 Mbps, 100 Gb priority data"
          price="69,99"
        />
        <Card
          icon="card-icon2.png"
          title="ILIMITADA 30"
          description="Best for TV and Netflix"
          internet="50 Mbps, 100 Gb priority data"
          price="29,99"
        />
        <Card
          icon="card-icon3.png"
          title="ILIMITADA 20"
          description="Best for TV and Netflix"
          internet="50 Mbps, 100 Gb priority data"
          price="19,99"
        />

        <div className="optional">
          <span>Optional</span>
          <img src={questionIconGrey} className="questonIcon" alt="icon" />
        </div>

        <Card
          icon="card-icon4.png"
          title="Netflix"
          description="Best for TV and Netflix"
          price="10"
        />
        <Card
          icon="card-icon5.png"
          title="IHBO"
          description="Best for TV and Netflix"
          price="13"
        />
        <Card
          icon="card-icon6.png"
          title="Disney +"
          description="Best for TV and Netflix"
          price="8"
        />
      </div>

      <div className="footer">
        <div className="charge-total">Total now: 0€</div>
        <div className="charge-monthly">Monthly charge: 0€</div>
        <div className="page2-buttons">
          <a href="#" className="button back" onClick={props.onClick}>
            <span className="custom-arrow left" />
            BACK
          </a>
          <a href="#" className="button next disabled">
            NEXT
            <span className="custom-arrow right" />
          </a>
        </div>
      </div>
    </div>
  );
}
