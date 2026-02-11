import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased">
            <Navbar />
            {/* Spacer for fixed navbar on non-home pages */}
            {!isHome && <div className="h-24" />}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
