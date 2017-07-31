// our example model is just an Array
// var facets = [];
import mongoose from 'mongoose';

const facetSchema = mongoose.Schema({
    text: String
});
const facets = mongoose.model('facet', facetSchema);

export default facets;
