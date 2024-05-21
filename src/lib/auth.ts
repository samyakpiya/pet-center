import NextAuth, { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import prisma from "./db";
import bcrypt from "bcrypt";

const config = {
  pages: {
    signIn: "/login",
  },

  providers: [
    credentials({
      async authorize(credentials) {
        // runs on login
        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          console.log("User not found");
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );

        if (!passwordsMatch) {
          console.log("Invalid credentials.");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized: ({ request }) => {
      // runs on every request with middleware
      const isTryingToAccessApp = request.nextUrl.pathname.includes("/app");

      if (isTryingToAccessApp) {
        return false;
      } else {
        return true;
      }
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn } = NextAuth(config);
