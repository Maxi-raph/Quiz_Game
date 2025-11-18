const Reset = ({setQuestionNum,setScore}) => {
  const handleReset = ()=>{
    setQuestionNum(1)
    setScore(0)
  }


  return ( <div>
           <button className={`w-[90%] p-3 rounded-lg mb-4 text-lg cursor-pointer font-semibold border-gray-400 border-2  text-white bg-blue-400`} onClick={handleReset}>Restart Quiz</button>
    </div> );
}
 
export default Reset;