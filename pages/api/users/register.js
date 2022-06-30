import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import bcrypt from 'bcryptjs'
export default async function handler (req, res) {
    const { method } = req
    const { name, email, password } = req.body;
    const saltRounds = 10;
  
    await dbConnect()
  
    switch (method) {
      case 'POST':
        try {
            const salt = bcrypt.genSaltSync(saltRounds);
            const passwordhash = bcrypt.hashSync(password, salt);
            var userEmailCheck = await User.findOne({email});
            if (userEmailCheck) {
                return res.status(400).json({
                    msg: "Email Already Exists"
                });
            }
            var user = new User({
              name,
              email,
              password: passwordhash,
            });
            const usercreateaccount = await user.save();
            
            return res.status(200).send(usercreateaccount);
          } catch (error) {
            return res.status(500).send(error.message);
          }
        break
      default:
        res.status(422).send('data_incomplete');
        break
    }
  }