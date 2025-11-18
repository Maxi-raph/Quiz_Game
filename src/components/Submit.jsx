import { useEffect } from "react"

const Submit = ({isClicked,setIsTrue,setScore, setQuestionNum, options}) => {

    const handleSubmit = ()=>{
     Object.entries(isClicked).map(([key,value])=>{     
      if (value) {
        if (options[key] == options.correct) {
            setIsTrue(prev=>({...prev,[key]:'true'}))
            setScore(prev=>prev+1) 
        }else{
             setIsTrue(prev=>({...prev,[key]:'false'}))          
        }
        setTimeout(() => {
             setQuestionNum(prev=>prev+1) 
        }, 1000);
      }
     })
    }
   

   
   return ( <div>
   <button className={`w-[90%] p-3 rounded-lg mb-4 text-lg cursor-pointer font-semibold border-gray-400 border-2  text-white bg-blue-400`} onClick={handleSubmit}>Submit Answer</button>
    </div> );
}
 
export default Submit;