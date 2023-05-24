const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;


 //    Mise à jour d'un document en recherchant, modifiant et enregistrant


 const personId = 'your-person-id';

 Person.findById(personId, (err, person) => {
   if (err) {
     console.error(err);
   } else {
     person.favoriteFoods.push('Hamburger');
     person.save((err, updatedPerson) => {
       if (err) {
         console.error(err);
       } else {
         console.log('Person updated:', updatedPerson);
       }
     });
   }
 });

 