const mongoose = require('mongoose')

var authorSchema = new mongoose.Schema({
    name: String, // Tên tác giả
    biography: String, // Tiểu sử tác giả
},
{
    timestamps:true,
}
)
module.exports = mongoose.model("authors",authorSchema)