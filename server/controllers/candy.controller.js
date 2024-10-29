import Candy from "../models/candy.model.js"

const CandyController = {
    getAll: async (req, res)=>{
        try{
            const allCandys = await Candy.find(); // without anything in (), find all
            res.json(allCandys);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    getOne: async (req, res)=>{
        try{
            // const oneCandy = await Candy.findOne({_id: req.params.id});
            const oneCandy = await Candy.findById(req.params.id); // Both work!
            res.json(oneCandy);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    create: async (req, res)=>{
        try{
            const newCandy = await Candy.create(req.body); // mongoose functions are async 
            res.json(newCandy)
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    update: async (req, res)=>{
        try{
            const options = {
                new: true, // returned result is the updated object 
                runValidators: true // to enable the validation in update
            }

            const updatedCandy = await Candy.findByIdAndUpdate(req.params.id, req.body , options);
            res.json(updatedCandy);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 

        }
    },
    delete: async (req, res)=>{
        try{
            const deletedCandy = await Candy.findByIdAndDelete(req.params.id);
            res.json(deletedCandy);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
}

export default CandyController