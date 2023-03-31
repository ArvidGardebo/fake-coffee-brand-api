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
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                region={product.region}
                weight={product.weight}
                flavor_profile={product.flavor_profile}
                grind_option={product.grind_option}
                roast_level={product.roast_level}
              />
            ))}
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
