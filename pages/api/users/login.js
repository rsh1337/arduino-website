import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../../../middleware/auth";

export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;
  const saltRounds = 10;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        var user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({
            msg: "User Not Exist",
          });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !",
          });

        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
            payload,
            "randomString",
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token
              });
            }
          );
      } catch (error) {
        return res.status(500).send(error.message);
      }
      break;
    default:
      res.status(500).send("Server Error");
      break;
  }
}
