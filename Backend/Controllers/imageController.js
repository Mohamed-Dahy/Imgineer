const userModel = require("../Models/userModel");
const FormData = require('form-data')
const axios = require("axios")
const generateImage = async (req,res) =>{
    try {
        const{userId,prompt} = req.body;
        const user = await userModel.findById(userId);

        if(!user || !prompt){
            return res.status(400).json({ success: false, message: "Missing details" });
        }
        if(user.creditBalance === 0 || user.creditBalance < 0){
            return res.status(400).json({ success: false, message: "No credit balance available!", creditBalance : user.creditBalance});
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
            res.status(201).json({ success: true, message: "Image Generated Successfully", 
                creditBalance : user.creditBalance - 1, resultImage
             });   
        
        
    } catch (error) {
    console.error("Error generating image:", error)
    res.status(500).json({ success: false, message: "Server error" });
    }
};
module.exports = {generateImage};