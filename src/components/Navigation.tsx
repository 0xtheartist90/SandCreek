'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
                    isScrolled ? 'shadow-lg' : ''
                }`}
                style={{ maxWidth: '1200px', width: 'calc(100% - 2rem)', borderRadius: '40px', backgroundColor: '#FBF6F0' }}>
                <div className="relative h-24 w-full flex items-center justify-center px-8">
                    <div
                        className="absolute left-1/2 md:left-[88px] top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2"
                        style={{
                            width: '165px',
                            height: '165px'
                        }}>
                        <Image
                            src="/images/sandcreeklogotopnav.png"
                            alt="Sand Creek Golf Course"
                            fill
                            sizes="165px"
                            className="object-contain"
                        />
                    </div>

                    <div className="hidden md:flex items-center justify-center gap-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-sm font-medium hover:opacity-70 transition-opacity"
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('course')}
                            className="text-sm font-medium hover:opacity-70 transition-opacity"
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                            Course
                        </button>
                        <button
                            onClick={() => scrollToSection('rates')}
                            className="text-sm font-medium hover:opacity-70 transition-opacity"
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                            Rates
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-medium hover:opacity-70 transition-opacity"
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                            Contact
                        </button>
                    </div>

                    <a
                        href="tel:+66817410989"
                        className="hidden md:flex absolute right-8 px-6 py-2.5 rounded-full font-semibold text-sm transition-transform hover:scale-105"
                        style={{
                            backgroundColor: '#FFF532',
                            color: '#1E3E3C',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                        📞 Call Now
                    </a>
                </div>
            </nav>

            <a
                href="tel:+66817410989"
                className="fixed bottom-6 right-6 md:hidden z-50 px-6 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-105"
                style={{
                    backgroundColor: '#FFF532',
                    color: '#1E3E3C',
                    fontFamily: 'Inter, sans-serif'
                }}>
                📞 Call
            </a>
        </>
    );
}
