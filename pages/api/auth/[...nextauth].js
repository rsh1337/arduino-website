import NextAuth from "next-auth";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from "../../../lib/mongodb"
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        const signinUser = async ({ password, user }) => {
          if (!user.password) {
            throw new Error("Please enter password");
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new Error("Password Incorrect.");
          }
          return user;
        };

        if (!user) {
          throw new Error("You haven't registered yet");
        }
        if (user) return signinUser({ password, user });
      },
    }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET,
    //   }),
  ],
});
