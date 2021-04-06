

module.exports = {

  type: "postgres",

  database:  "rafaflix",
  port: process.env.RDS_PORT || 5432,
  host: process.env.RDS_HOSTNAME || "localhost",
  username: process.env.RDS_USERNAME || "ubuntu",
  password: process.env.RDS_PASSWORD || "ubuntu",
   "entities": [
      // "src/entity/**/*.ts",
     __dirname + "/build/entity/**/*.js"
   ],
   "migrations": [
    //  "src/migration/**/*.ts",
     "build/migration/**/*.js"
   ],
   "subscribers": [
    //  "src/subscriber/**/*.ts",
     "build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

