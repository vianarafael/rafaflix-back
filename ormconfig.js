const { Config } = require('@foal/core');

module.exports = {
  type: Config.get('database.type'),
  url: Config.get('database.url'),
  database: process.env.RDS_DB_NAME || Config.get('database.name'),
  port: process.env.RDS_PORT || Config.get('database.port'),
  host: process.env.RDS_HOSTNAME || Config.get('database.host'),
  username: process.env.RDS_USERNAME || Config.get('database.username'),
  password: process.env.RDS_PASSWORD || Config.get('database.password'),
   "entities": [
      "src/entity/**/*.ts"
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

