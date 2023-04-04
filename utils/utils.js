import clientPromise from "../lib/mongodb";

export async function getFetchData(req, res) {
  const client = await clientPromise;
  const db = client.db("fake_coffee");
  const data = await db.collection("fetches").find().toArray();
  return res.json(data);
}

export default async function updateCoffeefake(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("fake_coffee");

    if (req.method === "GET") {
      let { limit, sort } = req.query;
      const query = {};
      // Get limit
      if (limit) {
        const data = await db
          .collection("coffee")
          .find()
          .limit(parseInt(limit))
          .toArray();
        res.status(200).json(data);
        return;
      }
      // Get sorted (asc / desc)
      else if (sort) {
        const data = await db
          .collection("coffee")
          .find()
          .sort({ name: sort == "asc" ? 1 : -1 })
          .toArray();
        res.status(200).json(data);
        return;
        //Get item based on body sent in
      } else if (Object.keys(req.body).length > 0) {
        if (req.body.name) query.name = req.body.name;
        if (req.body.description) query.description = req.body.description;
        if (req.body.price) query.price = req.body.price;
        if (req.body.region) query.region = req.body.region;
        if (req.body.weight) query.weight = req.body.weight;
        if (req.body.flavor_profile)
          query.flavor_profile = req.body.flavor_profile;
        if (req.body.grind_option) query.grind_option = req.body.grind_option;
        if (req.body.roast_level) query.roast_level = req.body.roast_level;
        const result = await db.collection("coffee").find(query).toArray();
        res.status(200).json(result);
        return;
      } else {
        // Get all
        const data = await db.collection("coffee").find().toArray();
        res.status(200).json(data);
        return;
      }
    }

    //Update one
    if (req.method === "POST" && req.body.name) {
      const {
        name,
        description,
        price,
        region,
        weight,
        flavor_profile,
        grind_option,
        roast_level,
      } = req.body;
      const newCoffee = {
        _id: "6424335b59f9f6fdd657d2e1",
        id: 21,
        name,
        description,
        price,
        region,
        weight,
        flavor_profile,
        grind_option,
        roast_level,
      };

      res.status(200).json({ success: true, added: newCoffee });

      return;
    } else {
      res.status(405).json({ success: false, message: "Method not allowed" });
      return;
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
    return;
  }
}
