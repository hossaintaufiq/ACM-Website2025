'use client';
import Footer from '../components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Timer from '@/components/Timer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className={inter.className}>
				<main className="w-full text-white bg-[rgb(2,8,45)] font-quantico relative overflow-hidden flex flex-col min-h-screen">
					{/* <Vectors /> */}
						<Navbar />
					{/* <Timer /> */}
					<div className="flex-grow flex-1">{children}</div>
				</main>
				<div className="bg-[#020817] border-t-2 border-b-white/10 z-50">
					<Footer />
				</div>
			</body>
		</html>
	);
}
