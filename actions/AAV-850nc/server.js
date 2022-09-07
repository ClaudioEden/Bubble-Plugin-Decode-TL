function(properties, context) {
    
	const encodeComponentURL = encodeURIComponent(properties.text_to_encode);
    
    return{
        text_encoded: encodeComponentURL
    }
}