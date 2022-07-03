import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";
import Senzori from "../../../models/Senzori";

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
          const senzori = await Senzori.findById(id);
          if (!senzori) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: senzori });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
        case "PUT":
          try {
            const updateSenzor = await Senzori.findByIdAndUpdate(id, req.body, {
              new: true,
              runValidators: true,
            });
            if (!updateSenzor) {
              return res.status(400).json({ message: 'Senzorul nu a putut fi editata' });
            }
            res.status(200).json({ messagee: 'success', data: updateSenzor });
          } catch (error) {
            res.status(400).json({ message: 'Senzorul nu a putut fi editata' });
          }
          break;
      case "DELETE":
        try {
          const deleteSenzor = await Senzori.deleteOne({ _id: id });
          if (!deleteSenzor) {
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
          const senzori = await Senzori.findById(id);
          if (!senzori) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: senzori });
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
