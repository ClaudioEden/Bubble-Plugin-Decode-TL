function(properties, context) {
    
	const decodedURL = decodeURI(properties.text_to_decode);
    
    return{
        url_decoded: decodedURL
    }
}