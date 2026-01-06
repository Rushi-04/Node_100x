// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react"


// export default function User () {

//     interface UserData {
//         name: string,
//         email: string,
//         address: {
//             city: string,
//             state: string,
//             houseNumber: string
//   }
//     }

//     const [data, setData] = useState<UserData>(); 
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//     }, [])

//     if(loading){
//         return 
//         <div>
//             loading...
//         </div>  
//     }

//      return (
//     <div className="flex flex-col justify-center h-screen">
//         <div className="flex justify-center">
//             <div className="border p-8 rounded">
//                 <div>
//                     Name: {data?.name}
//                 </div>
                
//                 {data?.email}
//             </div>
//         </div>
//     </div>
//   );
// }

import axios from "axios";


export default async function UserData() {

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    // Simulating late behaviour
    // await new Promise(r => setTimeout(r, 5000));

    const data = response.data;


    return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
  ); 
}