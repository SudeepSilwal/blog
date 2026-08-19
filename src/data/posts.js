export const posts = [
  {
    id: 1,
    title: 'Getting Started With React',
    slug: 'getting-started-with-react',
    excerpt:
      'A beginner-friendly introduction to React and the concepts you need to understand before building your first application.',
    content: `
React is a JavaScript library for building user interfaces.

In this article, we will look at the basic concepts of React and understand how components work.

React allows us to divide an interface into reusable components. This makes applications easier to build and maintain.

As you continue learning React, you will work with components, props, state, hooks and other concepts.
    `,
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend'],
    date: '2026-08-19',
    readingTime: '5 min read',
    image: '/images/posts/react.jpg',
    featured: true,
  },

  {
    id: 2,
    title: 'Understanding JavaScript Basics',
    slug: 'understanding-javascript-basics',
    excerpt:
      'The JavaScript concepts every beginner should understand before moving into modern frontend development.',
    content: `
JavaScript is one of the most important technologies used in modern web development.

Understanding variables, functions, arrays, objects and asynchronous programming gives you a strong foundation for frontend development.
    `,
    category: 'JavaScript',
    tags: ['JavaScript', 'Programming'],
    date: '2026-08-15',
    readingTime: '4 min read',
    image: '/images/posts/javascript.jpg',
    featured: false,
  },

  {
    id: 3,
    title: 'Building My First Web Application',
    slug: 'building-my-first-web-application',
    excerpt:
      'What I learned while building a real-world web application from planning to implementation.',
    content: `
Building a real application is very different from following a tutorial.

You have to think about architecture, user experience, databases, authentication and deployment.
    `,
    category: 'Projects',
    tags: ['Projects', 'Web Development'],
    date: '2026-08-10',
    readingTime: '6 min read',
    image: '/images/posts/web-app.jpg',
    featured: false,
  },
]