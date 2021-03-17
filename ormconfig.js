

module.exports = {

  type: "postgres",

  database:  "postgresdb",
  port: process.env.RDS_PORT || 5432,
  host: process.env.RDS_HOSTNAME || "localhost",
  username: process.env.RDS_USERNAME || "postgres",
  password: process.env.RDS_PASSWORD || "sharck",
   "entities": [
      // "src/entity/**/*.ts"
     "build/entity/**/*.js"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}

