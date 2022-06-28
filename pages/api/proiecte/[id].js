import dbConnect from "../../../lib/dbConnect";
import Proiecte from "../../../models/Proiecte";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

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