"use client";
import {signIn, signOut, useSession, SessionProvider} from "next-auth/react";


export default function Home(){
    return<SessionProvider>
        <RealHome/>
    </SessionProvider>

}

function RealHome(){
    const session = useSession();

    return (
        <div>
            {session.status === "authenticated" && <button onClick={() => signOut()}>LogOut</button> }

            {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button> }
        </div>
    )
}