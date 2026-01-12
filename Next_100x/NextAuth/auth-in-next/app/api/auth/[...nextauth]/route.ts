import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: 
    [
        CredentialsProvider({
        name: "email",
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
        username: { label: "Username", type: "text", placeholder: "rushi@gmail.com" },
        password: { label: "Password", type: "password" }
        },

        async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        
        const user = {
            id: "1",
            username: "Rishi",
            password: "rishi123"
        }

        if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
        } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        }
        }),

        GoogleProvider({
            clientId: "",
            clientSecret: ""
        }),

        GithubProvider({
            clientId: "",
            clientSecret: ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export {handler as GET, handler as POST};