// config.js (ES Module version)

const config = {
  PORT: process.env.PORT || 3003,
  statusCode: [200, 500, 401, 400, 403],
  MAXFILES: "7d",
  LABEL: 'BACKEND-API'
};

export default config;
