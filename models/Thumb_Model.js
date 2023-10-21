const mongoose =require( "mongoose");
const thumbSchema = new mongoose.Schema(
    {
         
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      
      registration_num: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      }, 
      kendra: {
        type: String,
        required: true,
      },
      kharid_qtl: {
        type: String,
        required: true,
      },
      Amount: {
        type: String,
        required: true,
      },
      payment_done_status: {
        type: String,
        required: true,
      },

      return_amount: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      
    },
    { timestamps: true }
  );
  
const Thumb = mongoose.model("Thumb", thumbSchema); 
module.exports =Thumb;
