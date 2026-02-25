"use client";

const creamHex = '#FBF6F0';
const creamAlpha = (opacity: number) => `rgba(251, 246, 240, ${opacity})`;

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col overflow-hidden py-20 md:py-32"
            style={{ minHeight: '100vh' }}>
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/hero-sandcreek.webm"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/screenshot1.png"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex-1 flex items-stretch">
                <div
                    className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-6 justify-end w-full pb-6"
                    style={{ color: creamHex }}>
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-4"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                    Welcome to Sand Creek
                </h1>

                <p
                    className="script-accent text-2xl md:text-3xl mb-8"
                    style={{ color: '#FFF532' }}>
                    A Beginner-Friendly Course
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button
                        onClick={() => {
                            const element = document.getElementById('course');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
                        style={{
                            backgroundColor: '#FFF532',
                            color: '#1E3E3C',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                        View Course
                    </button>
                    <button
                        onClick={() => {
                            const element = document.getElementById('rates');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/20"
                        style={{
                            backgroundColor: creamAlpha(0.1),
                            border: `2px solid ${creamHex}`,
                            color: creamHex,
                            fontFamily: 'Inter, sans-serif'
                        }}>
                        View Rates
                    </button>
                </div>

                    <p
                        className="text-sm opacity-90"
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                        Open Daily 7:00 AM – 6:00 PM
                    </p>
                </div>
            </div>
        </section>
    );
}
