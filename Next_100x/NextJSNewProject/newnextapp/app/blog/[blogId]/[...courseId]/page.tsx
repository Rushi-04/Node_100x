import { ReactNode } from "react";



export default async function ({params}: {params:ReactNode}) {
    const rest: any = await params;
    
    return (
        <div>
            Hi there: {JSON.stringify(rest.courseId)}
        </div>
    )
}