
const dogs = [
  {
    id: 1,
    name: 'Maltese',
    description: 'El Maltese es un perro pequeño y activo ideal para apartamentos.',
    image: '/path/to/maltese.jpg'
  },
  {
    id: 2,
    name: 'Bernese Mountain Dog',
    description: 'El Bernese es un perro grande, ideal para familias activas con espacio.',
    image: '/path/to/bernese.jpg'
  },
  {
    id: 3,
    name: 'Braco Alemán',
    description: 'El Braco es un perro enérgico ideal para personas activas que disfrutan del aire libre.',
    image: '/path/to/braco.jpg'
  },
];

export const determineDog = (answers) => {
  if (answers.includes('Apartamento')) {
    return dogs.find(dog => dog.name === 'Maltese');
  }
  if (answers.includes('Casa grande')) {
    return dogs.find(dog => dog.name === 'Bernese Mountain Dog');
  }
  if (answers.includes('Campo')) {
    return dogs.find(dog => dog.name === 'Braco Alemán');
  }

  return dogs[0];
};

export default dogs;
