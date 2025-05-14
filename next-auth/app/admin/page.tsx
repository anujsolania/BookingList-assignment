"use client"
import { useState } from "react"

export default function Admin() {
    const [newfirstname,setnewfirstname] = useState("")
    const [newlastname,setnewlastname] = useState("")
    const[newemail,setnewemail] = useState("")
    const[newpassword,setnewpassword] = useState("")

    // const {setfirstname,setlastname} = useContext(MyContext)

    return (
        // style={{right: showupdateinfo ? "0px" : "-100vw"}} 
        <div className="h-screen w-screen fixed flex justify-center items-center backdrop-blur-xs transition-all duration-1000 bg-[#161B22]" >
            <div className="h-fit w-fit sm:w-90 flex flex-col justify-center items-center border border-black rounded-lg p-6 bg-white/90" >

                <div className="w-full flex " >
                    {/* onClick={() => {setshowupdateinfo(false)}} */}
                <i className="ri-arrow-right-line border rounded p-1.5"  ></i>
                </div>
                
                <div className="w-1/2 sm:w-full flex flex-col justify-center items-center gap-8" >
                <h1 className="font-semibold text-2xl" >Form details </h1>
                <p className="" >Enter the following fields</p>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter firstname"
                value={newfirstname} onChange={(e) => {setnewfirstname(e.target.value)}} ></input>
                
                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter address"
                value={newlastname} onChange={(e) => {setnewlastname(e.target.value)}} ></input>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter PIN"
                value={newemail} onChange={(e) => {setnewemail(e.target.value)}} ></input>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter Phone number"
                value={newpassword} onChange={(e) => {setnewpassword(e.target.value)}} ></input>

                <button onClick={async ()=> { 
                try {
                    // const token = localStorage.getItem("token")
                    // const response = await axios.patch(`${import.meta.env.VITE_URL}/api/v1/user/updateinfo`,{
                    //     newfirstname,
                    //     newlastname,
                    //     newemail,
                    //     newpassword
                    // },{
                    //     headers: {
                    //         Authorization: token
                    //     }
                    // })
                    // toast.success(response.data.mssg)

                    // if (newfirstname) { setfirstname(newfirstname), setnewfirstname("") }
                    // if (newlastname) { setlastname(newlastname), setnewlastname("") }


                } catch (error) {
                    // toast.error(error.response.data.error)
                    }

                }} className="border bg-black text-white rounded border-black w-fit p-[2%]"  >Submit</button>
                </div>
                
            </div>
        </div>
    )
}