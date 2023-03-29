import { useState } from "react";
import global from "../styles/global.module.scss";

function FetchMethods(props) {
  const [show, setShow] = useState(false);
  const eventHandler = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <>
      <div className={global.styles}>
        <h3>Get all products{props.title}</h3>
        <div>
          <p>
            {`fetch('https://fakecoffeeapi.com/api/coffee') .then(res=>res.json()) .then(json=>console.log(json))`}
            {props.paragraphs}
          </p>
        </div>
        <button onClick={eventHandler}>Show output</button>
        {show ? (
          <div className="hidden">
            <p>
              Hello hello Hello hello Hello hello Hello hello Hello hello Hello
              hello Hello hello
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default FetchMethods;
