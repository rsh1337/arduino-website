import dbConnect from '../../lib/dbConnect'
import Lectii from '../../models/Lectii'

export default async function handler (req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const lectii = await Lectii.find({})
          res.status(200).json({ success: true, lectii: lectii })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }