import { useState, useEffect } from 'react'
import { services } from '../assets/services.jsx'
import { PriceCard } from './priceCard.jsx'




export const PricesComponent = ({prices}) => {
	const [service, setService] = useState(null) 
	useEffect(() =>{
		setService(services[0])
	}, [])

	return(
		<div ref={prices} className="relative my-12 py-6">
			
			<div className="flex justify-center">
				<div>
					<h6 className="logoName primary text-lg text-center md:text-2xl lg:text-4xl">
						PRECIOS
					</h6>

					<div className="flex items-center space-x-2 mt-6">
						{services && services.length > 0 && services.map((Service, i) => {
							return(
								<button key={i} onClick={() => setService(services[i])}
								className={`font-semibold text-sm md:text-base bg-white rounded-3xl px-2 md:px-4 py-2 
								${service == Service ? 'secondaryBack text-white' : ''}`}>
								{Service.title}
								</button>
							)
						})}
					</div>
				</div>
			</div>

			<div className="flex justify-center overflow-x-auto h-1/4">

				<div className={`flex items-start md:grid w-3/4
				${service && service.prices.length == 2 ? 'md:grid-cols-2':'md:grid-cols-3'} gap-4 md:gap-3 rounded mt-10`}>
					{service && service.prices.length > 0 &&
						service.prices.map((level, i) => {
							return(
								<PriceCard key={i} level={level.level} price={level.price} description={level.description}
								subtitle={level.subtitle} desc={level.desc} features={level.features}/>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}