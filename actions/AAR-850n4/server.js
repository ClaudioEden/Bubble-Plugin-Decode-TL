function(properties, context) {
    
	const encodeURL = encodeURI(properties.text_to_encode);
    
    return{
        text_encoded: encodeURL
    }
}