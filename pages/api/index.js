import cors from "cors";
import updateCoffeefake from "../../utils/utils";

const corsOptions = {
  origin: "*",
};

export default cors(corsOptions)(async function handler(req, res) {
  await updateCoffeefake(req, res);
});
