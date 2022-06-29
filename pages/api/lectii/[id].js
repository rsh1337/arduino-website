import dbConnect from "../../../lib/dbConnect";
import Lectii from "../../../models/Lectii";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

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