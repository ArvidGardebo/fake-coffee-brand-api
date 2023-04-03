import { domainToASCII } from "url";
import global from "../styles/global.module.scss";
import docs from "../styles/docs.module.scss";
import Navbar from "../components/navbar";
import FetchMethods from "../components/fetchMethod";
import { homedir } from "os";
import { Footer } from "../components/navbar";
import { useEffect, useState } from "react";

function Docs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/docs")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar url="Fake_Api_Logo_white.gif" />
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
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                text={product.textall}
                title={product.getall}
                code={product.getallcode}
                instructions={product.install}
                img_src="Vector.svg"
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                text={product.text}
                title={product.getsingle}
                code={product.getsinglecode}
                instructions={product.instone}
                img_src="Vector.svg"
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                title={product.limit}
                code={product.limitcode}
                test={product.test}
                instructions={product.instlimit}
                img_src="Vector.svg"
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                title={product.sort}
                code={product.sortcode}
                test={product.testsort}
                instructions={product.instsort}
                img_src="Vector.svg"
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                title={product.update}
                code={product.updatecode}
                test={product.updatetest}
                instructions={product.instupdate}
                img_src="Vector.svg"
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                title={product.add}
                code={product.addcode}
                test={product.addtest}
                instructions={product.instadd}
                img_src="Vector.svg"
              />
            ))}

            {products.map((product, index) => (
              <FetchMethods
                key={index}
                title={product.delet}
                code={product.deletecode}
                test={product.deletetest}
                instructions={product.instdelete}
                img_src="Vector.svg"
              />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Docs;
