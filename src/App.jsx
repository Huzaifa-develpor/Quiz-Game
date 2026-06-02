import './App.css';
import StartQuiz from './components/StartQuiz';
import StartScreen from './components/StartScreen';
import { useState } from 'react';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <>
      {quizStarted ? <StartQuiz /> : <StartScreen onStartClick={handleStart} />}
    </>
  );
}

export default App;
