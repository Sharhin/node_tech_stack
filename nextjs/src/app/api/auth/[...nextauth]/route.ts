import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import authOptions from "./auth";
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

