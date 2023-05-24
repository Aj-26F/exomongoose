
const Person = require('../models/person');

// Créer une personne
exports.createPerson = (req, res) => {
  const { name, age, favoriteFoods } = req.body;

  const person = new Person({
    name,
    age,
    favoriteFoods
  });

  person.save((err, data) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while creating the person' });
    }
    else {
      res.status(201).json(data);
    }
  });
};

// Obtenir toutes les personnes
exports.getPeople = (req, res) => {
  Person.find({}, (err, people) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while retrieving people' });
    } else {
      res.json(people);
    }
  });
};

// Mettre à jour une personne
exports.updatePerson = (req, res) => {
  const { id } = req.params;
  const { name, age, favoriteFoods } = req.body;

  Person.findByIdAndUpdate(id, { name, age, favoriteFoods }, { new: true }, (err, updatedPerson) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while updating the person' });
    } else {
      res.json(updatedPerson);
    }
  });
};

// Supprimer une personne
exports.deletePerson = (req, res) => {
  const { id } = req.params;

  Person.findByIdAndRemove(id, (err, removedPerson) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while deleting the person' });
    } else {
      res.json(removedPerson);
    }
  });
};

// creation et enregistrement d'un enregistrement de modele


   const personSchema = new mongoose.Schema({
     name: { type: String, required: true },
     age: Number,
     favoriteFoods: [String]
   });

   const Person = mongoose.model('Person', personSchema);

   const person = new Person({
     name: 'John Doe',
     age: 30,
     favoriteFoods: ['Pizza', 'Burger']
   });

   person.save((err, data) => {
     if (err) {
       console.error(err);
     } else {
       console.log('Person saved successfully:', data);
     }
   });

      //    Création de plusieurs enregistrements avec `Model.create()


   const arrayOfPeople = [
     { name: 'Alice', age: 25, favoriteFoods: ['Pasta', 'Salad'] },
     { name: 'Bob', age: 35, favoriteFoods: ['Sushi', 'Steak'] }
   ];

   Person.create(arrayOfPeople, (err, data) => {
     if (err) {
       console.error(err);
     } else {
       console.log('People created successfully:', data);
     }
   });


     //    Recherche de personnes par nom avec `Model.find()


   Person.find({ name: 'Alice' }, (err, people) => {
     if (err) {
       console.error(err

);
     } else {
       console.log('People found:', people);
     }
   });

    //    Recherche d'une seule personne par un aliment préféré avec `Model.findOne()


   Person.findOne({ favoriteFoods: 'Pizza' }, (err, person) => {
     if (err) {
       console.error(err);
     } else {
       console.log('Person found:', person);
     }
   });


    //    Recherche d'une personne par son `_id` avec `Model.findById()


   const personId = 'your-person-id';

   Person.findById(personId, (err, person) => {
     if (err) {
       console.error(err);
     } else {
       console.log('Person found:', person);
     }
   });

    //    Mise à jour d'un document à l'aide de `Model.findOneAndUpdate()

   
   const personName = 'Alice';

   Person.findOneAndUpdate(
     { name: personName },
     { age: 20 },
     { new: true },
     (err, updatedPerson) => {
       if (err) {
         console.error(err);
       } else {
         console.log('Person updated:', updatedPerson);
       }
     }
   );

//    Utilisation de Query Helpers pour affiner les résultats de recherche :

    
    Person.find({ favoriteFoods: 'Burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec((err, people) => {
        if (err) {
          console.error(err);
        } else {
          console.log('People found:', people);
        }
      });
    
   



