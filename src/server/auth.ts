/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getServerSession } from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import githubProvider from 'next-auth/providers/github'
import googleProvider from 'next-auth/providers/google'
import { MongoClient } from 'mongodb'
import { MongoDBAdapter, type MongoDBAdapterOptions } from '@auth/mongodb-adapter'
import type { DefaultSession } from 'next-auth'
import { type GithubProfile } from 'next-auth/providers/github'
import { type GoogleProfile } from 'next-auth/providers/google'

import { env } from '@/env'

export type IRole = 'USER' | 'MEMBER' | 'ADMIN'
export type IMembership = 'FREE' | 'PAID' | 'ENTERPRISE'

declare module 'next-auth/jwt' {
  interface JWT {
    role: IRole
    membership: IMembership
  }
}
declare module 'next-auth' {
  interface Profile extends GithubProfile {
    user: {
      role: IRole
      id: string
      membership: IMembership
    }
  }
  interface Profile extends GoogleProfile {
    user: {
      role: IRole
      id: string
      membership: IMembership
    }
  }
  interface Session extends DefaultSession {
    user: {
      role: IRole
      name: string
      email: string
      image: string
      id: string
      membership: IMembership

    }
  }
}
const options: MongoDBAdapterOptions = {}
const client: MongoClient | undefined = new MongoClient(env.MONGODB_URI)

const clientPromise: Promise<MongoClient> = client.connect()

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, options),
  debug: true,
  session: {
    strategy: 'jwt',
  },
  providers: [
    githubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile: async ({ email, name, avatar_url, id, }: GithubProfile) => {
        return {
          role: email == 'jrohila55@gmail.com' ? 'ADMIN' : "USER",
          name: name,
          email: email,
          image: avatar_url,
          id: id.toString(),
          membership: email == 'jrohila55@gmail.com' ? 'PAID' : "FREE"
        }
      },
    }),
    googleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile: async ({ email, name, sub, picture, }: GoogleProfile) => {
        return {
          role: email == 'jrohila55@gmail.com' ? 'ADMIN' : "USER",
          name: name,
          email: email,
          image: picture,
          id: sub,
          membership: email == 'jrohila55@gmail.com' ? 'PAID' : "FREE"
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, profile }) => {
      if (profile) {
        token.role = profile?.role
        token.membership = profile?.membership
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session) {
        session.user.role = token?.role
        session.user.membership = token?.membership
      }
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
