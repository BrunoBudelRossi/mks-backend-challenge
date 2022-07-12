if (process.env.NODE_ENV === 'development') {
  module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['genres', 'users', 'movies'],
    synchronize: true,
  };
} else {
  module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    ssl: true,
    extra: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    entities: ['genres', 'users', 'movies'],
  };
}
