




export const AboutComponent = ({about}) => {
	return(
		<div ref={about} className="flex items-center md:min-h-screen my-16 md:my-0">
			<div>
				<div className="w-full">
				<h3 className="logoName primary text-center text-lg  md:text-2xl lg:text-4xl">
					Sobre Nosotros
				</h3>

				<p className="text-center text-sm md:text-lg">
					Somos una empresa dedicada al diseño y desarrollo 
					de páginas web personalizadas, con un enfoque en 
					optimización SEO y adaptación a dispositivos móviles. 
					Nuestro objetivo es ayudar a las empresas de San Juan 
					a mejorar su presencia en línea y atraer más clientes.
				</p>
			</div>

			<div className="flex justify-center mt-10">
				<div className="flex items-start bg-white rounded md:w-2/4">
					<div className="w-1/3 p-3">
						<b className="text-sm md:text-lg">Calidad</b>
						<p className="text-xs md:text-base font-light">
							Entregar productos de alta calidad que superen las 
							expectativas de nuestros clientes.
						</p>
					</div>

					<div className="w-1/3 secondaryBack text-white p-3">
						<b className="text-sm md:text-lg">Innovación</b>
						<p className="text-xs md:text-base font-light">
							Mantenernos actualizados con las últimas tendencias 
							y tecnologías web para ofrecer soluciones modernas.
						</p>
					</div>

					<div className="w-1/3 p-3">
						<b className="text-sm md:text-lg">Compromiso</b>
						<p className="text-xs md:text-base font-light">
							Asumir cada proyecto con responsabilidad y dedicación, 
							garantizando su éxito
						</p>
					</div>
				</div>
			</div>

			</div>
		</div>
	)
}