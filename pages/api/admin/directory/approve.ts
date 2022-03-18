import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import connect from "utils/connectDb";
import Directory from "models/Directory";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  // Checking the body
  if (!req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a directory id" });

  await connect();
  try {
    const directory = await Directory.findById(req.query.id);
    if (!directory) return res.status(404).json({ success: false, error: "Directory not found" });

    directory.isApproved = true;
    directory.approvedAt = Date.now();
    await directory.save();
    return res.status(200).json({ success: true, directory });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export default withProtect(withRoles("Admin", "Product Admin")(handler));
