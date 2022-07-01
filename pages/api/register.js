import bcrypt from "bcryptjs";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
export default async function handler(req, res) {
    const { method } = req
    const { name, email, password } = req.body;
    const saltRounds = 10;
  
    await dbConnect()
  
    switch (method) {
      case 'POST':
        try {
            var userEmailCheck = await User.findOne({email});
            if (userEmailCheck) {
                console.log("Email Already Exists")
                return res.status(400).json({
                    message: "Email Already Exists"
                });
                
            }
            var user = new User({
              name,
              email,
              password,
            });
            const salt = bcrypt.genSaltSync(saltRounds);
            user.password = await bcrypt.hashSync(password, salt);

            await user.save();
          } catch (error) {
            return res.status(500).send(error);
          }
        break
      default:
        res.status(422).send('data_incomplete');
        break
    }
  }
