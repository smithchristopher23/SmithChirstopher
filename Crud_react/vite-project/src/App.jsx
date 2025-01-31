import {BrowserRouter, Route, Routees} from 'react-router-dom'
import Home from './Home'
import Regiok from './Regiok'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/regiok" element={<Regiok/>}/>
      </Routes>
            </BrowserRouter>
    </div>
  )


}

export default App
