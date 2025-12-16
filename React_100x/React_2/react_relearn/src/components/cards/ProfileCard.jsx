import ProfilePic from "../icons/ProfilePic";


export default function ProfileCard() {
    return (
        <>
            <div className="flex justify-center items-center h-50 bg-white rounded-2xl m-6">
                <ProfilePic size={170} />
            </div>
            <div className="h-30">
                <h1 className="text-center font-serif text-xl text-black ">Shubham Borkar</h1>
                <h1 className="text-center font-semibold text-gray-500 m-1">apexshubhu@gmail.com</h1>
                <h1 className="text-center font-semibold text-gray-500 m-1">9699955069</h1>
                <h1 className="text-center font-semibold text-gray-500 mt-4">Washim, India</h1>
            </div>
        </>
    )
}