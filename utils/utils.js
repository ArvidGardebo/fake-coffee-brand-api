import clientPromise from "../lib/mongodb";

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
        res.json(data);
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
        res.json(data);
      }
    }
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
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
