import { domainToASCII } from "url";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";
import Navbar from "../components/navbar";
import FetchMethods from "../components/fetchMethod";
import { homedir } from "os";
import { Footer } from "../components/navbar";

function Docs() {
  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar />
        <main className={`${global.wrapper} ${global.marginTop}`}>
          <div className={docs.header_container}>
            <div className={docs.fetchMethods}>
              <div className={docs.header_backgroundImg}>
                <h2 className={docs.header_text}>HOW TO USE IT</h2>
              </div>

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
      <Footer />
    </>
  );
}
export default Docs;
