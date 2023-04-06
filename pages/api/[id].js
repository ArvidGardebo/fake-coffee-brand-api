import clientPromise from "../../lib/mongodb";

export default async function getbyId(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db("fake_coffee");

  try {
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

    if (req.method === "PUT") {
      const query = {
        id: parseInt(id),
      };
      const update = {};
      name ? (update.name = name) : "";
      description ? (update.description = description) : "";
      price ? (update.price = price) : "";
      region ? (update.region = region) : "";
      weight ? (update.weight = weight) : "";
      flavor_profile ? (update.flavor_profile = flavor_profile) : "";
      grind_option ? (update.grind_option = grind_option) : "";
      roast_level ? (update.roast_level = roast_level) : "";
      const result = await db.collection("coffee").findOne(query);

      if (!result) {
        res.status(404).json({
          message: "Coffee not found",
        });
        return;
      } else {
        const updateCoffee = {
          ...update,
        };

        res.status(200).json({
          success: true,
          message: "Update successful",
          update: updateCoffee,
        });
      }
      //Update
    } else if (req.method === "GET") {
      const query = { id: parseInt(id) };
      // Get one by id
      if (query) {
        const data = await db.collection("coffee").find(query).toArray();
        res.status(200).json(data);
      }
    } else if (req.method === "PATCH") {
      const query = {
        id: parseInt(id),
      };
      const update = {};
      name ? (update.name = name) : null;
      description ? (update.description = description) : null;
      price ? (update.price = price) : null;
      region ? (update.region = region) : null;
      weight ? (update.weight = weight) : null;
      flavor_profile ? (update.flavor_profile = flavor_profile) : "";
      grind_option ? (update.grind_option = grind_option) : "";
      roast_level ? (update.roast_level = roast_level) : "";
      const result = await db.collection("coffee").find(query).toArray();

      if (result.length === 0) {
        res.status(404).json({
          message: "No coffee found that matches",
        });
        return;
      } else {
        const patchCoffee = result.map((coffee) => {
          const updatedCoffe = { ...coffee };
          Object.keys(update).forEach((key) => {
            updatedCoffe[key] = update[key];
          });
          return updatedCoffe;
        });

        res.status(200).json({
          success: true,
          message: "Coffee updated successfully",
          update: patchCoffee,
        });
      }
      //Find one and Delete
    } else if (req.method === "DELETE") {
      const query = { id: parseInt(id) };
      const original = await db.collection("coffee").findOne(query);

      if (!original) {
        res.status(404).json({
          message: "Coffee not found",
        });
        return;
      } else {
        const deleteCoffee = JSON.parse(JSON.stringify(original));
        await db.collection("coffee").deleteOne(deleteCoffee);

        res.status(200).json({
          success: true,
          message: "Coffee has been deleted",
          coffee: deleteCoffee,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Is it a valid JSON object you sent in?" });
  }
}
