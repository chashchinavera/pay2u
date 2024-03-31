import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';

function App() {
  return (
    <div className="relative w-[375px] h-[100%] flex flex-col mx-auto">

      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
