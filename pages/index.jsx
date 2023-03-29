import global from "../styles/global.module.scss";
import test from "../styles/test.module.scss";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className={global.styles}>
        <div>
          <h1>Home</h1>
          <p>Hejsan</p>
        </div>
      </div>
    </>
  );
}

export default Home;
