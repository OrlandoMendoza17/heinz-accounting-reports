
const config = {
  dbHost: process.env.DB_HOST ?? "",
  dbUser: process.env.DB_USER ?? "",
  dbPassword: process.env.DB_PASSWORD ?? "",
  dbName: process.env.DB_NAME ?? "",
  dbInstance: process.env.DB_INSTANCE ?? "",
  dbPort: "",
}

console.log("config", config)

export default config;