import OptionBox from "./OptionBox";
import Reset from "./Reset";
import Submit from "./Submit";
import { useState,useEffect } from "react";

const QuizBox = ({isClicked,setIsClicked,isTrue,setIsTrue,score,setScore, questionNum, setQuestionNum}) => {
   const optionsArr = Array.from({length:4}, (_,i)=> i+1)
   const questions = [
    '',
    'What is the capital of Brazil ?',
    'Which is the largest Planet in our solar system ?',
    'Which planet is known as the Red Planet ?',
    'Who painted the Mona Lisa ?',
    'What is the largest ocean on Earth ?',
    'Which country hosted the 2016 Summer Olympics ?',
    'What is the chemical symbol for gold ?',
    'Which language is the most spoken worldwide ?',
    'What is the smallest continent by land area ?',
    'Who was the first man to walk on the Moon ?'
    ]

    const optionsArrOfObjects = [
     {},
     {1: 'Rio de Janeiro',  2: 'Sao Paulo', 3: 'Brasilia', 4: 'Salvador', correct: 'Brasilia'},
     {1: 'Earth',  2: 'Saturn', 3: 'Jupiter', 4: 'Neptune', correct: 'Jupiter'},
     {1: 'Venus',  2: 'Jupiter', 3: 'Mars', 4: 'Mercury', correct: 'Mars'},
     {1: 'Leonardo da Vinci',  2: 'Vincent van Gogh', 3: 'Pablo Picasso', 4: 'Michael Angelo', correct: 'Leonardo da Vinci'},
     {1: 'Atlantic Ocean',  2: 'Pacific Ocean', 3: 'Indian Ocean', 4: 'Arctic Ocean', correct: 'Pacific Ocean'},
     {1: 'China',  2: 'Brazil', 3: 'Russia', 4: 'Japan', correct: 'Brazil'},
     {1: 'Ag',  2: 'Au', 3: 'Gd', 4: 'Go', correct: 'Au'},
     {1: 'English',  2: 'Mandarin Chinese', 3: 'Spanish', 4: 'Hindi', correct: 'Mandarin Chinese'},
     {1: 'Europe',  2: 'Australia', 3: 'Antarctica', 4: 'South America', correct: 'Australia'},
     {1: 'Neil Armstrong',  2: 'Buzz Aldrin', 3: 'Yuri Gagarin', 4: 'Michael Collins', correct: 'Neil Armstrong'}   
    ]  


    const [options,setOptions] = useState({
        1: 'Rio de Janeiro', 
        2: 'Sao Paulo',
        3: 'Brasilia',
        4: 'Salvador', 
        correct: 'Brasilia'})

    useEffect(()=>{
  const nextOptions = optionsArrOfObjects[questionNum];
     if (nextOptions) {
       setOptions(nextOptions);
      }
        setIsTrue({
            1: '',
            2: '',
            3: '',
            4: ''
        })
        setIsClicked({
            1: false,
            2: false,
            3: false,
            4: false
        })
    },[questionNum])
   
   return ( <div className="max-w-md mx-auto mt-24 mb-24 rounded-lg p-6 bg-white text-black text-center" >
  
    <h1 className="font-bold text-3xl mb-3">Quiz Game</h1>
        { questionNum < 11 ? <div>
     <p className="text-gray-600 text-xl font-semibold mb-3">Question {questionNum} of 10</p>
     <p className="text-2xl mb-3">{questions[questionNum]}</p>
      {optionsArr.map((num,i)=>{
       return(<OptionBox
         key={i}
         index={num}
         opt={options[num]}
         isClicked={isClicked}
         setIsClicked={setIsClicked}
         isTrue={isTrue}
         />)
      })}
      <Submit 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        score={score}
        setScore={setScore}
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        options={options}
        setOptions={setOptions}
      />
        </div>
     : <div>
        <p className="text-gray-600 text-2xl font-semibold mb-3">{score > 5? 'You Aced This Test!!!':'Do Better Next Time'}</p>
        <Reset
        setScore={setScore}
        setQuestionNum={setQuestionNum}
        />
     </div>
      }
      <p className="text-xl font-semibold mb-3">Score: {score} / 10</p>
    </div> );
}
 
export default QuizBox;