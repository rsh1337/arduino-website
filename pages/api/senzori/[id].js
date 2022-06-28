import dbConnect from "../../../lib/dbConnect";
import Senzori from "../../../models/Senzori";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

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
