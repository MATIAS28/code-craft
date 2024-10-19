




export const ServicesComponent = ({qo}) => {
	return(
		<div ref={qo} className="flex items-start h-fit my-20">
			<div>
				<h4 className="logoName primary text-lg  md:text-2xl border-l-4 pl-4">
				¿Que ofrecemos?
				</h4>

			<div className="grid gap-2 grid-cols-2 md:grid-cols-3 rounded mt-10">
				<div className="bg-white p-4">
					<img src="/icons/design.png" className="secondaryBack p-2 w-12 h-12 rounded mb-2"/>
					<b className="text-sm md:text-lg">Creación de Sitios Web Personalizados</b>
					<p className="text-xs md:text-base font-light">
						Entregar productos de alta calidad que superen las 
						expectativas de nuestros clientes.
					</p>
				</div>

				<div className="bg-white p-4">
					<img src="/icons/mp.png" className="secondaryBack p-2 w-12 h-12 rounded mb-2"/>
					<b className="text-sm md:text-lg">Innovación</b>
					<p className="text-xs md:text-base font-light">
						Mantenernos actualizados con las últimas tendencias 
						y tecnologías web para ofrecer soluciones modernas.
					</p>
				</div>

				<div className="bg-white p-4">
					<img src="/icons/google.png" className="secondaryBack p-2 w-12 h-12 rounded mb-2"/>
					<b className="text-sm md:text-lg">Compromiso</b>
					<p className="text-xs md:text-base font-light">
						Asumir cada proyecto con responsabilidad y dedicación, 
						garantizando su éxito
					</p>
				</div>

				<div className="bg-white p-4">
					<img src="/icons/card.png" className="secondaryBack p-2 w-12 h-12 rounded mb-2"/>
					<b className="text-sm md:text-lg">Integración con Plataformas de Pago</b>
					<p className="text-xs md:text-base font-light">
						Configuramos pasarelas de pago seguras y confiables, como 
						MercadoPago o PayPal, para que puedas recibir pagos de forma fácil y rápida.
					</p>
				</div>

				<div className="bg-white p-4">
					<img src="/icons/web.png" className="secondaryBack p-2 w-12 h-12 rounded mb-2"/>
					<b className="text-sm md:text-lg">Configuración de Dominio y Hosting</b>
					<p className="text-xs md:text-base font-light">
						Te ayudamos a registrar tu dominio y configurar el hosting adecuado para 
						tu sitio web, asegurando un rendimiento óptimo desde el primer día.!
					</p>
				</div>

			</div>
			</div>
		</div>
	)
}