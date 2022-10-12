import mongoose from 'mongoose';

const nameSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
})

var NameData = mongoose.model('NameData', nameSchema);

export default NameData;