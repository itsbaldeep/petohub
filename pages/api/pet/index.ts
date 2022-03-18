import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import Pet from "models/Pet";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    // Getting a single pet by id
    if (req.query.id) {
      const pet = await Pet.findById(req.query.id).populate({
        path: "categories",
        populate: { path: "docs" },
      });
      if (!pet) return res.status(404).json({ success: false, error: "Pet not found" });
      return res.status(200).json({ success: true, pet });
    }
    // Getting all pets
    const pets = await Pet.find().populate({ path: "categories", populate: { path: "docs" } });
    return res.status(200).json({ success: true, pets });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default handler;
