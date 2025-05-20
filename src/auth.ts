import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constants";
// import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const respones = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            ...JSON_HEADER,
          },
        });

        const payload: APIResponse<LoginResponse> = await respones.json();
        console.log("====================================");
        console.log("payload", payload);
        console.log("====================================");

        if ("code" in payload) {
          throw new Error(payload.message);
        } //becuse error inegsest in return backend

        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),

    // Google
    GoogleProvider({
      clientId: process.env.GOOGEL_CLIENT_ID!,
      clientSecret: process.env.GOOGEL_CLIENT_SECRET!,
    }),

    // Github
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    // Twitter
    GitHubProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    jwt: ({ token, user, profile }) => {
      if (profile) {
        token.user = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email || "",
          _id: "",
          createdAt: "",
          isVerified: profile.email_verified,
          phone: "",
          role: "",
          username: "",
          picture: profile.picture,
        };
      } else if (user) {
        token.token = user.token;
        token.user = user.user;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      return session;
    },
  },
};
