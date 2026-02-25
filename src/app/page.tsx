import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CourseSection from '@/components/CourseSection';
import RatesSection from '@/components/RatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
    return (
        <main>
            <Navigation />
            <HeroSection />
            <AboutSection />
            <CourseSection />
            <RatesSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
