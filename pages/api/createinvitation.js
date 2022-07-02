
import Invitation from "../../models/Invitation";
import { getSession } from "next-auth/react";
import dbConnect from "../../lib/dbConnect";

export default async function handler (req, res) {
  const { method } = req;
  const {invitation, createdBy} = req.body
  const session = await getSession({ req });
  await dbConnect();
  if (session) {
    switch (method) {
      case "POST":
        try {
            var invitationduplicateCheck = await Invitation.findOne({ invitation });
            if (invitationduplicateCheck) {
              console.log("Invitation Already Exists");
              return res.status(400).json({
                message: "Invitatia exista deja",
              });
            }
            var invitatie = new Invitation({
              invitation,
              createdBy
            })
          // const invitatie = await Invitation.create(req.body);
          await invitatie.save();
          return res.status(201).json({ msgsg: 'success' });
          // res.status(201).json({ success: true, data: invitatie });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(422).send("data_incomplete");
        break;
    }
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    res.status(401).json({
      message:
        "Unauthorized",
    });
  }
  res.end();
};