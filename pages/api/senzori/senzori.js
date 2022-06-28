import dbConnect from '../../../lib/dbConnect'
import Senzori from '../../../models/Senzori'

export default async function handler (req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const senzori = await Senzori.find({})
          res.status(200).json({ success: true, senzori: senzori })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }