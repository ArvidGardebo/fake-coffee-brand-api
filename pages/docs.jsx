import { domainToASCII } from "url";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";
import Navbar from "../components/navbar";
import FetchMethods from "../components/fetchMethod";
import { homedir } from "os";

function Docs() {
  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar />
        <main className={`${global.wrapper} ${global.marginTop}`}>
          <div>
            <div className={docs.fetchMethods}>
              <h2>HOW TO USE IT</h2>

              <p>
                Chartreuse sustainable raw denim hashtag. Put a bird on it
                brunch marxism gorpcore polaroid ethical cray hashtag PBR&B
                offal everyday carry.
              </p>
            </div>
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
