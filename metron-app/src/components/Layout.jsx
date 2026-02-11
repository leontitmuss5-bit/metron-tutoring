import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Scroll to top on route change (instant to override CSS smooth-scroll)
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased">
            <Navbar />
            {/* Spacer for fixed navbar on non-home pages */}
            {!isHome && <div className="h-16 md:h-24" />}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
