import Navbar from "../components/navbar";
import global from "../styles/global.module.scss";

const Docs = () => {
  return (
    <div>
      <Navbar />
      <h1 className={global.styles}>Documentation</h1>
    </div>
  );
};

export default Docs;
