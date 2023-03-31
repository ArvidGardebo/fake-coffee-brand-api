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
          <h3>{props.title}</h3>
          <div className={docs.background_color_textfield}>
            <p>{props.paragraphs_code}</p>
          </div>

          <div className={docs.tips}>
            <img src={props.img_src} alt={props.img_alt} />
            <p>{props.instructions}</p>
          </div>

          <button className={global.secondaryBtn} onClick={eventHandler}>
            {!show ? "Show output" : "Hide output"}
          </button>
          {show ? (
            <div className={docs.background_color_textfield}>
              <p className={docs.output_textfield}>{props.code_example}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default FetchMethods;
