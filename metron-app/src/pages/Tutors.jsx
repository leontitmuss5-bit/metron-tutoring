import { Link } from 'react-router-dom'
import { useState } from 'react'

// Placeholder portrait images
const placeholders = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjkmFtXDuTLCUiCDDL_qHH-X_VxXFQnzUQkRHwL1ZlE_6YEoHe8TQ1_Oe6CEx2J984Jql9OQYjw13onU7ypF9npcmJd2oxvmq2obbtGCMp7PGbmeccAknND40yD1_-eJlDHgxpUX6mIW5gbE0Z9RKF7pdTe_I2iobZCOCDBb5sopZJlO5WkcZHhxseeYFcH4nAi89-y52osybgqp0Ge_1HSwc1USy6NZ8oNFB4ihpJf3WIa7RS79mlHXw36K_vfn1Iq-ustKjk0H0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBsnGZe7jy1vIktoATOBHkl9y98fmx9VxFtH16LBzkBv1lBcnGmrEnS-7OLsKt-LVNz0GZ5FfJ5sHE5Ecju-HZy6S4S4mSeFGAFlAC0CF2m-YNjM26SNCrbAj-6-zafFx0CpE2ha468KvISU5YrY6bmz1Byv1Tf_FuI6ac07IlSzXk736jmcflmyvUhYAD3LSQdF5Ch1V7qsu17ZxNtSFEdnovHvgdVupHL_r2tIiVEUYNCa5Y8-N1FyFfatI7aXU8FfioCgeIBiDc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBswFJGjhYLs6l-x0pa0ZoNRKrScPyHDvq1AjNOahHp0ge2v5vosFgY3RxxoqIgzy9edyVkkWiZET213DGK-Ylf2CcoPTmPQMCNOx90lpzvgh3X_gCNfG34bGkpywcT4ZR-W1ATem3BQ9c5jh1k7H2hSh89957g7SXjjrSAX-BeEM8evEVzZlUAdTpr1q6mdvE_e-lrVqNG2l6ehEu-XOZVyrlV_hxEGFmO_HnfzM4Y897BYmJnygR4cXn6SVu54FTBlRvohpFovlI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDohLntbdhekpNh8gSgRuKBUavGJW8NM2o60886TX7NuxncwDgOuMroungf_YMjEyiNUvD6Tkc7_UnLFcINrTQnL32xtQacdCBb1peR7SaGflSoaAE045xRblZh44YnEfpOIJ41oNMP9jsU4s7nvqoDNwKKH61Z9QQznXxhATR2qRInsaaJUVTlvm10NniegMx_MqwVOP3rGi_JdbouEJVsceTqA3DjEIIqnKhi_7J908TgjzaHjZBB4pSpc-FTo6HFowmNJrKOjZI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB7D5JjHjZgkRroYCS2y0rbOvujiFDJs7ZM5xNipKXq93M49fW5DqgaAEVJx5LoByM60M0rSjczAwEaZKRGN-7LUX8x1_T9ZHFtafdQmb0urtEiZFbwWTxSw5GRTCpeyAlM48zy2lP05pEEO5NgbVzeit8-FBpt80FQFG2D4miBKZzMWGHG5ieReZWYej1eh-qy7ElNKgq5M_Vq1JFxetIfWjPbZObJmlZj4_2UHEpVTIeUGI6YRR3O4vGpZUx59II9itAYIn3Kphs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDB0uQgOcBsxcwrVKufQgAktIsz_uMl1ed_aWulmESPx9Y06KXLcRCzhhri-krDuhwkpfdFdb_8ZxTpxabgZIyo8RiOi-X0rSNce4U44vIqPiqXHf3ifj45-bsd5eSHPhtanRMgmGnNnOahFesBVuENqNNMd-i-UGJ_a27um0ewavlhdqpymJAYTm7TdzWPI0bUkPSCXN5we4Jrc9GuXKVt-b2_E4C7jOMIXYdj6ljH_Y1_dTuCGVnN3J_MsdMuiCBRG1rE8qn8yXw',
]

const ibTutors = [
    {
        name: 'Patrick Jones',
        score: '45/45',
        atar: '99.95',
        image: placeholders[1],
        subjects: [
            'Business & Management HL',
            'English Language and Literature HL',
            'Mathematics AI SL',
            'Sports, Health and Exercise Science HL',
        ],
        highlight: null,
    },
    {
        name: 'Luka Vanezis',
        score: '44/45',
        atar: '99.70',
        image: placeholders[3],
        subjects: [
            'Biology SL',
            'Economics HL',
            'English A Literature HL',
            'Geography HL',
            'Mathematics AA SL',
        ],
        highlight: null,
    },
    {
        name: 'Hugh Pockley',
        score: '43/45',
        atar: '99.35',
        image: placeholders[4],
        subjects: [
            'Biology SL',
            'English A Literature HL',
            'Mathematics AA HL',
        ],
        highlight: '1st in Chemistry HL at Newington College',
    },
    {
        name: 'William Hardy',
        score: '43/45',
        atar: '99.35',
        image: placeholders[5],
        subjects: [
            'Business & Management HL',
            'English Language and Literature HL',
            'Mathematics AA SL',
            'Sports, Health and Exercise Science HL',
        ],
        highlight: null,
    },
    {
        name: 'Thomas Barry',
        score: '43/45',
        atar: '99.35',
        image: placeholders[2],
        subjects: [
            'Biology HL / Chemistry SL',
            'Mathematics AA SL',
        ],
        highlight: null,
    },
    {
        name: 'Leon Titmuss',
        score: '42/45',
        atar: '98.80',
        image: placeholders[0],
        subjects: [
            'Biology SL',
            'Sports, Health and Exercise Science HL',
            'Mathematics AI SL',
        ],
        highlight: '1st in Geography HL at Newington College',
    },
    {
        name: 'Jasper See',
        score: '38/45',
        atar: '95.55',
        image: placeholders[3],
        subjects: [],
        highlight: '1st in English Language and Literature HL at Newington College',
    },
]

const hscTutors = [
    {
        name: 'Dan Beretta',
        score: '99.5',
        image: placeholders[1],
        subjects: [],
        highlight: '1st in State NSW for Mathematics Standard 2',
    },
    {
        name: 'Hamish Hunter',
        score: '99',
        image: placeholders[5],
        subjects: ['English', 'Mathematics'],
        highlight: null,
    },
    {
        name: 'Sandy Jones',
        score: '96.6',
        image: placeholders[2],
        subjects: ['History', 'English', 'Legal Studies', 'Math Standard'],
        highlight: null,
    },
    {
        name: 'Harry Millar',
        score: '96.6',
        image: placeholders[0],
        subjects: ['History', 'English', 'Legal Studies'],
        highlight: null,
    },
]

const filters = ['All Tutors', 'IB', 'HSC']

function TutorCard({ tutor, type }) {
    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary-accent/30 transition-all duration-300">
            {/* Photo + Name header */}
            <div className="flex items-center gap-4 p-6 pb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border-light dark:border-border-dark flex-shrink-0">
                    <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-primary dark:text-white truncate">{tutor.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">{type}</span>
                </div>
            </div>

            <div className="px-6 pb-6">
                {/* Scores */}
                {type === 'IB' ? (
                    <div className="flex items-center gap-0 mb-4">
                        <div className="flex-1 py-2.5 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-l-lg text-center">
                            <p className="text-xl font-serif font-medium text-primary dark:text-white leading-none">{tutor.score}</p>
                            <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">IBAS</p>
                        </div>
                        <div className="flex-1 py-2.5 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark border-l-0 rounded-r-lg text-center">
                            <p className="text-xl font-serif font-medium text-primary dark:text-white leading-none">{tutor.atar}</p>
                            <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR Equiv.</p>
                        </div>
                    </div>
                ) : (
                    <div className="mb-4">
                        <div className="py-2.5 bg-gray-50 dark:bg-white/5 border border-border-light dark:border-border-dark rounded-lg text-center">
                            <p className="text-xl font-serif font-medium text-primary dark:text-white leading-none">{tutor.score}</p>
                            <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">ATAR</p>
                        </div>
                    </div>
                )}

                {/* Highlight / Achievement */}
                {tutor.highlight && (
                    <div className="mb-4 px-3 py-2 bg-primary-accent/10 border border-primary-accent/20 rounded-lg">
                        <p className="text-xs font-medium text-primary-accent flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-sm mt-px flex-shrink-0">emoji_events</span>
                            {tutor.highlight}
                        </p>
                    </div>
                )}

                {/* Subjects */}
                {tutor.subjects.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {tutor.subjects.map((subject) => (
                            <span
                                key={subject}
                                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default function Tutors() {
    const [activeFilter, setActiveFilter] = useState('All Tutors')

    const showIB = activeFilter === 'All Tutors' || activeFilter === 'IB'
    const showHSC = activeFilter === 'All Tutors' || activeFilter === 'HSC'

    return (
        <>
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    </svg>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary-accent text-xs font-semibold tracking-widest uppercase mb-4 dark:bg-white/5">World-Class Mentorship</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary dark:text-white mb-6 tracking-tight">
                        Meet our <span className="italic text-primary-accent">Tutors</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Elite tutoring from recent graduates who achieved top scores while balancing life and individual passions.
                    </p>
                </div>
            </header>

            {/* Floating filter pill */}
            <div className="sticky top-[76px] md:top-[80px] z-40 flex justify-center py-3 pointer-events-none">
                <div className="inline-flex items-center gap-1 px-2 py-1.5 rounded-full bg-surface-light/70 dark:bg-background-dark/70 backdrop-blur-xl border border-border-light/40 dark:border-border-dark/40 shadow-md shadow-black/[0.03] dark:shadow-black/20 pointer-events-auto">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
                                activeFilter === filter
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-white/10'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* IB Tutors */}
                {showIB && (
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-accent flex-shrink-0">International Baccalaureate</h2>
                            <div className="flex-1 h-px bg-border-light dark:bg-border-dark"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ibTutors.map((tutor) => (
                                <TutorCard key={tutor.name} tutor={tutor} type="IB" />
                            ))}
                        </div>
                    </div>
                )}

                {/* HSC Tutors */}
                {showHSC && (
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-accent flex-shrink-0">HSC (New South Wales)</h2>
                            <div className="flex-1 h-px bg-border-light dark:bg-border-dark"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hscTutors.map((tutor) => (
                                <TutorCard key={tutor.name} tutor={tutor} type="HSC" />
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <section className="bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-6">Are you a high achiever?</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
                        Join our team of elite mentors. We are always looking for exceptional individuals who are passionate about education and have achieved outstanding results in the HSC or IB.
                    </p>
                    <Link to="#" className="inline-block bg-primary text-white hover:bg-black/90 px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all">Apply to Teach</Link>
                </div>
            </section>
        </>
    )
}
