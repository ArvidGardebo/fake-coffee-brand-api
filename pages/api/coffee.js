import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");

    const coffee = await db.collection("coffee").find({}).toArray();

    res.json(coffee);
  } catch (e) {
    console.error(e);
  }
};
