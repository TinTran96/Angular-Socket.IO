# AngularSocket.IO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.
## Using
* [Angular 4](http://angular.io/)
* [socket.io v2.0.4](https://www.npmjs.com/package/socket.io)
* [socket.io-client v2.0.4](https://www.npmjs.com/package/socket.io-client)
* [express v4.16.2](https://www.npmjs.com/package/express)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

## Getting Started

1. Clone the project to your computer.
2. Run `npm install`.

## For the Angular design webpage with change refresh.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## For the develope on Nodejs Server
1. Run `ng build` to build the project. The NodeJS server will run the folder `dist` after build. Care to check every changing before build.
2. Run `node server.js`. Navigate to `http://localhost:3000/`. Every change on file `server.js`.

## Config MongoDB
Go to `db.js` file and config for MongoDB

       var url = "<Mongo URL DB HERE>";
       ...
       var database = db.db('<db name>');
       
I'm using [mLab](https://mlab.com/) free MongoDB, for example
* <Mongo URL DB HERE> : mongodb://<dbuser>:<dbpassword>@ds036617.mlab.com:36617/testingmongo
* <db name> : testingmongo
  



