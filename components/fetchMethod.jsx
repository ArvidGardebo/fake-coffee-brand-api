import { useState } from "react";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";

function FetchMethods({ ...props }) {
  const [show, setShow] = useState(false);
  const eventHandler = () => {
    !show ? setShow(true) : setShow(false);
  };

  return (
    <>
      <div className={`${global.styles} ${docs.fetchMethods}`}>
        <div>
          <h3
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 2,
              margin: "10px",
            }}
          >
            {props.title}
          </h3>
          <div className={docs.background_color_textfield}>
            <p
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: 2,
                margin: "10px",
              }}
            >
              {props.code}
            </p>
          </div>

          <div className={docs.tips}>
            <img src={props.img_src} alt={props.img_alt} />
            <p>{props.instructions}</p>
          </div>

          <button
            className={!show ? global.secondaryBtn : global.clickedSecBtn}
            onClick={eventHandler}
          >
            {!show ? "Show output" : "Hide output"}
          </button>
          {show ? (
            <div className={docs.background_color_textfield}>
              <p className={docs.output_textfield}></p>
              <p
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 2,

                  margin: "10px",
                }}
              >
                {props.test}
              </p>
              {props.test ? null : (
                <>
                  <p
                    style={{
                      whiteSpace: "pre-wrap",
                      lineHeight: 2,

                      margin: "10px",
                    }}
                  >
                    {props.text}
                  </p>
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default FetchMethods;
