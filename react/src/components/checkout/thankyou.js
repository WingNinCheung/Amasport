import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ThankYou() {
  const [timeLeft, setTimeLeft] = useState(5);
  const history = useHistory();

  useEffect(() => {
    if (timeLeft === 0) {
      history.push("/home");
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="outter-thankyou">
      <div className="thankyou-container">
        <div className="login-logo">
          <h2 id="thankyou-title">Amasport</h2>
        </div>
        <img
          className="logo-img"
          id="thankyou-logo"
          src="https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png"
          alt="logo"
        ></img>
        <h3>Thank you for shopping at Amasport!</h3>
        <div>You can view your order history in your profile.</div>
        <div>
          You will be redirected to the home page in{" "}
          <span className="count-timer">{timeLeft}</span> seconds...
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
