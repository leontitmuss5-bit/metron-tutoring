import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How do I choose the right tutor?",
            answer: "We recommend booking a consultation first. We analyze the student's current performance, goals, and learning style to match them with a mentor from our elite team of HSC and IB high achievers."
        },
        {
            question: "Is there a discount for multiple subjects?",
            answer: "Yes, our Term Packages offer significant value for students requiring support across multiple disciplines. Please inquire about our tailored multi-subject programs."
        },
        {
            question: "Where do the sessions take place?",
            answer: "We offer sessions at our premium Sydney CBD campus, as well as high-definition online tutoring for students who require flexibility or are based outside of Sydney."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We require 24 hours' notice for cancellations. This allows our mentors to manage their intensive academic schedules and offer the time slot to other students on our waiting list."
        }
    ]

    return (
        <>
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    </svg>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/5 text-primary-accent text-xs font-semibold tracking-widest uppercase mb-4 dark:bg-white/5">Elite Academic Investment</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary dark:text-white mb-6 tracking-tight">
                        Choose your <span className="italic text-primary-accent">path</span> here.
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Investment in your future starts here. We offer tailored sessions with the top 1% of graduates to ensure academic mastery in IB and HSC.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Single Session Card */}
                    <div className="pricing-card flex flex-col">
                        <div className="p-8 pb-4">
                            <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">Flexible Learning</span>
                            <h3 className="text-3xl font-serif font-medium text-primary dark:text-white mb-4">Single Session</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-serif font-medium text-primary dark:text-white">$85</span>
                                <span className="text-text-muted-light dark:text-text-muted-dark font-light">/ hour</span>
                            </div>
                            <div className="h-px w-full bg-border-light dark:bg-border-dark mb-6"></div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">One-on-one personalized mentoring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Targeted curriculum support (HSC/IB)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Comprehensive study materials</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">No long-term commitment</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto p-8 pt-0">
                            <Link to="#" className="block w-full text-center py-4 bg-primary text-white hover:bg-black/90 transition-all rounded-lg text-sm font-medium uppercase tracking-widest">
                                Book a Session
                            </Link>
                        </div>
                    </div>

                    {/* Term Package Card */}
                    <div className="pricing-card flex flex-col relative">
                        <div className="absolute top-4 right-4">
                            <span className="bg-primary-accent text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">Recommended</span>
                        </div>
                        <div className="p-8 pb-4">
                            <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">Total Mastery</span>
                            <h3 className="text-3xl font-serif font-medium text-primary dark:text-white mb-4">Term Package</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-serif font-medium text-primary dark:text-white">Inquire Now</span>
                            </div>
                            <div className="h-px w-full bg-border-light dark:bg-border-dark mb-6"></div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Full term academic planning</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Priority scheduling with Senior Tutors</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">24/7 Q&amp;A support via Slack</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Fortnightly progress reports</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-accent text-sm mt-1">check_circle</span>
                                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Exam strategy masterclasses</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto p-8 pt-0">
                            <Link to="#" className="block w-full text-center py-4 border border-primary dark:border-white text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-all rounded-lg text-sm font-medium uppercase tracking-widest">
                                Contact for Package
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="mt-32 max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-medium text-primary dark:text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark">Find answers to common questions about our premium services.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="text-lg font-medium text-primary dark:text-white">{faq.question}</span>
                                    <span className={`material-symbols-outlined text-text-muted-light transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {openFaq === index && (
                                    <div className="mt-4 text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed fade-in-up">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <section className="bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary dark:text-white mb-6">Invest in Excellence Today</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
                        The path to a top ATAR or IB score starts with the right mentorship. Let's build your success together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="#" className="bg-primary text-white hover:bg-black/90 px-8 py-3 rounded-md font-medium shadow-lg transition-all">Book Consultation</Link>
                        <Link to="#" className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-medium transition-all dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
