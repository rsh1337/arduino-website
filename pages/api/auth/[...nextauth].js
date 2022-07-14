import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Admin from "../../../models/Admin";
import dbConnect from "../../../lib/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/admin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();
        const email = credentials.email;
        const password = credentials.password;
        const admin = await Admin.findOne({ email });
        const signinUser = async ({ password, admin }) => {
          if (!admin.password) {
            throw new Error("Scrie o parola");
          }
          const isMatch = await bcrypt.compare(password, admin.password);
          if (!isMatch) {
            throw new Error("Parola incorecta.");
          }
          return admin;
        };

        if (!admin) {
          throw new Error("Acest cont nu este inregistrat.");
        }
        if (admin) return signinUser({ password, admin });
      },
    }),
  ],
});
