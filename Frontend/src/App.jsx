import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Counter from './component/Counter'
// import Service1 from './Pages/Service1'
import UseState from './Hooks/UseState'
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
//import { BrowserRouter } from "react-router-dom";
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect';
import UseEffectApi from './Hooks/UseEffectApi';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import UseMemo from './Hooks/UseMemo';
import UseCallback from './Hooks/UseCallback'
import Service from './Pages/Service'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home name="Nageswari" />} />
        <Route path='/about' element={<About name="Nageswari" age={19} dept="CS&DS" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service1' element={<Service />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/hook' element={<Hook />} >
          <Route path='useState' element={<UseState />} />
          <Route path='useEffect' element={<UseEffect />} />
          <Route path='useEffectApi' element={<UseEffectApi />} />
          <Route path='useRef' element={<UseRef />} />
          <Route path='useReducer' element={<UseReducer />} />
          <Route path='useMemo' element={<UseMemo />} />
          <Route path='useCallback' element={<UseCallback />} />
        </Route>

      </Routes>
    </>
  )
}

export default App