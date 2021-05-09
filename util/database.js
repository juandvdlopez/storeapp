const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

// M'etodo para conectar  y almacenar la conexi'on a la DB 
const mongoConnect = (callback) => {
    MongoClient.connect(
        "mongodb+srv://JuanD:jt6CB1dGQwdq8Wbf@curso-nodejs.jbexb.gcp.mongodb.net/shop?retryWrites=true&w=majority"
      )
        .then(client => {
          console.log ('Connected!')  
          _db= client.db()
           callback(); 
        })
        .catch((err) => {
          console.log(err);
          throw err; 
        });
};
// devuelvo el acceso a a esa base de datos 
const getDb =() => {
    if(_db){
        return _db; 
    }
    throw 'No Database found!';
}

exports.mongoConnect = mongoConnect; 
exports.getDb = getDb; 

