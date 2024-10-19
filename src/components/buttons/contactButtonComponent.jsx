


export const ContactButton = () => {
	const whatsAppLink = 'https://wa.me/2645875117'
	return(
		<a href={whatsAppLink} target="_blank" rel="noopener noreferrer"
		className="secondaryBack px-3 py-2 font-bold logoName text-white rounded text-xs md:text-lg">
			CONTACTAR
		</a>
	)
}