import { HashRouter, Route, Routes } from 'react-router-dom';
import QuestionBuilder from './components/QuestionBuilder';
import Exam from './components/Exam';
 




function App() { 
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<QuestionBuilder />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
