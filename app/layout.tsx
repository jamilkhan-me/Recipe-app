import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bubbly Baker",
  description: "My amazing recipe app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let header = (
    <header className="w-full  h-24 bg-slate-300 flex flex-col items-center justify-center">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold pt-4">The Bubbly Baker</h1>
      </Link>
      <nav className="flex flex-row py-4 gap-4 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Recipe</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
    </header>
  );

  let footer = (
    <footer className="flex flex-col items-center justify-center">
      <p className="absolute bottom-0 w-full h-20 bg-slate-300 flex flex-col items-center justify-center">
        Made with 💛
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`{inter.className} max-w-5xl flex flex-col items-center justify-center `}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
