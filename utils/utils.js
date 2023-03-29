import clientPromise from "../lib/mongodb";
import { MongoClient } from "mongodb-legacy";

export default async function updateCoffeefake(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");

    if (req.method === "GET") {
      let { limit, sort } = req.query;
      // Get limit
      if (limit) {
        const data = await db
          .collection("coffee")
          .find()
          .limit(parseInt(limit))
          .toArray();
        res.status(200).json(data);
      }
      // Get sorted (asc / desc)
      else if (sort) {
        const data = await db
          .collection("coffee")
          .find()
          .sort({ name: sort == "asc" ? 1 : -1 })
          .toArray();
        res.json(data);
      } else {
        // Get all
        const data = await db.collection("coffee").find().toArray();
        res.status(200).json(data);
      }
    }
    //Update one
    if (req.method === "POST") {
      const query = { name: req.body.name };
      const update = { $set: { id: req.body.id } };
      const result = await db
        .collection("coffee")
        .findOneAndUpdate(query, update);
      res.status(200).json({ success: true, data: result.value });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
