import dbConnect from '../../../lib/dbConnect'
import Proiecte from '../../../models/Proiecte'

export default async function handler (req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const proiecte = await Proiecte.find({})
          res.status(200).json({ success: true, proiecte: proiecte })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }