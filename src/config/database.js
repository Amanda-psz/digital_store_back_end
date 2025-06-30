// require('dotenv').config();

// module.exports = {
//   dialect: process.env.DB_DIALECT || 'postgres',
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
  
//   // Adicione esta linha para uma saída de teste mais limpa
//   logging: false, 
  
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };

require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  define: {
    timestamps: false,
    underscored: true,
  },
};