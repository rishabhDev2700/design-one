import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
