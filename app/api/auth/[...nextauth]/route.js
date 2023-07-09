import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log({
    clientId: 
    clientSecret: 
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async seesion( { session }) {

    },
    async signIn( { profile }) {

    }


    
})

export { handler as GET, handler as POST }