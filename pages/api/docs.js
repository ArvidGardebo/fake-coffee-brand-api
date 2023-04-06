import cors from "cors";
import { getFetchData } from "../../utils/utils";

const corsOptions = {
  origin: "*",
};

export default cors(corsOptions)(async function fetchHandler(req, res) {
  await getFetchData(req, res);
});
