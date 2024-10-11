import { Noto_Sans_KR } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";

const roboto: NextFont = Noto_Sans_KR({
    subsets: ["cyrillic"],
    weight: ["300", "400", "500", "700"]
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${roboto.className}`}>{children}</body>
        </html>
    );
}
