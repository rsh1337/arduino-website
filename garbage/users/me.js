import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import auth from '../middleware/auth'

export const getServerSideProps = withSession(async function ({ req, res }) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
        try {
            // request.user is getting fetched from Middleware after token authentication
            const user = await User.findById(req.user.id);
            res.json(user);
          } catch (e) {
            res.send({ message: "Error in Fetching user" });
          }
      break;
    default:
      res.status(500).send("Server Error");
      break;
  }
}