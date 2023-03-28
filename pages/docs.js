import Navbar from "../components/navbar";
import global from "../styles/global.module.scss";
import test from "../styles/test.module.scss";

const Docs = () => {
  return (
    <div>
      <Navbar />
      <h1 className={test.navbar}>Documentation</h1>
    </div>
  );
};

export default Docs;
