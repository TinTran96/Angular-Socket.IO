var MongoClient = require('mongodb').MongoClient;
var url = "<Mongo URL DB HERE>";

module.exports = {
    /**
     * Insert to collection "chatLog" on MongoDB server
     */
    insertChat: function (data) {
        MongoClient.connect(url, function(err, db) {
            var database = db.db('<db name>');
            if (err) throw err;
            var myobj = { username: data.username, content: data.content };
            database.collection("chatLog").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
          });
    },
    /**
     * Find all data in chatLog collection
     */
    findChat: function (callback) {
        var chatLog = [];
        MongoClient.connect(url, function(err, db) {
            var database = db.db('<db name>');
            if (err) throw err;
            database.collection("chatLog").find({}).toArray(function(err, result) {
              if (err) throw err;
              console.log(result);
              callback(result);
              db.close();
            });
          });
    }
  };