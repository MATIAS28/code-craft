import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const HeroComponent = () => {
	return(
		<div className="flex items-start md:items-center justify-between p-3 md:p-6 mb-16">
			<div className="w-4/5">
				<h1 className="text-base md:text-3xl lg:text-6xl font-extrabold mb-8">
				Páginas web rápidas, económicas y de alta calidad en San Juan
				</h1>
				<ContactButton/>
			</div>

			<div className="w-2/5 lg:w-3/5">
				<img className="w-full" src="/banners/b1.png" alt="Diseño web san juan"/>
			</div>

		</div>
	)
}