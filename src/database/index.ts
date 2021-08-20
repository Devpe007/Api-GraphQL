import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Accont:<password>@apigraphql.kl3ol.mongodb.net/api_graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
