const { app } = require('./app');
const { Repair } = require('./models/repairModels');
const { User } = require('./models/userModels');
const { db } = require('./utils/data');
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

User.hasMany(Repair);
Repair.belongsTo(User);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Express app runnning in: ${PORT}`);
});
