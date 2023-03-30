import { useState } from "react";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";

function FetchMethods(props) {
  const [show, setShow] = useState(false);
  const eventHandler = () => {
    !show ? setShow(true) : setShow(false);
  };

  return (
    <>
      <div className={`${global.styles} ${docs.fetchMethods}`}>
        <div>
          <h3>Get all products{props.title}</h3>
          <div className={docs.background_color_textfield}>
            <p>
              {`fetch('https://fakecoffeeapi.com/api/coffee') .then(res=>res.json()) .then(json=>console.log(json))`}
              {props.paragraphs}
            </p>
          </div>
          <div className={docs.tips}>
            <img src={props.img_src} alt={props.img_alt} />
            <p>{props.instructions}</p>
          </div>
          <button className={global.secondaryBtn} onClick={eventHandler}>
            {!show ? <span>Show output</span> : <span>Hide output</span>}
          </button>
          {show ? (
            <div className={docs.background_color_textfield}>
              <p className={docs.output_textfield}>
                Hello hello Hello hello Hello hello Hello hello Hello hello
                Hello hello Hello hello
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default FetchMethods;
