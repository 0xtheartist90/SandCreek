const cream = '#FBF6F0';
const creamAlpha = (opacity: number) => `rgba(251, 246, 240, ${opacity})`;

export default function RatesSection() {
    const rates = [
        { label: '9 Holes', price: '฿400' },
        { label: '18 Holes', price: '฿500' },
        { label: 'Caddy (9)', price: '฿150' },
        { label: 'Caddy (18)', price: '฿250' },
        { label: 'Golf Cart', price: '฿400' },
        { label: 'Thai Discount', price: '฿50', highlight: true }
    ];

    return (
        <section id="rates" className="py-10" style={{ backgroundColor: '#4A5B2A' }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-start">
                    <div className="flex flex-col gap-4 h-full" style={{ color: cream }}>
                        <div>
                            <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: '#FFF532' }}>
                                Rates
                            </p>
                            <div className="w-16 h-1 mb-5" style={{ backgroundColor: '#FFF532' }} />
                            <h2
                                className="text-3xl md:text-4xl font-bold"
                                style={{ fontFamily: 'Playfair Display, serif' }}>
                                Affordable & Fun
                            </h2>
                            <p
                                className="text-base mt-3"
                                style={{ fontFamily: 'Inter, sans-serif', color: creamAlpha(0.75) }}>
                                Walk it solo or add a caddy and cart when you want—every upgrade is optional so you only pay for
                                what you need.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl bg-white/10 backdrop-blur px-4 py-3 border border-white/15 max-w-md mt-auto"
                            style={{ color: cream }}>
                            <div className="divide-y divide-white/10">
                                {rates.map((rate) => (
                                    <div key={rate.label} className="flex items-center justify-between py-2">
                                        <p
                                            className="text-xs font-semibold tracking-[0.15em] uppercase"
                                            style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {rate.label}
                                        </p>
                                        <p
                                            className="text-xs font-semibold tracking-[0.15em] uppercase"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                color: rate.highlight ? '#FFF532' : cream
                                            }}>
                                            {rate.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden aspect-[16/9] w-full lg:w-[120%] lg:ml-auto self-center">
                        <video
                            src="/images/Rates.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
