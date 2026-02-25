"use client";

import Image from 'next/image';

const cream = '#FBF6F0';
const creamAlpha = (opacity: number) => `rgba(251, 246, 240, ${opacity})`;

export default function Footer() {
    return (
        <footer className="py-8 px-6" style={{ backgroundColor: '#1E3E3C' }}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="flex flex-col gap-2.5" style={{ fontFamily: 'Inter, sans-serif', color: cream }}>
                        <Image
                            src="/images/sandcreeklogofooter.png"
                            alt="Sand Creek Golf Course"
                            width={195}
                            height={90}
                            className="object-contain"
                        />
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex gap-3" style={{ color: cream }}>
                                <a
                                    href="https://www.facebook.com/sandcreekgolf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    style={{ color: cream }}>
                                    <span className="sr-only">Facebook</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@sandcreekgolf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    style={{ color: cream }}>
                                    <span className="sr-only">TikTok</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M21 8.1a5.4 5.4 0 0 1-3.3-1.1v7.2a5.8 5.8 0 1 1-5.8-5.8c.2 0 .4 0 .6.1v3.2a2.4 2.4 0 1 0 1.7 2.3V3h3.1a5.4 5.4 0 0 0 3.8 4.1v3.1c-.4 0-.8-.1-1.1-.2z" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="tel:+66817410989"
                                    className="text-base font-semibold hover:opacity-80 transition-opacity"
                                    style={{ color: '#FFF532' }}>
                                    +66 81 741 0989
                                </a>
                                <p className="text-xs mt-1" style={{ color: creamAlpha(0.7) }}>
                                    Open Daily 7:00 AM – 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col gap-4 md:items-end"
                        style={{ fontFamily: 'Inter, sans-serif', color: cream }}>
                        <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('about');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="hover:opacity-70 transition-opacity text-left md:text-right">
                                About
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('course');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="hover:opacity-70 transition-opacity text-left md:text-right">
                                Course
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('rates');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="hover:opacity-70 transition-opacity text-left md:text-right">
                                Rates
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="hover:opacity-70 transition-opacity text-left md:text-right">
                                Contact
                            </button>
                        </div>

                    </div>
                </div>

                <div
                    className="mt-6 pt-4 text-center text-xs"
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        fontFamily: 'Inter, sans-serif',
                        color: creamAlpha(0.6)
                    }}>
                    © {new Date().getFullYear()} Sand Creek Golf Course. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
