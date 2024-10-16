import { Noto_Sans_KR } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Footer } from "./components/Footer/Footer";
import cn from "classnames";
import styles from "./layout.module.css";

const roboto: NextFont = Noto_Sans_KR({
    subsets: ["cyrillic"],
    weight: ["300", "400", "500", "700"]
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn(roboto.className, styles.wrapper)}>
                <Header className={styles.header} />
                <SideBar className={styles.sidebar} />
                <div className={styles.page}>{children}</div>
                <Footer className={styles.footer} />
            </body>
        </html>
    );
}
