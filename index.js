const mongoose = require('mongoose');
const app = require('./app');
const PORT_SERVER = process.env.PORT || 3977;
const {API_VERSION, IP_SERVER, PORT_DB} = require('./config');

//solucion de una advertencia
mongoose.set("useFindAndModify", false);
//---------------------------------------

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/alexrodas`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        throw err;
    } else {
        console.log('la conexion con la base de datos se realizo correctamente');
        app.listen(PORT_SERVER, () => {
            console.log('##############################');
            console.log('######## API REST ############');
            console.log('##############################');
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
        }); 
    }
});