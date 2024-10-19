








export const DescriptionComponent = () => {
	return(
		<div className="secondaryBack rounded-lg flex items-center justify-between md:justify-around p-3 md:p-6 md:min-h-screen">
			<div className="w-full md:w-3/5">
				<div className="flex items-start justify-between">
					<h5 className="text-base md:text-xl lg:text-4xl font-extrabold mb-4 text-white w-3/5 sm:w-full">
					Haz Crecer tu Negocio en San Juan con una Web que Atrae Clientes
					</h5>

					<div className="block sm:hidden w-32">
						<img className="w-full" src="/banners/b2.png"/>
					</div>

				</div>

				<p className="text-xs md:text-lg text-white">
				Diseñamos páginas web personalizadas y optimizadas para SEO 
				en San Juan, asegurando que tu negocio aparezca en los primeros 
				resultados de Google. Aumenta tu visibilidad local y atrae más 
				clientes con un sitio rápido y adaptado a móviles.
				</p>
			</div>

			<div className="hidden sm:block w-52 md:w-72">
				<img className="w-full" src="/banners/b2.png"/>
			</div>

		</div>
	)
}