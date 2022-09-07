function(properties, context) {
    
	const decodedComponentURL = decodeURIComponent(properties.text_to_decode);
    
    return{
        text_decoded: decodedComponentURL
    }
}