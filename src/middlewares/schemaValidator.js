export function schemaValidator(schema){
    
    return (req, res, next) => {
    
        const validation = schema.validate(req.body, {abortEarly: false});
        
        if(validation.error){
            const details = validation.error.details;
            return res.status(422).send(details.map(detail => detail.message));
            
        } else {
            next();
        }
    }
}