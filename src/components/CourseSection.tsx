const cream = '#FBF6F0';
const creamAlpha = (opacity: number) => `rgba(251, 246, 240, ${opacity})`;

export default function CourseSection() {
    const courseData = [
        { hole: 1, par: 4, blue: 370, whiteL: 340, whiteR: 340, red: 257 },
        { hole: 2, par: 4, blue: 333, whiteL: 327, whiteR: 306, red: 268 },
        { hole: 3, par: 4, blue: 353, whiteL: 350, whiteR: 329, red: 315 },
        { hole: 4, par: 4, blue: 370, whiteL: 337, whiteR: 357, red: 285 },
        { hole: 5, par: 3, blue: 132, whiteL: 137, whiteR: 124, red: 98 },
        { hole: 6, par: 4, blue: 275, whiteL: 277, whiteR: 250, red: 236 },
        { hole: 7, par: 5, blue: 425, whiteL: 375, whiteR: 410, red: 360 },
        { hole: 8, par: 3, blue: 135, whiteL: 135, whiteR: 135, red: 120 },
        { hole: 9, par: 5, blue: 479, whiteL: 398, whiteR: 415, red: 383 }
    ];

    const totals = {
        par: courseData.reduce((sum, h) => sum + h.par, 0),
        blue: courseData.reduce((sum, h) => sum + h.blue, 0),
        whiteL: courseData.reduce((sum, h) => sum + h.whiteL, 0),
        whiteR: courseData.reduce((sum, h) => sum + h.whiteR, 0),
        red: courseData.reduce((sum, h) => sum + h.red, 0)
    };
    const avgWhite = Math.round((totals.whiteL + totals.whiteR) / 2);
    const totals18 = {
        blue: totals.blue * 2,
        white: avgWhite * 2,
        red: totals.red * 2
    };

    return (
        <section id="course" className="w-full" style={{ backgroundColor: '#1E3E3C' }}>
            <div className="grid md:grid-cols-3 items-stretch">
                <div className="relative md:col-span-1">
                    <video
                        src="/images/Thecourse.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div
                    className="px-6 pt-14 pb-8 md:px-10 lg:px-14 flex flex-col gap-6 md:col-span-2"
                    style={{ color: cream }}>
                    <div>
                        <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#FFF532' }}>
                            Course
                        </p>
                        <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#FFF532' }} />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            The Layout
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex flex-col xl:flex-row gap-6">
                            <div className="xl:flex-[2] rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[360px] md:h-[420px]">
                                <img
                                    src="/images/sandcreek golf course.png"
                                    alt="Sand Creek course overview"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="xl:flex-1 border border-white/15 rounded-2xl px-5 py-5 bg-white/5 backdrop-blur h-auto md:h-[420px]">
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                                    {courseData.map((hole) => {
                                        const whiteAvg = Math.round((hole.whiteL + hole.whiteR) / 2);
                                        const tees = [
                                            { value: hole.blue, color: '#4DA3FF' },
                                            { value: whiteAvg, color: cream },
                                            { value: hole.red, color: '#FF7A7A' }
                                        ];

                                        return (
                                            <div
                                                key={hole.hole}
                                                className="border border-white/10 rounded-xl px-3 py-3 flex flex-col gap-1.5 items-center text-center"
                                                style={{ fontFamily: 'Inter, sans-serif' }}>
                                                <p
                                                    className="text-[0.65rem] uppercase tracking-[0.35em] whitespace-nowrap"
                                                    style={{ color: '#FFF532' }}>
                                                    Hole {hole.hole}
                                                </p>
                                                <p className="text-xs whitespace-nowrap" style={{ color: creamAlpha(0.8) }}>
                                                    Par {hole.par}
                                                </p>
                                                <div className="flex flex-col gap-0.5 text-[0.7rem] w-full" style={{ color: creamAlpha(0.9) }}>
                                                    {tees.map((tee, idx) => (
                                                        <div key={idx} className="flex items-center justify-center gap-1 whitespace-nowrap">
                                                            <span
                                                                className="inline-block w-1.5 h-1.5 rounded-full"
                                                                style={{ backgroundColor: tee.color }}
                                                            />
                                                            <span>{tee.value} yds</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { label: 'Blue Tees', value: totals.blue, eighteen: totals18.blue },
                                { label: 'White Tees', value: avgWhite, eighteen: totals18.white },
                                { label: 'Red Tees', value: totals.red, eighteen: totals18.red }
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="border border-white/15 rounded-2xl px-4 py-6 bg-white/5 backdrop-blur text-center">
                                    <p
                                        className="text-xs uppercase tracking-[0.25em] mb-2"
                                        style={{ color: creamAlpha(0.7) }}>
                                        {item.label}
                                    </p>
                                    <p className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {item.value} yds
                                    </p>
                                    <p
                                        className="text-xs mt-2"
                                        style={{ fontFamily: 'Inter, sans-serif', color: creamAlpha(0.6) }}>
                                        18 holes: {item.eighteen} yds
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
