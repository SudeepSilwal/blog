export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    excerpt: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.',
    content: `
      <p>
        This is a complete e-commerce solution built with modern web technologies.
        It allows businesses to sell products online with a seamless shopping experience.
      </p>

      <h2>Key Features</h2>

      <ul class="check-list">
        <li>User authentication and authorization</li>
        <li>Product catalog with search and filters</li>
        <li>Shopping cart and checkout process</li>
        <li>Payment integration with Stripe</li>
        <li>Order management dashboard</li>
        <li>Real-time inventory tracking</li>
        <li>Email notifications for orders</li>
        <li>Admin panel for product management</li>
      </ul>

      <h2>Technologies Used</h2>

      <ul class="arrow-list">
        <li>Next.js 14 for frontend and API routes</li>
        <li>React for UI components</li>
        <li>Tailwind CSS for styling</li>
        <li>PostgreSQL for database</li>
        <li>Prisma ORM for database management</li>
        <li>Stripe API for payments</li>
        <li>Cloudinary for image hosting</li>
      </ul>

      <blockquote>
        <p>
          This project was built to demonstrate a complete e-commerce flow
          from product browsing to successful checkout.
        </p>
      </blockquote>

      <h2>Challenges & Solutions</h2>

      <p>
        One of the biggest challenges was implementing secure payment processing.
        Using Stripe's API with webhooks ensured that payments were handled
        securely and reliably.
      </p>

      <p>
        Another challenge was managing inventory in real-time. Using Prisma
        with PostgreSQL allowed for atomic updates to prevent overselling.
      </p>
    `,
    category: 'Web Development',
    tags: ['E-commerce', 'Next.js', 'React', 'Stripe', 'PostgreSQL', 'Prisma'],
    date: '2026-09-06',
    readingTime: '6 min read',
    image: 'https://res.cloudinary.com/dqfqxlysk/image/upload/v1788684707/LemonWater.png',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    excerpt: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    content: `
      <p>
        A powerful task management tool designed for teams to collaborate
        effectively. It helps teams organize work, track progress, and
        stay aligned on project goals.
      </p>

      <h2>Key Features</h2>

      <ul class="check-list">
        <li>Create and assign tasks to team members</li>
        <li>Real-time updates with WebSockets</li>
        <li>Team workspaces and permission levels</li>
        <li>Progress tracking and reporting</li>
        <li>File attachments and comments</li>
        <li>Email and in-app notifications</li>
        <li>Task status and priority levels</li>
        <li>Due date reminders</li>
      </ul>

      <h2>Technologies Used</h2>

      <ul class="arrow-list">
        <li>Next.js 14 for frontend</li>
        <li>React for UI</li>
        <li>Tailwind CSS for styling</li>
        <li>MongoDB for database</li>
        <li>Socket.io for real-time updates</li>
        <li>NextAuth.js for authentication</li>
      </ul>

      <div class="article-highlight">
        Real-time collaboration was the core focus of this project,
        allowing team members to see changes instantly.
      </div>

      <h2>Challenges & Solutions</h2>

      <p>
        Implementing real-time updates was challenging. Using Socket.io
        with MongoDB change streams allowed for instant synchronization
        across all connected clients.
      </p>
    `,
    category: 'Web Development',
    tags: ['Task Management', 'Real-time', 'Next.js', 'MongoDB', 'Socket.io'],
    date: '2026-09-05',
    readingTime: '5 min read',
    image: 'https://res.cloudinary.com/dqfqxlysk/image/upload/v1788684707/LemonWater.png',
    github: 'https://github.com/yourusername/taskapp',
    demo: 'https://taskapp-demo.com',
    featured: false,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    excerpt: 'A beautiful weather dashboard with interactive maps, hourly forecasts, and severe weather alerts.',
    content: `
      <p>
        An interactive weather dashboard that provides detailed weather
        information for any location worldwide.
      </p>

      <h2>Key Features</h2>

      <ul class="check-list">
        <li>Current weather conditions</li>
        <li>Hourly and daily forecasts</li>
        <li>Interactive weather maps</li>
        <li>Severe weather alerts</li>
        <li>Location search and favorites</li>
        <li>Responsive design for all devices</li>
        <li>Temperature, humidity, and wind data</li>
        <li>Dark mode support</li>
      </ul>

      <h2>Technologies Used</h2>

      <ul class="arrow-list">
        <li>React for UI</li>
        <li>Next.js for SSR</li>
        <li>Tailwind CSS for styling</li>
        <li>OpenWeather API for data</li>
        <li>Leaflet.js for interactive maps</li>
        <li>Chart.js for data visualization</li>
      </ul>

      <blockquote>
        <p>
          This dashboard was designed to provide weather information at a glance
          with beautiful visualizations and an intuitive interface.
        </p>
      </blockquote>

      <h2>Challenges & Solutions</h2>

      <p>
        Handling API rate limits was a key challenge. Implementing caching
        with Next.js ISR (Incremental Static Regeneration) reduced API calls
        while keeping data fresh.
      </p>
    `,
    category: 'Web Development',
    tags: ['Weather', 'API', 'React', 'Maps', 'Dashboard'],
    date: '2026-09-04',
    readingTime: '4 min read',
    image: 'https://res.cloudinary.com/dqfqxlysk/image/upload/v1788684707/LemonWater.png',
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Image Generator',
    slug: 'ai-image-generator',
    excerpt: 'An AI-powered image generator that creates unique images from text descriptions using stable diffusion.',
    content: `
      <p>
        Generate unique images from text descriptions using AI technology.
        This project leverages stable diffusion to create stunning visuals
        from simple text prompts.
      </p>

      <h2>Key Features</h2>

      <ul class="check-list">
        <li>Text-to-image generation</li>
        <li>Multiple style options (anime, realistic, abstract)</li>
        <li>Image variations and upscaling</li>
        <li>Gallery of generated images</li>
        <li>Download and share images</li>
        <li>User accounts and history</li>
        <li>Favorite and save images</li>
        <li>Community gallery</li>
      </ul>

      <h2>Technologies Used</h2>

      <ul class="arrow-list">
        <li>Next.js 14 for frontend and API</li>
        <li>React for UI components</li>
        <li>Tailwind CSS for styling</li>
        <li>Stable Diffusion API for generation</li>
        <li>Cloudinary for image storage</li>
        <li>Prisma with PostgreSQL for data</li>
      </ul>

      <div class="article-highlight">
        The ability to generate unique images from text opens up endless
        creative possibilities for artists and designers.
      </div>

      <h2>Challenges & Solutions</h2>

      <p>
        The biggest challenge was managing API response times. Implementing
        a queue system with background processing allowed users to continue
        browsing while images were being generated.
      </p>

      <h2>Final Thoughts</h2>

      <p>
        This project demonstrates the power of AI in creative applications.
        It shows how generative AI can be integrated into web applications
        to provide users with unique capabilities.
      </p>
    `,
    category: 'AI & Machine Learning',
    tags: ['AI', 'Image Generation', 'Stable Diffusion', 'Next.js', 'API'],
    date: '2026-09-03',
    readingTime: '7 min read',
    image: 'https://res.cloudinary.com/dqfqxlysk/image/upload/v1788684707/LemonWater.png',
    github: 'https://github.com/yourusername/ai-image-generator',
    demo: 'https://ai-image-demo.com',
    featured: true,
  },
]