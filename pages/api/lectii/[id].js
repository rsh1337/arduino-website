import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";
import Lectii from "../../../models/Lectii";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();
  if (session) {
    switch (method) {
      case "GET":
        try {
          const lectii = await Lectii.findById(id);
          if (!lectii) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: lectii });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "DELETE":
        try {
          const deletelectie = await Lectii.deleteOne({ _id: id });
          if (!deletelectie) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    switch (method) {
      case "GET":
        try {
          const lectii = await Lectii.findById(id);
          if (!lectii) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: lectii });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
}
