import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const topTutors = [
    {
        name: 'Patrick Jones',
        score: '45/45',
        atar: '99.95',
        type: 'IB',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsnGZe7jy1vIktoATOBHkl9y98fmx9VxFtH16LBzkBv1lBcnGmrEnS-7OLsKt-LVNz0GZ5FfJ5sHE5Ecju-HZy6S4S4mSeFGAFlAC0CF2m-YNjM26SNCrbAj-6-zafFx0CpE2ha468KvISU5YrY6bmz1Byv1Tf_FuI6ac07IlSzXk736jmcflmyvUhYAD3LSQdF5Ch1V7qsu17ZxNtSFEdnovHvgdVupHL_r2tIiVEUYNCa5Y8-N1FyFfatI7aXU8FfioCgeIBiDc',
    },
    {
        name: 'Luka Vanezis',
        score: '44/45',
        atar: '99.70',
        type: 'IB',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDohLntbdhekpNh8gSgRuKBUavGJW8NM2o60886TX7NuxncwDgOuMroungf_YMjEyiNUvD6Tkc7_UnLFcINrTQnL32xtQacdCBb1peR7SaGflSoaAE045xRblZh44YnEfpOIJ41oNMP9jsU4s7nvqoDNwKKH61Z9QQznXxhATR2qRInsaaJUVTlvm10NniegMx_MqwVOP3rGi_JdbouEJVsceTqA3DjEIIqnKhi_7J908TgjzaHjZBB4pSpc-FTo6HFowmNJrKOjZI',
    },
    {
        name: 'Dan Beretta',
        score: '99.5',
        atar: '99.50',
        type: 'HSC',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsnGZe7jy1vIktoATOBHkl9y98fmx9VxFtH16LBzkBv1lBcnGmrEnS-7OLsKt-LVNz0GZ5FfJ5sHE5Ecju-HZy6S4S4mSeFGAFlAC0CF2m-YNjM26SNCrbAj-6-zafFx0CpE2ha468KvISU5YrY6bmz1Byv1Tf_FuI6ac07IlSzXk736jmcflmyvUhYAD3LSQdF5Ch1V7qsu17ZxNtSFEdnovHvgdVupHL_r2tIiVEUYNCa5Y8-N1FyFfatI7aXU8FfioCgeIBiDc',
    },
    {
        name: 'Hugh Pockley',
        score: '43/45',
        atar: '99.35',
        type: 'IB',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7D5JjHjZgkRroYCS2y0rbOvujiFDJs7ZM5xNipKXq93M49fW5DqgaAEVJx5LoByM60M0rSjczAwEaZKRGN-7LUX8x1_T9ZHFtafdQmb0urtEiZFbwWTxSw5GRTCpeyAlM48zy2lP05pEEO5NgbVzeit8-FBpt80FQFG2D4miBKZzMWGHG5ieReZWYej1eh-qy7ElNKgq5M_Vq1JFxetIfWjPbZObJmlZj4_2UHEpVTIeUGI6YRR3O4vGpZUx59II9itAYIn3Kphs',
    },
    {
        name: 'William Hardy',
        score: '43/45',
        atar: '99.35',
        type: 'IB',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB0uQgOcBsxcwrVKufQgAktIsz_uMl1ed_aWulmESPx9Y06KXLcRCzhhri-krDuhwkpfdFdb_8ZxTpxabgZIyo8RiOi-X0rSNce4U44vIqPiqXHf3ifj45-bsd5eSHPhtanRMgmGnNnOahFesBVuENqNNMd-i-UGJ_a27um0ewavlhdqpymJAYTm7TdzWPI0bUkPSCXN5we4Jrc9GuXKVt-b2_E4C7jOMIXYdj6ljH_Y1_dTuCGVnN3J_MsdMuiCBRG1rE8qn8yXw',
    },
]

const subjects = {
    ib: [
        'Mathematics AA HL/SL',
        'Mathematics AI HL/SL',
        'Physics HL/SL',
        'Chemistry HL/SL',
        'Biology HL/SL',
        'Economics HL/SL',
        'English A Literature',
        'English A Language & Literature',
        'History HL/SL',
        'Business Management',
    ],
    hsc: [
        'Mathematics Advanced',
        'Mathematics Extension 1',
        'Mathematics Extension 2',
        'Physics',
        'Chemistry',
        'Biology',
        'Economics',
        'English Advanced',
        'English Extension 1',
        'Business Studies',
    ],
}

const heroImages = ['/founders.png', '/hero-sports.png']

export default function Home() {
    const [scrollY, setScrollY] = useState(0)
    const heroRef = useRef(null)
    const [heroHeight, setHeroHeight] = useState(1000)
    const [currentImage, setCurrentImage] = useState(0)

    // Image slideshow timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const updateHeight = () => {
            if (heroRef.current) {
                setHeroHeight(heroRef.current.offsetHeight)
            }
        }

        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY)
                    ticking = false
                })
                ticking = true
            }
        }

        updateHeight()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', updateHeight)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    const heroProgress = Math.min(scrollY / heroHeight, 1)

    const scrollToContent = () => {
        if (heroRef.current) {
            window.scrollTo({ top: heroRef.current.offsetHeight, behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* ===== FULL-SCREEN HERO (16:9 laptop ratio) ===== */}
            <section
                ref={heroRef}
                className="relative w-full min-h-[70vh] md:min-h-0 md:aspect-video overflow-hidden bg-black"
            >
                {/* Background images with crossfade + parallax + blur */}
                {heroImages.map((src, i) => (
                    <div
                        key={src}
                        className="absolute inset-[-20px] will-change-transform transition-opacity duration-[1500ms] ease-in-out"
                        style={{
                            transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + heroProgress * 0.06})`,
                            filter: 'blur(6px)',
                            opacity: currentImage === i ? 1 : 0,
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                {/* Centered landing logo */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
                    style={{
                        opacity: Math.max(0, 1 - heroProgress * 2.5),
                        transform: `translate3d(0, ${-scrollY * 0.15}px, 0) scale(${1 + heroProgress * 0.2})`,
                    }}
                >
                    <img
                        src="/metronlanding.png"
                        alt="métron — elite IB and HSC mentoring, est. 2026"
                        className="w-[400px] md:w-[560px] lg:w-[720px] max-w-[80vw] select-none"
                        draggable="false"
                    />
                </div>

                {/* Scroll indicator */}
                <button
                    onClick={scrollToContent}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer group focus:outline-none animate-bounce-gentle"
                    style={{ opacity: Math.max(0, 1 - heroProgress * 5) }}
                    aria-label="Scroll down"
                >
                    <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </section>

            {/* ===== STATS + CTA ===== */}
            <section className="py-14 md:py-28 bg-background-light dark:bg-background-dark">
                <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 md:gap-12 mb-10 md:mb-14">
                        <div className="text-center">
                            <p className="text-3xl md:text-6xl font-serif font-medium text-primary dark:text-white tracking-tight">99+</p>
                            <p className="mt-1 md:mt-2 text-[10px] md:text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-semibold">Average ATAR</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-6xl font-serif font-medium text-primary dark:text-white tracking-tight">44+</p>
                            <p className="mt-1 md:mt-2 text-[10px] md:text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-semibold">Average IBAS</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-6xl font-serif font-medium text-primary-accent tracking-tight">Top</p>
                            <p className="mt-1 md:mt-2 text-[10px] md:text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-semibold">State Rankers</p>
                        </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                        <Link to="#" className="w-full sm:w-auto text-center px-8 md:px-10 py-3.5 md:py-4 bg-primary text-white rounded-full font-medium hover:bg-black transition-all shadow-lg text-xs md:text-sm uppercase tracking-widest">
                            Book a Free Consultation
                        </Link>
                        <Link to="/tutors" className="w-full sm:w-auto text-center px-8 md:px-10 py-3.5 md:py-4 border border-border-light dark:border-border-dark text-primary dark:text-white rounded-full font-medium hover:border-primary-accent transition-all text-xs md:text-sm uppercase tracking-widest">
                            Meet Our Tutors
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT MÉTRON ===== */}
            <section id="about" className="py-16 md:py-32 bg-white dark:bg-surface-dark/30 border-y border-border-light dark:border-border-dark">
                <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
                    <div className="mb-8 md:mb-12">
                        <div className="w-12 h-px bg-primary-accent mb-4 md:mb-6"></div>
                        <h2 className="text-2xl md:text-4xl font-serif text-primary dark:text-white tracking-tight">About Métron</h2>
                    </div>
                    <div className="space-y-5 md:space-y-6 text-sm md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        <p>
                            During our own academic journeys, we quickly noticed how different structured programs like the IB — and later the HSC — are from what many students initially expect. Each has its own philosophy, assessment style, and internal logic, and these aren't always obvious when you're in the middle of it.
                        </p>
                        <p>
                            Balancing heavy academic demands with already full schedules forced us to rethink how we studied. Instead of increasing hours, we refined our approach, streamlining revision, prioritising high-impact tasks, and learning how to work with the curriculum rather than against it. This made our study time more effective, more sustainable, and ultimately more enjoyable.
                        </p>
                        <p>
                            When those methods began to consistently deliver results, we founded what is now Métron Tutoring. While our roots are in IB tutoring, Métron has grown to include a wider network of tutors and now supports both IB and HSC students across a range of subjects.
                        </p>
                        <p>
                            Our goal remains the same: to give students the tools, strategies, and guidance to perform at a high level academically without sacrificing the things that matter to them. "Study smarter, not harder" may be a cliché, but at Métron, we focus on making it practical, structured, and achievable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== TOP TUTORS (infinite scroll) ===== */}
            <section className="py-16 md:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
                <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8 mb-10 md:mb-16">
                    <div className="text-center">
                        <div className="w-12 h-px bg-primary-accent mx-auto mb-4 md:mb-6"></div>
                        <h2 className="text-2xl md:text-4xl font-serif text-primary dark:text-white tracking-tight">Top Tutors</h2>
                    </div>
                </div>

                {/* Marquee container */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee">
                        {/* First set */}
                        {topTutors.map((tutor, i) => (
                            <div key={`a-${i}`} className="flex-shrink-0 w-60 md:w-72 mx-3 md:mx-5">
                                <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                                        <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-border-light dark:border-border-dark flex-shrink-0">
                                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-semibold text-primary dark:text-white">{tutor.name}</h3>
                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary-accent">{tutor.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-0">
                                        {tutor.type === 'IB' ? (
                                            <>
                                                <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-l-lg text-center">
                                                    <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.score}</p>
                                                    <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">IBAS</p>
                                                </div>
                                                <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark border-l-0 rounded-r-lg text-center">
                                                    <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.atar}</p>
                                                    <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR Equiv.</p>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-lg text-center">
                                                <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.atar}</p>
                                                <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {topTutors.map((tutor, i) => (
                            <div key={`b-${i}`} className="flex-shrink-0 w-60 md:w-72 mx-3 md:mx-5">
                                <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                                        <div className="w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-border-light dark:border-border-dark flex-shrink-0">
                                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-semibold text-primary dark:text-white">{tutor.name}</h3>
                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary-accent">{tutor.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-0">
                                        {tutor.type === 'IB' ? (
                                            <>
                                                <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-l-lg text-center">
                                                    <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.score}</p>
                                                    <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">IBAS</p>
                                                </div>
                                                <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark border-l-0 rounded-r-lg text-center">
                                                    <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.atar}</p>
                                                    <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR Equiv.</p>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex-1 py-1.5 md:py-2 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-lg text-center">
                                                <p className="text-base md:text-lg font-serif font-medium text-primary dark:text-white leading-none">{tutor.atar}</p>
                                                <p className="text-[8px] md:text-[9px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/tutors"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-border-light dark:border-border-dark text-primary dark:text-white rounded-full text-xs font-semibold uppercase tracking-widest hover:border-primary-accent hover:text-primary-accent transition-colors"
                    >
                        View All Tutors
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* ===== SUBJECTS ===== */}
            <section className="py-16 md:py-32 bg-white dark:bg-surface-dark/30 border-y border-border-light dark:border-border-dark">
                <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="w-12 h-px bg-primary-accent mx-auto mb-4 md:mb-6"></div>
                        <h2 className="text-2xl md:text-4xl font-serif text-primary dark:text-white tracking-tight">Subjects We Offer</h2>
                        <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                            Comprehensive support across both the International Baccalaureate and HSC curriculums.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {/* IB Subjects */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-accent mb-6 pb-3 border-b border-border-light dark:border-border-dark">
                                International Baccalaureate
                            </h3>
                            <ul className="space-y-3">
                                {subjects.ib.map((subject) => (
                                    <li key={subject} className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-accent flex-shrink-0"></span>
                                        {subject}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* HSC Subjects */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-accent mb-6 pb-3 border-b border-border-light dark:border-border-dark">
                                HSC (New South Wales)
                            </h3>
                            <ul className="space-y-3">
                                {subjects.hsc.map((subject) => (
                                    <li key={subject} className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-accent flex-shrink-0"></span>
                                        {subject}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== THE MÉTRON PHILOSOPHY ===== */}
            <section className="py-16 md:py-32 bg-background-light dark:bg-background-dark">
                <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/founders-photo.jpeg"
                                    alt="The Métron founders"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2">
                            <div className="mb-6 md:mb-10">
                                <div className="w-12 h-px bg-primary-accent mb-4 md:mb-6"></div>
                                <h2 className="text-2xl md:text-4xl font-serif text-primary dark:text-white tracking-tight">The Métron Philosophy</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                <p>
                                    Métron Tutoring is a modern tutoring service built on real, recent academic experience — originally founded through the International Baccalaureate, and now expanded to support both IB and HSC students.
                                </p>
                                <p>
                                    What began as a small team of three graduates has grown into a broader collective of high-performing tutors who share the same core belief: academic success shouldn't come at the expense of a balanced life. Each of our tutors has navigated demanding academic programs while maintaining commitments beyond the classroom, whether in sport, creative pursuits, or other passions.
                                </p>
                                <p>
                                    Our insight is simple: when the structure, priorities, and assessment logic of a curriculum are properly understood, students don't need to study endlessly to succeed. Métron Tutoring focuses on clarity, efficiency, and strategy, helping students study smarter, not harder, and achieve strong results without burnout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="relative py-16 md:py-24 bg-primary dark:bg-surface-dark overflow-hidden">
                <div className="absolute inset-0 opacity-10 grid-pattern"></div>
                <div className="max-w-4xl mx-auto px-5 md:px-6 text-center relative z-10">
                    <h2 className="text-2xl md:text-5xl font-serif text-white mb-5 md:mb-8">Ready to define your academic future?</h2>
                    <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-10 font-light">
                        Consult with our senior mentors today and discover how Métron can transform your results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <Link to="#" className="bg-primary-accent text-primary px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl text-sm md:text-base">Book a Free Consultation</Link>
                        <Link to="/pricing" className="border border-white/30 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:bg-white/10 transition-all text-sm md:text-base">Pricing</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
