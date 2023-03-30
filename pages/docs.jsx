import { domainToASCII } from "url";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";
import Navbar from "../components/navbar";
import FetchMethods from "../components/fetchMethod";

function Docs() {
  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar />
        <main className={global.wrapper}>
          <div className={docs.fetchMethods}>
            <h1 className={docs.header_text}>HOW TO USE IT</h1>
            <p>
              Chartreuse sustainable raw denim hashtag. Put a bird on it brunch
              marxism gorpcore polaroid ethical cray hashtag PBR&B offal
              everyday carry.
            </p>
          </div>
          <section className={docs.fetchmethods}>
            <FetchMethods />
            <FetchMethods />
            <FetchMethods
              img_src="Vector.svg"
              instructions="Try this output."
            />
            <FetchMethods />
          </section>
        </main>
      </div>
    </>
  );
}
export default Docs;
