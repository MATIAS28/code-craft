import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const NavbarComponent = ({scrollToSection}) => {

	return(
		<nav className="flex justify-center py-6">
			<div className="flex justify-between w-[90%]">
				<div className="flex items-center">
					<img className="w-5 md:w-10 mr-2" src="/logo.png" alt="code craft"/>
					<h1 className="logoName primary text-lg md:text-4xl">CODE CRAFT</h1>
				</div>

				<div className="flex text-xs md:text-xl font-semibold">
					<button id="about" onClick={scrollToSection} className="mr-3">Nosotros</button>
					<button id="qo" onClick={scrollToSection} className="hidden sm:block mr-3">¿Que ofrecemos?</button>
					<button id="prices" onClick={scrollToSection}>Precios</button>
				</div>

				<div className="hidden md:block">
					<ContactButton/>
				</div>
			</div>
		</nav>
	)
}