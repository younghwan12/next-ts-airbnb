import { Nunito } from "next/font/google";

import "./globals.css";

export const metadata = {
    title: "여행은 떠나는 거야 - 에어비엔비",
    description: "Airbnb study",
};

const font = Nunito({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={font.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
