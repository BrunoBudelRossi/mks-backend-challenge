// module.exports = {
//   type: 'sqlite',
//   database: './database.sql',
//   entities: ['genre', 'user', 'movie'],
//   cli: {
//     entitiesDir: 'src/domain',
//   },
//   synchronize: 'true',
// };

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'movies',
  entities: ['genre', 'user', 'movie'],
  synchronize: true,
};
