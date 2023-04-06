import updateCoffeefake from "../../utils/utils";

export default async function handler(req, res) {
  await updateCoffeefake(req, res);
}
