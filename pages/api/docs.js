import cors from "cors";
import { getFetchData } from "../../utils/utils";

const corsOptions = {
  origin: "https://fake-coffe-api.vercel.app",
};

export default cors(corsOptions)(async function fetchHandler(req, res) {
  await getFetchData(req, res);
});
