const OptionBox = ({opt,index,isClicked,setIsClicked,isTrue}) => {
    
    const handleClick = (i)=>{
    const newObj = { 
        1: false,
        2: false,
        3: false,
        4: false
    }
     newObj[i] = true
        setIsClicked(newObj)
    }


    return ( <div>
        <button className={`w-[90%] p-3 rounded-lg mb-4 text-lg cursor-pointer font-semibold border-gray-300 border-2   ${isClicked[index]?'bg-blue-400 text-white':''} ${isTrue[index] == 'true'?'bg-green-500 text-white':isTrue[index] == 'false'?'bg-red-500 text-white':''}`} onClick={()=>handleClick(index)}>{opt}</button>
    </div> );
}
 
export default OptionBox;