import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";
import Proiecte from "../../../models/Proiecte";

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
          const proiecte = await Proiecte.findById(id);
          if (!proiecte) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: proiecte });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
        case "PUT":
          try {
            const updateProiect = await Proiecte.findByIdAndUpdate(id, req.body, {
              new: true,
              runValidators: true,
            });
            if (!updateProiect) {
              return res.status(400).json({ message: 'Proiectul nu a putut fi editata' });
            }
            res.status(200).json({ messagee: 'success', data: updateProiect });
          } catch (error) {
            res.status(400).json({ message: 'Proiectul nu a putut fi editata' });
          }
          break;
      case "DELETE":
        try {
          const deleteproiect = await Proiecte.deleteOne({ _id: id });
          if (!deleteproiect) {
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
          const proiecte = await Proiecte.findById(id);
          if (!proiecte) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: proiecte });
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
