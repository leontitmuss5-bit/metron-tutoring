import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tutors from './pages/Tutors'
import TutorProfile from './pages/TutorProfile'
import Pricing from './pages/Pricing'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="tutors" element={<Tutors />} />
                <Route path="tutors/james-sterling" element={<TutorProfile />} />
                <Route path="pricing" element={<Pricing />} />
            </Route>
        </Routes>
    )
}

export default App
