const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlPaser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{console('connected to the database');});

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Importation du contrôleur de personne
const personController = require('./controllers/personController');

// Routes pour les opérations liées à la personne
app.post('/people', personController.createPerson);
app.get('/people', personController.getPeople);
app.put('/people/:id', personController.updatePerson);
app.delete('/people/:id', personController.deletePerson);

// Port d'écoute du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
