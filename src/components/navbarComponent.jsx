import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const NavbarComponent = ({scrollToSection}) => {

	return(
		<nav className="sticky flex items-center justify-between p-3 md:p-6">
			<div className="flex items-center">
				<img className="w-5 md:w-10 mr-2" src="/logo.png"/>
				<span className="logoName primary text-sm md:text-4xl">CODE CRAFT</span>
			</div>

			<div className="flex text-xs md:text-xl font-semibold">
				<button id="about" onClick={scrollToSection} className="mr-3">Nosotros</button>
				<button id="qo" onClick={scrollToSection} className="mr-3">¿Que ofrecemos?</button>
				<button id="prices" onClick={scrollToSection}>Precios</button>
			</div>

			<div className="hidden md:block">
				<ContactButton/>
			</div>
		</nav>
	)
}