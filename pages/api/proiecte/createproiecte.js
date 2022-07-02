
import Proiecte from "../../../models/Proiecte";
import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";

export default async function handler (req, res)  {
  const { method } = req;
  const session = await getSession({ req });
  await dbConnect();
  if (session) {
    switch (method) {
      case "POST":
        try {
          const proiecte = await Proiecte.create(req.body);
          res.status(201).json({ messagee: "success", data: proiecte });
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