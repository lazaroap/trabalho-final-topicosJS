module.exports = {
  "type": 'postgres',
  "host": process.env.DB_HOST,
  "port": +process.env.DB_PORT || 5432,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "cache":{duration:20000}, //tempo de vida do cache
  "entities": ['dist/**/*.entity{.ts,.js}'],
  "migrations": ['dist/database/migrations/**/*.js'],
  "synchronized":false,
  "cli": {
    "entitiesDir": ['src/**/*.entity'],
    "migrationsDir": ['src/database/migrations/'],
  },
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true,
}; 
