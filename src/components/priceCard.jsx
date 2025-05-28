import checkIcon from '../assets/checkIcon.svg'


export const PriceCard = ({level, price, subtitle, description, features}) => {
	const whatsAppLink = 'https://wa.me/2645875117'
	return(
		<div className="flex-none border bg-white rounded-lg space-y-3 w-80 md:w-full">
			<div className="border-b-2 p-6">
				<p className="text-lg">{level}</p>
				<p className="text-3xl font-semibold">${price}</p>
				<p className="text-lg font-semibold primary">{subtitle}</p>
			</div>
			<div className="p-4 space-y-4">
				<div className="mb-6">
					<p className="font-semibold">Características</p>
					<p className="text-gray-500 text-xs">{description}</p>
				</div>
				{features.map((feature, i) => {
					return(
					<div className="flex items-start" key={i}>
					<img src={checkIcon} className="secondaryBack w-5 p-1 rounded-full mr-2" alt="diseno-web-san-juan-negocio"/>
					<p className="text-xs md:text-sm font-light">{feature}</p>
					</div>
					)
				})}
			</div>
			<a href={whatsAppLink} target="_blank"
			className="flex justify-center secondaryBack text-white font-semibold w-full rounded-b-lg p-2">
				CONTACTAR
			</a>
		</div>
	)
}