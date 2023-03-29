import clientPromise from "../lib/mongodb";

export default async function updateCoffeefake(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");
    //Update one
    if (req.method === "PUT") {
      // await db
      //   // .collection("coffee")
      //   // .updateOne(
      //   //   { name: req.body.name },
      //   //   { $set: { price: req.body.price } }
      //   // );
      res.json({
        success: true,
        message: "Update succesful",
        coffee: {
          name: req.body.name,
          price: req.body.price,
        },
      });
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
      const update = { $set: { id: req.body.id } };
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
