import clientPromise from "../../lib/mongodb";

export default async function getbyId(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db("fake_coffee");
  const result = await db.collection("coffee").findOne({
    id: parseInt(id),
  });

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({
      message: "Coffee item not found",
    });
  }

  if (req.method === "PUT") {
    // await db
    //   // .collection("coffee")
    //   // .updateOne(
    //   //   { name: req.body.name },
    //   //   { $set: { price: req.body.price } }
    //   // );
    res.status(200).json({
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
    res.status(200).json({
      success: true,
      message: "Coffee updated PATCH",
    });
    //Find one and Update
  } else if (req.method === "DELETE" && req.body.name) {
    // const { id } = req.query;
    // const query = { name: req.body.name };
    // const result = db.collection("coffee").delete(query);
    // parseInt(id)
    res
      .status(200)
      .json({ Message: "Has been deleted", Coffee: `${req.body.id}` });
  }
}
