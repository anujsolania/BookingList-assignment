"use client"
export default function Role() {
    return (
        <div className="flex bg-[#161B22] h-screen w-screen" >
            <div className="flex w-screen justify-center items-center" >
                <div className="flex flex-col gap-5" >
                <input type="text" placeholder="Enter your role"
            className="border rounded-xl p-4 bg-white w-full font-semibold"></input>
            <div className="flex justify-center" >
                 <button className="text-white bg-green-600 w-[80%] py-2 rounded-lg font-semibold" >CONFIRM ROLE</button>
            </div>
                </div>
            </div>

        </div>
    )
}