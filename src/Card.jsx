import "./Card.css";

function Card() {
  return (
    <div className="json-card">
      {/* Header */}
      <div className="json-header">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <span className="title">Business Card.json</span>
        <span className="menu">•••</span>
      </div>

      {/* Code */}
      <div className="json-body">
        <div className="row">
          <span className="line">1</span>
          <span className="file">Business Card.json</span>
        </div>

        <div className="row">
          <span className="line">2</span>
          <span className="brace">{`{`}</span>
        </div>

        <div className="row">
          <span className="line">3</span>
          <span className="key">"name"</span>
          <span className="colon">:</span>
          <span className="value"> "@fr0gger_"</span>
        </div>

        <div className="row">
          <span className="line">4</span>
          <span className="key">"title"</span>
          <span className="colon">:</span>
          <span className="value"> "Malware Therapist"</span>
        </div>

        <div className="row">
          <span className="line">5</span>
          <span className="key">"email"</span>
          <span className="colon">:</span>
          <span className="value"> "my@email.com"</span>
        </div>

        <div className="row">
          <span className="line">6</span>
          <span className="key">"link"</span>
          <span className="colon">:</span>
          <span className="value"> "securitybreak.io"</span>
        </div>

        <div className="row">
          <span className="line">7</span>
          <span className="brace">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
