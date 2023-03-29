import clientPromise from "../lib/mongodb";
import { MongoClient } from "mongodb-legacy";

export default async function updateCoffeefake(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");
    //Update one
    if (req.method === "PUT") {
      await db
        .collection("coffee")
        .updateOne(
          { name: req.body.name },
          { $set: { price: req.body.price } }
        );
      res.json({ success: true, message: "Coffee updated PUT" });
      //Update multiple
    } else if (req.method === "PATCH") {
      const filter = { weight: req.body.weight };
      const update = { $set: { weight: req.body.weight } };
      await db.collection("coffee").updateMany(filter, update);
      res.json({
        success: true,
        message: "Coffee updated PATCH",
      });
      //Find one and Update
    } else if (req.method === "POST") {
      const query = { name: req.body.name };
      const update = { $set: { name: req.body.name } };
      const result = await db
        .collection("coffee")
        .findOneAndUpdate(query, update);
      res.json({ success: true, data: result.value });
    } else if (req.method === "DELETE" && req.body.name) {
      // const { id } = req.query;
      // const query = { name: req.body.name };
      // const result = db.collection("coffee").delete(query);
      // parseInt(id)
      res
        .status(200)
        .json({ Message: "Has been deleted", Coffee: `${req.body.id}` });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
