'use client';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
	{
		label: 'About',
		section: 'about',
		icon: (
			<svg
				className="w-4 h-4 ml-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 7l5 5m0 0l-5 5m5-5H6"
				/>
			</svg>
		),
	},
	{
		label: 'Projects',
		section: 'projects',
		icon: (
			<svg
				className="w-4 h-4 ml-2 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		),
	},
	{
		label: 'Services',
		section: 'services',
		icon: (
			<svg
				className="w-4 h-4 ml-2 text-yellow-600 dark:text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 17h6"
				/>
			</svg>
		),
	},
];

const Logo = () => (
	<div className="flex items-center gap-3 mr-8 group">
		<div className="relative w-10 h-10 animate-float">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
			<div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<svg
					className="w-6 h-6 text-blue-600 dark:text-blue-400 transform group-hover:rotate-12 transition-transform duration-300"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			</div>
		</div>
		<span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text tracking-tight select-none animate-gradient-x">
			Welcome to my Portfolio
		</span>
	</div>
);

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isScrollingUp, setIsScrollingUp] = useState(true);

	useEffect(() => {
		setIsVisible(true);

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrollingUp(currentScrollY < lastScrollY);
			setLastScrollY(currentScrollY);

			// Determine active section
			const sections = NAV_ITEMS.map(item => item.section);
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
		setActiveSection(sectionId);
	};

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform
				${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
				${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}
				bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80`}>
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
			<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 relative">
				<div className="flex items-center justify-between h-16 sm:h-20">
					{/* Logo/Brand */}
					<div className="flex-shrink-0 group">
						<Logo />
					</div>

					{/* Navigation Links */}
					<div className="hidden sm:flex items-center gap-1 text-sm sm:text-base">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.label}
								onClick={() => scrollToSection(item.section)}
								className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
									${activeSection === item.section
										? 'text-blue-600 dark:text-blue-400'
										: 'text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400'}
									hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30
									focus:outline-none flex items-center cursor-pointer overflow-hidden`}
							>
								<span className="relative z-10 flex items-center">
									{item.label}
									{item.icon}
								</span>
								{/* Animated underline */}
								<span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300
									${activeSection === item.section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
								{/* Hover background effect */}
								<span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="sm:hidden">
						{/* Add your mobile menu button here */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
