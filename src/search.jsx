import { useEffect, useState } from "react"

const Search = ({setFilteredItemState,respanse}) => {
    let [inputUser,setUserInput]=useState("");

    useEffect(()=>{
        if(inputUser.length>0){
            console.log(inputUser);
            // setFilteredItemState(inputUser)
        }
        
        
    },[inputUser])

    let aliveFillterHandler=()=>{
        // fillter()
    }
    let daedFillterHandler=()=>{
        // fillter()
    }
    let changeHandler=(e)=>{
        setUserInput(
            respanse.results.filter(item=>item.name.includes(e.target.value))
        );
    }
    return ( 
    <div className="flex items-center justify-center gap-4 w-full mt-10">
        <input onChange={changeHandler} placeholder="char....." className="py-2 px-4 border outline-none rounded-md " type="text" />
        <div onClick={aliveFillterHandler} className=" bg-red-500 rounded-full w-4 h-4"></div>
        <div onClick={daedFillterHandler} className=" bg-green-500 rounded-full w-4 h-4"></div>
    </div> );
}
 
export default Search;