import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler (req, res) {
    const { method } = req
    const { name, email, password } = req.body;
    const saltRounds = 10;
  
    await dbConnect()
  
    switch (method) {
      case 'POST':
        try {
            var userEmailCheck = await User.findOne({email});
            if (userEmailCheck) {
                return res.status(400).json({
                    msg: "Email Already Exists"
                });
            }
            var user = new User({
              name,
              email,
              password,
            });
            const salt = bcrypt.genSaltSync(saltRounds);
            user.password = await bcrypt.hashSync(password, salt);

            const useraccountcreated = await user.save();

            const payload = {
              user: {
                id: user.id
              }
            };
            jwt.sign(
              payload,
              "randomString",
              {
                expiresIn: 10000
              },
              (err, token) => {
                if (err) throw err;
                return res.status(200).json({
                  token, useraccountcreated
                });
              }
            );
          } catch (error) {
            return res.status(500).send(error.message);
          }
        break
      default:
        res.status(422).send('data_incomplete');
        break
    }
  }