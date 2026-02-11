import { Link } from 'react-router-dom'

export default function TutorProfile() {
    return (
        <>
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
                <div className="mb-8">
                    <Link to="/tutors" className="inline-flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary-accent transition-colors">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        Back to Tutors
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative group">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-2xl">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjkmFtXDuTLCUiCDDL_qHH-X_VxXFQnzUQkRHwL1ZlE_6YEoHe8TQ1_Oe6CEx2J984Jql9OQYjw13onU7ypF9npcmJd2oxvmq2obbtGCMp7PGbmeccAknND40yD1_-eJlDHgxpUX6mIW5gbE0Z9RKF7pdTe_I2iobZCOCDBb5sopZJlO5WkcZHhxseeYFcH4nAi89-y52osybgqp0Ge_1HSwc1USy6NZ8oNFB4ihpJf3WIa7RS79mlHXw36K_vfn1Iq-ustKjk0H0" alt="Portrait of James Sterling" className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-primary-accent text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Top Rated Mentor</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="achievement-badge rounded-xl">
                                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-bold mb-1">ATAR</p>
                                <p className="text-2xl font-serif font-semibold text-primary dark:text-white">99.95</p>
                            </div>
                            <div className="achievement-badge rounded-xl">
                                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-bold mb-1">State Rank</p>
                                <p className="text-2xl font-serif font-semibold text-primary dark:text-white">1st</p>
                            </div>
                            <div className="achievement-badge rounded-xl border-primary-accent/30 bg-primary-accent/5">
                                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest font-bold mb-1">Students</p>
                                <p className="text-2xl font-serif font-semibold text-primary dark:text-white">150+</p>
                            </div>
                        </div>
                        <div className="p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl shadow-sm">
                            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-accent mb-6">Academic Background</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary-accent">school</span>
                                    <div>
                                        <p className="text-sm font-medium text-primary dark:text-white">The King's School</p>
                                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Dux of Mathematics, 2019</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary-accent">account_balance</span>
                                    <div>
                                        <p className="text-sm font-medium text-primary dark:text-white">UNSW Sydney</p>
                                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Bachelor of Medical Studies / Doctor of Medicine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <h1 className="text-5xl lg:text-6xl font-serif font-medium text-primary dark:text-white mb-4 tracking-tight">
                                James <span className="italic text-primary-accent">Sterling</span>
                            </h1>
                            <p className="text-xl text-text-muted-light dark:text-text-muted-dark font-light leading-relaxed">
                                Head of Mathematics &amp; Senior Academic Consultant. Specializing in Mathematics Extension 1 &amp; 2.
                            </p>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark border-b border-border-light dark:border-border-dark pb-3">Expertise &amp; Subjects</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">Mathematics Extension 2</span>
                                <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">Mathematics Extension 1</span>
                                <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">Advanced Mathematics</span>
                                <span className="px-4 py-2 bg-white dark:bg-white/5 border border-border-light dark:border-white/10 text-sm font-medium rounded-full">Physics HL/SL</span>
                                <span className="px-4 py-2 bg-white dark:bg-white/5 border border-border-light dark:border-white/10 text-sm font-medium rounded-full">Chemistry HL</span>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark border-b border-border-light dark:border-border-dark pb-3">The Mentorship Approach</h2>
                            <div className="prose prose-sm lg:prose-base dark:prose-invert max-w-none text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                <p>
                                    With over five years of experience mentoring the highest tier of HSC and IB students, James has developed a proprietary methodology that transcends simple rote learning. His approach focuses on <strong>first-principles understanding</strong> and strategic examination technique.
                                </p>
                                <p>
                                    As the Head of Mathematics at Balance, James has curated a curriculum that identifies the common pitfalls of elite students, bridging the gap between a high Band 6 and a State Rank performance. His students consistently report not just improved grades, but a fundamental shift in how they perceive complex quantitative problems.
                                </p>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark border-b border-border-light dark:border-border-dark pb-3">Professional Milestones</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-primary-accent text-lg">verified</span>
                                    <span>HSC All Rounder &amp; Top Achiever List</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-primary-accent text-lg">verified</span>
                                    <span>Over 2,500 hours of 1-on-1 private instruction</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-primary-accent text-lg">verified</span>
                                    <span>Lead author of the Balance "Ext 2 Strategy" Workbook</span>
                                </li>
                            </ul>
                        </section>
                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-primary text-white hover:bg-black py-4 px-8 rounded-full text-sm font-semibold uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1">
                                Book a Trial Session
                            </button>
                            <button className="flex-1 bg-white dark:bg-transparent border border-primary dark:border-white text-primary dark:text-white py-4 px-8 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <section className="bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-20 mt-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-6 tracking-tight">Ready to excel with James?</h2>
                            <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                                Experience the Balance difference. Our consultations are designed to map out a clear path to your academic goals.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link to="#" className="inline-flex items-center gap-3 bg-primary-accent text-primary hover:bg-opacity-90 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-105">
                                Secure Your Spot
                                <span className="material-symbols-outlined">calendar_today</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
