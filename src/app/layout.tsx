import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Sand Creek Golf Course | Affordable 9-Hole Golf Course Chiang Mai',
    description: 'Looking for an affordable golf course in Chiang Mai? Sand Creek Golf Course in San Kamphaeng offers a relaxed 9-hole layout, open daily from 7am–6pm. Call now to book your tee time.',
    keywords: 'golf course Chiang Mai, 9 hole golf Chiang Mai, affordable golf Chiang Mai, San Kamphaeng golf course, beginner friendly golf Chiang Mai',
    openGraph: {
        title: 'Sand Creek Golf Course | Affordable 9-Hole Golf Course Chiang Mai',
        description: 'Looking for an affordable golf course in Chiang Mai? Sand Creek Golf Course in San Kamphaeng offers a relaxed 9-hole layout, open daily from 7am–6pm.',
        type: 'website',
        locale: 'en_US',
        alternateLocale: 'th_TH'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} overscroll-none antialiased`}>
                {children}
            </body>
        </html>
    );
};

export default Layout;
