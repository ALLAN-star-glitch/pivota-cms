module.exports = ({ env }) => {
  console.log("RENDER_EXTERNAL_URL:", env("RENDER_EXTERNAL_URL"));
  console.log("APP_KEYS:", env("APP_KEYS"));

  return {
    url: env("RENDER_EXTERNAL_URL"),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
