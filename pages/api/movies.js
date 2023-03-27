import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");

    const movies = await db
      .collection("coffee")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
