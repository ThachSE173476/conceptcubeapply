import './assets/styles/index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import DataBinding from './pages/DataBinding'
import ModalPage from './pages/ModalPage'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/databinding" element={<DataBinding/>}/>
          <Route path="/modal" element={<ModalPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
