import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const HeroComponent = () => {
	return(
		<div className="flex items-start md:items-center justify-between h-72 md:min-h-screen p-3 md:p-6">
			<div className="w-3/5">
				<h1 className="text-lg md:text-3xl lg:text-6xl font-extrabold mb-4">
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