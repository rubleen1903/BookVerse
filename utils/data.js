const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Shadow and Bone',
        category: 'fantasy',
        image: '/images/book1.jpg',
        price: 70,
        author: 'Leigh Bardugo',
        slug: 'shadow',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular shirt',
      },
      {
        name: 'Karma',
        category: 'Therapy',
        image: '/images/book2.jpg',
        price: 80,
        author: 'Sadhguru',
        slug: 'karma',
        rating: 4.2,
        numReviews: 10,
        countInStock: 20,
        description: 'A new perspective on the overused and misunderstood concept of "karma" that offers the key to happiness and enlightenment, from the world-renowned spiritual master Sadhguru.',
      },
      {
        name: 'The truth we hold',
        category: 'Politics',
        image: '/images/book3.jpg',
        price: 80,
        author: 'Kamala Harris',
        slug:'truthwehold',
        rating: 4.2,
        numReviews: 10,
        countInStock: 20,
        description: 'From Vice President-Elect Kamala Harris, one of Americas most inspiring political leaders, a book about the core truths that unite us, and the long struggle to discern what those truths are and how best to act upon them, in her own life and across the life of our country',
      },
     
    ],
  };
  export default data;