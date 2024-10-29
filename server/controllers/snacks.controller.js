import Snack from "../models/snack.model.js"

const SnackController = {
    getAll: async (req, res)=>{
        try{
            const allSnacks = await Snack.find(); // without anything in (), find all
            res.json(allSnacks);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    getOne: async (req, res)=>{
        try{
            const oneSnack = await Snack.findById(req.params.id); // Both work!
            res.json(oneSnack);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    create: async (req, res)=>{
        try{
            const newSnack = await Snack.create(req.body); // mongoose functions are async 
            res.json(newSnack)
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

            const updatedSnack = await Snack.findByIdAndUpdate(req.params.id, req.body , options);
            res.json(updatedSnack);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 

        }
    },
    delete: async (req, res)=>{
        try{
            const deletedSnack = await Snack.findByIdAndDelete(req.params.id);
            res.json(deletedSnack);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
}

export default SnackController