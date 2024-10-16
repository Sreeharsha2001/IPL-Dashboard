import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import TeamMatches from './Components/TeamMatches'
import RandomPath from './Components/RandomPath'


const App = () => {
    return(
        <div className='app-bg-container'>
            <Router>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/teammatches/:id' element={<TeamMatches/>}/>
                  <Route path='*' element={<RandomPath/>}/>
                </Routes>
            </Router>
        </div>
    )   
}
export default App
