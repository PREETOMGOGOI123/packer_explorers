import {Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home.jsx'
import Admin from './pages/admin.jsx'
import {StrictMode} from "react";


const App = () => {

    console.log("ENV TEST:", import.meta.env.VITE_SUPABASE_URL);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App