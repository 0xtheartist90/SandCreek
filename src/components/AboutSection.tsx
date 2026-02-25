export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-20 px-6 overflow-hidden"
            style={{ backgroundColor: '#FBF6F0' }}>
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/images/BG overlay.png"
                    alt="Sand Creek background texture"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p
                            className="text-sm tracking-[0.3em] uppercase mb-3"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                color: '#4A5B2A'
                            }}>
                            About Us
                        </p>
                        <div
                            className="w-16 h-1 mb-6"
                            style={{ backgroundColor: '#FFF532' }}
                        />
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                color: '#1E3E3C'
                            }}>
                            Welcome to Sand Creek
                        </h2>

                        <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <p className="text-lg leading-relaxed" style={{ color: '#1E3E3C' }}>
                                Welcome to SAND CREEK, where the love for golf meets picturesque
                                landscapes. Located in Chiang Mai, Thailand, our 9-hole course offers
                                a perfect blend of challenge and relaxation. With well-maintained
                                greens, snacks and drinks, and a friendly atmosphere, we invite you
                                to experience the essence of golfing at SAND CREEK.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                        <video
                            className="w-full h-full object-cover"
                            src="/images/aboutsection.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
