const connections = require('../database/connection');

module.exports={
    async create(request,response){
        const { id } = request.body
        console.log(request.body);
        const ong = await connections('ongs').where('id', id).select("name").first();
        if (!ong){
            return response.status(400).send({"error":"No ONG found with this ID"})
        }
        return response.json(ong);
    }
}