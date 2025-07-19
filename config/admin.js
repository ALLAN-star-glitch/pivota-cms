module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  app: {
      name: 'pivota-cms',
    },
});
