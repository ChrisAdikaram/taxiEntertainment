import "@/styles/globals.css";
import { Inter, Great_Vibes } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
