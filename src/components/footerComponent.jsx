import { ContactButton } from './buttons/contactButtonComponent.jsx'


export const FooterComponent = () => {
	return(
		<div className="bg-white p-6">
			<div className="w-full">
				<div className="flex items-start justify-between py-6 border-b">
					<div className="w-2/4">
						<div className="flex items-start pb-6">
							<img className="w-8 md:w-16 mr-2" src="/logo.png"/>
							<span className="logoName primary text-xl md:text-6xl">CODE CRAFT</span>
						</div>

						<div className="block md:hidden">
							<div className="flex items-center mr-6">
								<img className="w-3 md:w-5 mr-2" src="/icons/instagram.png"/>
								<span className="text-xs md:text-sm font-light">codecraft.it</span>
							</div>

							<div className="flex items-center">
								<img className="w-3 md:w-5 mr-2" src="/icons/phone.png"/>
								<span className="text-xs md:text-sm font-light">264-587-5117</span>
							</div>
						</div>
					</div>

					<div className="w-1/3">
						<p className="text-end text-xs md:text-sm font-semibold md:font-bold">
						¿Tienes una idea en mente? ¡Contáctanos y hagámosla realidad juntos!
						</p>

						<div className="flex justify-end mt-4">
							<ContactButton/>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between pt-6">
					<p className="text-xs md:text-sm text-gray-600 font-light">Copyright @ Code Craft 2024</p>

					<div className="hidden md:flex items-center">
						
						<a href="https://www.instagram.com/codecraft.it/" target="_blank" 
						className="flex items-center mr-6">
							<img className="w-3 md:w-5 mr-2" src="/icons/instagram.png"/>
							<p className="text-xs md:text-sm font-light hover:text-blue-700">codecraft.it</p>
						</a>

						<div className="flex items-center">
							<img className="w-3 md:w-5 mr-2" src="/icons/phone.png"/>
							<span className="text-xs md:text-sm font-light">264-587-5117</span>
						</div>

						
					</div>

				</div>
			</div>
		</div>
	)
}