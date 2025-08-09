import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import AnalysisPage from '@/components/pages/analysis'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AnalysisPage/>} path= "/"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
