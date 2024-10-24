




export const AboutComponent = ({about}) => {
	return(
		<div ref={about} className="flex md:items-center justify-center my-16 md:my-0">
			<div className="">
				<div className="">
				<h3 className="logoName primary text-lg  md:text-2xl border-l-4 pl-4">
					Sobre Nosotros
				</h3>

				<p className="text-xs md:text-lg mt-6">
					Somos una empresa dedicada al diseño y desarrollo 
					de páginas web personalizadas, con un enfoque en 
					optimización SEO y adaptación a dispositivos móviles. 
					Nuestro objetivo es ayudar a las empresas de San Juan 
					a mejorar su presencia en línea y atraer más clientes.
				</p>
			</div>

			<div className="flex justify-center mt-10">
				<div className="flex items-start bg-white rounded h-56 md:h-32">
					<div className="primaryBack text-white w-2/5 p-3 h-full">
						<b className="text-sm md:text-lg">Calidad</b>
						<p className="text-xs md:text-base font-light">
							Entregar productos de alta calidad que superen las 
							expectativas de nuestros clientes.
						</p>
					</div>

					<div className="w-2/5 secondaryBack text-white p-3 h-full">
						<b className="text-sm md:text-lg">Innovación</b>
						<p className="text-xs md:text-base font-light">
							Mantenernos actualizados con las últimas tendencias 
							y tecnologías web para ofrecer soluciones modernas.
						</p>
					</div>

					<div className="primaryBack text-white w-2/5 p-3 h-full">
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