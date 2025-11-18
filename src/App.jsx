import './App.css'
import QuizBox from './components/QuizBox';
import { useState } from 'react';

const App = () => {
  const [isClicked,setIsClicked] = useState({
  1: false,
  2: false,
  3: false,
  4: false
 })
   const [isTrue,setIsTrue] = useState({
  1: '',
  2: '',
  3: '',
  4: ''
 })
 
 const [score,setScore] = useState(0)
 const [questionNum,setQuestionNum] = useState(1)


  return ( <div>
    <QuizBox 
    isClicked={isClicked}
    setIsClicked={setIsClicked}
    isTrue={isTrue}
    setIsTrue={setIsTrue}
    score={score}
    setScore={setScore}
    questionNum={questionNum}
    setQuestionNum={setQuestionNum}
    />
  </div> );
}
 
export default App;