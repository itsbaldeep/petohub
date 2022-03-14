import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import User from "models/User";
import connect from "utils/connectDb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ success: false, error: "Method not allowed" });
  await connect();

  // Verifying token in query
  if (!req.query.token)
    return res.status(400).json({ success: false, error: "Please provide a token" });

  // Hashing the token
  const token = crypto
    .createHash("sha256")
    .update(req.query.token as string)
    .digest("hex");

  try {
    // Finding the user based on the token
    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).json({ success: false, error: "Invalid token" });

    // Verifying the account
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verifiedAt = Date.now();
    await user.save();

    // Returning a success message
    return res.status(200).json({
      success: true,
      token: user.getSignedToken(),
      user,
    });
  } catch (error) {
    // Handling errors
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

export default handler;