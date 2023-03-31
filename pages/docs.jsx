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
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products);

  return (
    <>
      <div className={`${global.styles} ${docs.styles}`}>
        <Navbar />
        <main className={`${global.wrapper} ${global.marginTop}`}>
          <div className={docs.header_container}>
            <div className={docs.fetchMethods}>
              <div className={docs.header_backgroundImg}>
                <h2>HOW TO USE IT</h2>
              </div>

              <p>
                Chartreuse sustainable raw denim hashtag. Put a bird on it
                brunch marxism gorpcore polaroid ethical cray hashtag PBR&B
                offal everyday carry.
              </p>
            </div>
          </div>
          <section className={docs.fetchMethods}>
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.getall}
                code={product.getallcode}
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.getsingle}
                code={product.getsinglecode}
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.limit}
                code={product.limitcode}
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.sort}
                code={product.sortcode}
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                text={product.id2}
                text2={product.desc}
                text3={product.title}
                text4={product.newprice}
                title={product.update}
                code={product.updatecode}
              />
            ))}
            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.add}
                code={product.addcode}
                img_src="Vector.svg"
                instructions="Try this output."
              />
            ))}

            {products.map((product, index) => (
              <FetchMethods
                key={index}
                {...product}
                title={product.delet}
                code={product.deletecode}
                img_src="Vector.svg"
                instructions="Try this output."
              />
            ))}

            <FetchMethods
              img_src="Vector.svg"
              instructions="Try this output."
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Docs;
