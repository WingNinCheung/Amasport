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
    <div>
      <h3>Thank you for shopping in Amasport!</h3>
      <div>You can view your order history in your profile.</div>
      <div>
        You will be redirected to the home page in {timeLeft} seconds...
      </div>
    </div>
  );
}

export default ThankYou;
