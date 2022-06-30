import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth"

const signinUser = async ({ password, user }) => {
    if (!user.password) {
      throw new Error("Please enter password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Password Incorrect.");
    }
    return user;
  }

export default NextAuth({
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
          if (!user) {
            throw new Error("You haven't registered yet");
          }
          if (user) return signinUser({ password, user });
        },
      })
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user, email, password }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    }
  }
})
