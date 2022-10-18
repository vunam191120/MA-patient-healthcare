import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/noMatch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
