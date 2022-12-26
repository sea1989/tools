import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/home-page'

import { Footer } from './components/footer';
import { Header } from './components/header'


function App() {
  return (

    <BrowserRouter>

      <div className='App'>

        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;