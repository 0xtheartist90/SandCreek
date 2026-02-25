'use client';

export default function ContactSection() {

    return (
        <section id="contact" className="relative py-12 overflow-hidden" style={{ backgroundColor: '#FBF6F0' }}>
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/images/BG overlay.png"
                    alt="Sand Creek background texture"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-start gap-3 mb-8">
                    <p className="text-sm tracking-[0.3em] uppercase" style={{ color: '#1E3E3C' }}>
                        Contact
                    </p>
                    <div className="w-16 h-1" style={{ backgroundColor: '#FFF532' }} />
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#1E3E3C' }}>
                        Reach Out to Sand Creek
                    </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] items-stretch" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[320px] lg:min-h-[380px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.7455702990216!2d99.153600476652!3d18.773748684256664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da287512dd13df%3A0x399b43d51fff1bb2!2sSand%20Creek%20Golf%20Course%20Chiangmai%20Official!5e0!3m2!1sen!2sth!4v1730100000000"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div
                        className="rounded-3xl border border-white/50 bg-white/25 backdrop-blur-lg shadow-2xl p-6 flex flex-col gap-5"
                        style={{ color: '#1E3E3C' }}>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#1E3E3C' }}>Visit</p>
                            <p>San Kamphaeng District<br />Chiang Mai 50130<br />Thailand</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#1E3E3C' }}>Call</p>
                            <a
                                href="tel:+66817410989"
                                className="text-base font-normal hover:opacity-80 transition-opacity"
                                style={{ color: '#1E3E3C' }}>
                                +66 81 741 0989
                            </a>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#1E3E3C' }}>Hours</p>
                            <p>Daily 7:00 AM – 6:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#1E3E3C' }}>Socials</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/sandcreekgolf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3E3C] hover:opacity-80 transition-opacity"
                                    style={{ color: '#FBF6F0' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@sandcreekgolf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3E3C] hover:opacity-80 transition-opacity"
                                    style={{ color: '#FBF6F0' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M21 8.1a5.4 5.4 0 0 1-3.3-1.1v7.2a5.8 5.8 0 1 1-5.8-5.8c.2 0 .4 0 .6.1v3.2a2.4 2.4 0 1 0 1.7 2.3V3h3.1a5.4 5.4 0 0 0 3.8 4.1v3.1c-.4 0-.8-.1-1.1-.2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <a
                                href="tel:+66817410989"
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-base shadow-md hover:scale-105 transition-transform"
                                style={{ backgroundColor: '#FFF532', color: '#1E3E3C' }}>
                                📞 Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
