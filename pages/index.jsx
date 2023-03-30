import global from "../styles/global.module.scss";
import home from "../styles/home.module.scss";
import Navbar from "../components/navbar";
import Image from "next/image";
import swirl from "../assets/swirl.svg";
import heroImg from "../assets/mockups.png";
import docs from "../styles/docs.module.scss";

function Home() {
  return (
    <>
      <div className={`${global.styles}`}>
        <Navbar />
        <section className={home.heroSection}>
          <div className={home.heroContainer}>
            <div className={home.heroTextContainer}>
              <h1>FAKE COFFEE API</h1>
              <p>
                Fake coffee products rest API for your e-commerce or cafe
                website prototype
              </p>
              <div className={home.buttonContainer}>
                <button className={global.primaryBtn}>Read Docs</button>
                <button className={global.secondaryBtn}>View GitHub</button>
              </div>
            </div>
            <div className={home.imgContainer}>
              <Image
                className={home.heroImg}
                src={heroImg}
                alt="Two bags of coffee"
              ></Image>
              <Image
                className={home.swirl}
                src={swirl}
                alt="Background swirl"
              ></Image>
            </div>
          </div>
        </section>
        <section className={`${home.aboutSection}, ${global.wrapper}`}>
          <div className={docs.header_backgroundImg}>
            <h2 className={docs.header_text}>ABOUT THE API</h2>
          </div>
          <p>
            Hello and thank you for stopping by our documentation page for our
            fake coffee product API! Our API provides unrestricted access to a
            wide range of endpoints that contain essential information about our
            products, including their names, images, descriptions, prices and
            other relevant details. We developed this fabricated coffee brand
            specifically for those who want to develop an e-commerce or cafe
            website prototype. Happy coding!
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
