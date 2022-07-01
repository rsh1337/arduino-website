import bcrypt from "bcryptjs";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import Invitation from "../../models/Invitation";
export default async function handler(req, res) {
  const { method } = req;
  const { email, password, nume, invitation } = req.body;
  const saltRounds = 10;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        var userEmailCheck = await User.findOne({ email });
        if (userEmailCheck) {
          console.log("Email Already Exists");
          return res.status(400).json({
            message: "Email Already Exists",
          });
        }
        var invitationDuplicateCheck = await User.findOne({ invitation });
        if (invitationDuplicateCheck) {
          console.log("Invitation already used");
          return res.status(400).json({
            message: "Invitation already used",
          });
        }
        var invitationExistCheck = await Invitation.findOne({ invitation });
        if (!invitationExistCheck) {
          console.log("Invitation Dosent Exist");
          return res.status(400).json({
            message: "Invitation Dosent Exist",
          });
        }
        var user = new User({
          email,
          password,
          nume,
          invitation
        });
        const salt = bcrypt.genSaltSync(saltRounds);
        user.password = await bcrypt.hashSync(password, salt);

        await user.save();
        return res.status(200).json({ msgsg: 'success' });
      } catch (error) {
        return res.status(500).send(error);
      }
      break;
    default:
      res.status(422).send("data_incomplete");
      break;
  }
}
