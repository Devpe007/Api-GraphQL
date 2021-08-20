import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://AndDev07:pele@2011@apigraphql.kl3ol.mongodb.net/api_graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});