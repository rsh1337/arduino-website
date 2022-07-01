import bcrypt from "bcryptjs";
import dbConnect from "../../lib/dbConnect";
import Admin from "../../models/Admin";
import Invitation from "../../models/Invitation";
export default async function handler(req, res) {
  const { method } = req;
  const { email, password, nume, invitation } = req.body;
  const saltRounds = 10;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        var userEmailCheck = await Admin.findOne({ email });
        if (userEmailCheck) {
          console.log("Email Already Exists");
          return res.status(400).json({
            message: "Emailul exista deja",
          });
        }
        var invitationDuplicateCheck = await Admin.findOne({ invitation });
        if (invitationDuplicateCheck) {
          console.log("Invitation already used");
          return res.status(400).json({
            message: "Invitatia a fost folosita.",
          });
        }
        var invitationExistCheck = await Invitation.findOne({ invitation });
        if (!invitationExistCheck) {
          console.log("Invitation Dosent Exist");
          return res.status(400).json({
            message: "Invitatie invalida.",
          });
        }
        var admin = new Admin({
          email,
          password,
          nume,
          invitation
        });
        if (!admin.password){
          console.log("No Password")
          return res.status(400).json({
            message: "Scrie o parola.",
          });
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        admin.password = await bcrypt.hashSync(password, salt);

        await admin.save();
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
