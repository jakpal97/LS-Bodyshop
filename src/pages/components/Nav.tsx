import { useState } from 'react'
import { useMediaQuery } from '../../util/useMediaQuery'
import { motion } from 'framer-motion'

const Nav = () => {
	const [toggled, setToggled] = useState(false)
	const matches = useMediaQuery('(min-width: 1280px)')

	const handleLinkClick = () => {
		setToggled(false)
	}

	return (
		<nav className={`${matches ? 'sticky top-0 bg-white' : ''} z-50 w-full`}>
			<div className="container mx-auto max-w-4/5 lg:w-4/5 md:mx-auto flex justify-between items-center pt-5 pb-5 font-medium md:mx-16 ld:mx-32">
				<img src="/Logo.png" alt="Logo" className="w-40 h-15"></img>
				{matches && (
					<div className="flex gap-12 ">
						<a className="text-black" href="/" onClick={handleLinkClick}>
							Home
						</a>
						<a className="text-black" href="#services" onClick={handleLinkClick}>
							Services
						</a>
						<a className="text-black" href="#slider" onClick={handleLinkClick}>
							Portfolio
						</a>
						<a className="text-black" href="#contakt" onClick={handleLinkClick}>
							Contact
						</a>
					</div>
				)}
				{!matches && (
					<>
						<svg
							className="absolute bottom-0 left-1/2 -translate-x-1/2"
							width="250"
							height={4}
							viewBox="0 0 250 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M2 2L428 2" strokeWidth={2} stroke="#282828" strokeLinecap="round"></path>
						</svg>
						<div
							onClick={() => {
								setToggled(prevToggle => !prevToggle)
							}}
							className="space-y-1.5 m-10 cursor-pointer z-50">
							<motion.span
								animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
								className="block h-0.5 w-8 bg-black"></motion.span>
							<motion.span animate={{ width: toggled ? 0 : 24 }} className="block h-0.5 w-6 bg-black "></motion.span>
							<motion.span
								animate={{
									rotateZ: toggled ? -45 : 0,
									y: toggled ? -8 : 0,
									width: toggled ? 32 : 16,
								}}
								className="block h-0.5 w-4 bg-black"></motion.span>
						</div>
					</>
				)}
				{toggled && !matches && (
					<motion.div
						animate={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 25 }}
						className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40">
						<div className="flex flex-col gap-24 text-lg">
							<a href="/" onClick={handleLinkClick}>
								Home
							</a>
							<a href="#services" onClick={handleLinkClick}>
								Service
							</a>
							<a href="#contakt" onClick={handleLinkClick}>
								Contakt
							</a>
							<a href="#slider" onClick={handleLinkClick}>
								Portfolio
							</a>
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	)
}

export default Nav