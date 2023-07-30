const Card = ({id,name,status,image,gender}) => {
   
    return ( 
            <div className="flex md:w-[30vw] items-start gap-4 w-[70vw] h-52 border">
                <img className="h-full rounded-md " src={image} alt="avater" />
                <div className=" flex flex-col gap-2">
                    <h1>{name}</h1>
                    <div className="flex items-center justify-center gap-2">
                        <div className={status === "Alive"?"w-4 rounded-full h-4 bg-green-500":"w-4 rounded-full h-4 bg-red-500"}
                        ></div>
                        <p>status: {status}</p>
                    </div>
                    <p>gender: {gender}</p>
                </div>
            </div>
    );
}
 
export default Card;