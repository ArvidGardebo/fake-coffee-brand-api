import global from "../styles/global.module.scss";
import home from "../styles/home.module.scss";
import Navbar from "../components/navbar";
import { Footer } from "../components/navbar";
import Image from "next/image";
import swirl from "../assets/swirl.svg";
import heroImg from "../public/Frame _58.png";

import arrowDown from "../assets/arrow-down.svg";
import beans1 from "../assets/beans1.svg";
import beans2 from "../assets/beans2.svg";
import beans3 from "../assets/beans3.svg";
import FetchMethods from "../components/fetchMethod";
import Slider from "../components/slider/slider";
const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

import Link from "next/link";
import docs from "../styles/docs.module.scss";

function Home() {
  const handleToScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const slides = [{ name: 1 }, { name: 2 }, { name: 3 }];

  return (
    <>
      <div className={`${global.styles}`}>
        <Navbar src="Fake_Api_Logo_yellow.gif" />
        <section className={`${home.heroSection} ${global.marginTop}`}>
          <div className={home.heroContainer}>
            <div className={home.heroTextContainer}>
              <h1>FAKE COFFEE API</h1>
              <p>
                Fake coffee products rest API for your e-commerce or cafe
                website prototype
              </p>
              <div className={home.buttonContainer}>
                <Link href="/docs" className={global.primaryBtn}>
                  Read Docs
                </Link>
                <Link
                  href="https://github.com/"
                  className={global.secondaryBtn}
                >
                  View GitHub
                </Link>
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
                priority={true}
              ></Image>
            </div>
          </div>
          <Link
            href="#about"
            onClick={handleToScroll}
            className={home.arrowDown}
          >
            <Image src={arrowDown} alt="Arrow pointing down"></Image>
          </Link>

          <Image
            className={home.beans1}
            src={beans1}
            alt="A cluster of illustrated beans"
          ></Image>
          <Image
            className={home.beans2}
            src={beans2}
            alt="A cluster of illustrated beans"
          ></Image>
          <Image
            className={home.beans3}
            src={beans3}
            alt="A cluster of illustrated beans"
          ></Image>
        </section>

        <div className={global.wrapper}>
          <section className={home.aboutSection} id="about">
            <div
              className={`${home.aboutTextContainer} ${docs.header_container}`}
            >
              <div className={docs.header_backgroundImg}>
                <h2>ABOUT THE API</h2>
              </div>
              <p>
                Hello and thank you for stopping by our documentation page for
                our fake coffee product API! Our API provides unrestricted
                access to a wide range of endpoints that contain essential
                information about our products, including their names, images,
                descriptions, prices and other relevant details.
              </p>
              <p>
                We developed this fabricated coffee brand specifically for those
                who want to develop an e-commerce or cafe website prototype.
                Happy coding!
              </p>
            </div>

            <FetchMethods
              title="Get all products."
              code={`
  fetch('localhost:3000/api',
       .then((res) => res.json()),
       .then((data) => console.log(data));`}
              test={`
              [
                {
                id:1,
                name:...,
                description:...,
                price:...,
                region:...,
                weight:...,
                flavor_profile:...,
                grind_option:...,
                roast_level:...,
                },
                }
                {
                id:2,
                name:...,
                description:...,
                price:...,
                region:...,
                weight:...,
                flavor_profile:...,
                grind_option:...,
                roast_level:...,
                }
              ]`}
              img_src="Vector.svg"
              img_alt="Lightning Bolt"
              instructions="Example on how to fetch."
            />

            <div className="sandbox">
              <div className="sandbox__carousel">
                <Slider slides={SLIDES} options={OPTIONS} />
              </div>
            </div>

            <div className={home.listContainer}>
              <h3>Resources</h3>
              <ul className={home.list}>
                <li>
                  <span>Products</span>
                  <a href="">20 Coffee Items</a>
                </li>
              </ul>
            </div>
            <div className={home.listContainer}>
              <h3>Routes</h3>
              <ul className={home.list}>
                <li>
                  <span>GET</span>
                  <a href="">/api</a>
                </li>
                <li>
                  <span>GET</span>
                  <a href="">/api/1</a>
                </li>
                <li>
                  <span>GET</span>
                  <a href="">/api?limit=5</a>
                </li>
                <li>
                  <span>GET</span>
                  <a href="">/api?sort=asc</a>
                </li>
                <li>
                  <span>POST</span>
                  <a href="">/api</a>
                </li>
                <li>
                  <span>PUT</span>
                  <a href="">/api/1</a>
                </li>
                <li>
                  <span>PATCH</span>
                  <a href="">/api/1</a>
                </li>
                <li>
                  <span>DELETE</span>
                  <a href="">/api/1</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
