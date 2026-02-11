import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const isHome = location.pathname === '/'

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (!isHome) {
            setIsVisible(true)
            return
        }

        // On home page, show navbar after scrolling 100px
        setIsVisible(false)
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isHome])

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') {
            return 'text-primary-accent'
        }
        if (path !== '/' && location.pathname.startsWith(path)) {
            return 'text-primary-accent'
        }
        return 'text-text-light dark:text-text-dark hover:text-primary-accent dark:hover:text-primary-accent transition-colors'
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-[calc(100%+20px)] opacity-0 pointer-events-none'
            }`}
        >
            <div className="mt-3 md:mt-4 mx-3 inline-flex flex-col rounded-2xl bg-surface-light/85 dark:bg-background-dark/85 backdrop-blur-xl border border-border-light/50 dark:border-border-dark/50 shadow-lg shadow-black/[0.04] dark:shadow-black/30">
                <div className="px-5 lg:px-6">
                    <div className="flex items-center justify-between gap-6 md:gap-10 h-14 md:h-16">
                        {/* Logo - zoomed into the text portion of the square PNG */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="relative block h-7 w-[120px] md:h-8 md:w-[140px] overflow-hidden">
                                <img
                                    src="/metronblack.png"
                                    alt="métron"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[300px] max-w-none dark:hidden"
                                />
                                <img
                                    src="/metronwhite.png"
                                    alt="métron"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[300px] max-w-none hidden dark:block"
                                />
                            </Link>
                        </div>

                        {/* Desktop nav */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-7">
                                <Link to="/" className={`px-1 py-2 text-sm font-medium ${isActive('/')}`}>Home</Link>
                                <Link to="/tutors" className={`px-1 py-2 text-sm font-medium ${isActive('/tutors')}`}>Tutors</Link>
                                <Link to="/pricing" className={`px-1 py-2 text-sm font-medium ${isActive('/pricing')}`}>Pricing</Link>
                                <Link to="#" className="bg-primary text-white hover:bg-black/80 px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">Book Free Consultation</Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-primary hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none transition-colors"
                            >
                                <span className="sr-only">Open main menu</span>
                                <span className="material-symbols-outlined text-[22px]">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-4 pt-1 pb-4 space-y-1 border-t border-border-light/30 dark:border-border-dark/30">
                        <Link to="/" className="text-text-light dark:text-text-dark hover:text-primary-accent block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Home</Link>
                        <Link to="/tutors" className="text-text-light dark:text-text-dark hover:text-primary-accent block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Tutors</Link>
                        <Link to="/pricing" className="text-text-light dark:text-text-dark hover:text-primary-accent block px-3 py-2.5 rounded-lg text-base font-medium transition-colors">Pricing</Link>
                        <Link to="#" className="block mx-3 mt-2 text-center bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium">Book Free Consultation</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
