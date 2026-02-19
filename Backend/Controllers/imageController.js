const userModel = require("../Models/userModel");
const FormData = require('form-data')
const axios = require("axios")
const generateImage = async (req,res) =>{
    try {
        const{userId,prompt} = req.body;
        const user = await userModel.findById(userId);

        if(!user || ! prompt){
            res.status(500).json({ message: "Missing details" });
        }
        if(user.creditBalance === 0 || userModel.creditBalance < 0){
            res.status(500).json({ message: "M=No credit balance available!" , creditBalance : user.creditBalance});
        }
        const formData = new FormData()
        formData.append('prompt',prompt);
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{
            headers: {
                        'x-api-key': process.env.CLIPFROP_API,
                    },
                    responseType: 'arraybuffer'
            })

            const base64Image = Buffer.from(data,'binary').toString('base64')
            const resultImage = `data:image/png;base64,${base64Image}`;
            await userModel.findByIdAndUpdate(user._id,{creditBalance:
                user.creditBalance -1})
            res.status(201).json({ message: "Image Generated Successfully", 
                creditBalance : user.creditBalance - 1,resultImage
             });   
        
        
    } catch (error) {
    console.error("Error fetching user credits:", error)
    res.status(500).json({ message: "Server error" });
    }
};
module.exports = {generateImage};