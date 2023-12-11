import { getServerSession } from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import githubProvider, { type GithubProfile } from 'next-auth/providers/github'
import googleProvider, { type GoogleProfile } from 'next-auth/providers/google'
import { MongoClient } from 'mongodb'
import { MongoDBAdapter, type MongoDBAdapterOptions } from '@auth/mongodb-adapter'

import { env } from '@/env'
import { type Adapter } from 'next-auth/adapters'

const options: MongoDBAdapterOptions = {}
const client: MongoClient | undefined = new MongoClient(env.MONGODB_URI)

const clientPromise: Promise<MongoClient> = client.connect()

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, options) as Adapter,
  debug: true,
  session: {
    strategy: 'jwt',
  },
  providers: [
    githubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile(profile: GithubProfile) {
        return {
          ...profile,
          role: profile.email === 'jrohila55@gmail.com' ? 'ADMIN' : 'USER',
          id: profile.id.toString(),
          image: profile.avatar_url,
          name: profile.name,
        }
      },
    }),
    googleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          role: profile.email === 'jrohila55@gmail.com' ? 'ADMIN' : 'USER',
          id: profile.sub,
          image: profile.picture,
          name: profile.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
    newUser: '/auth/new',
  },
}

export const getServerAuthSession = () => getServerSession(authOptions)
