import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const HeroComponent = () => {
	return(
		<div className="flex items-center justify-between">
			<div className="w-3/5">
				<h1 className="text-base md:text-3xl lg:text-6xl font-extrabold mb-4">
				Lleva <span className="secondary">Tu Negocio</span> al Siguiente Nivel con una Página Web Personalizada
				</h1>
				<ContactButton/>
			</div>

			<div className="w-2/5">
				<img className="w-full" src="/banners/b1.png"/>
			</div>

		</div>
	)
}