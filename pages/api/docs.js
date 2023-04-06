import { getFetchData } from "../../utils/utils";

export default async function fetchHandler(req, res) {
  await getFetchData(req, res);
}
