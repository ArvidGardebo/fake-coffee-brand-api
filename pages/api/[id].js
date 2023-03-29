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
}
