import { domainToASCII } from "url";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";

function Docs() {
  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar />
        <main className={global.wrapper}>
          <div>
            <h1>HOW TO USE IT</h1>
            <p>
              Chartreuse sustainable raw denim hashtag. Put a bird on it brunch
              marxism gorpcore polaroid ethical cray hashtag PBR&B offal
              everyday carry.
            </p>
          </div>
          <section className={docs.fetchmethods}>
            {/* insert fetch-info component here*/}
          </section>
        </main>
      </div>
    </>
  );
}

export default Docs;
