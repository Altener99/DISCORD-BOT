const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
        globalName: {
    
            type: String,
        },
        content: {
    
            type: String,
           
        },
        date: {
    
            type: Date,
            requreid:true
        },
        avatar: {
    
            type: String,
        },
        userId: {

            type: String,

        }
    });

module.exports = mongoose.model('Message', messageSchema);