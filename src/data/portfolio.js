const profile = {
  name: 'Sashank Namana',
  role: 'Aspiring Full-Stack Developer',
  tagline:
    'I build clean, responsive, and performant web applications with modern technologies.',
  email: 'sashank.namana@example.com',
  location: 'India',
  socials: [
    { label: 'GitHub', url: 'https://github.com/yourusername' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  ],
  about: [
    'I am a passionate developer who loves turning ideas into polished products. I specialize in building full-stack web applications using the MERN stack, with a strong focus on clean code and great user experience.',
    'When I am not coding, you will find me exploring new technologies, contributing to open source, or sharpening my problem-solving skills through competitive programming.',
  ],
  skills: {
    'Programming Languages': ['java', 'javascript'],
    'Web Technologies': [
      'html5',
      'css3',
      'tailwindcss',
      'react',
      'nodejs',
      'express',
    ],
    Databases: ['mongodb', 'mysql'],
    Tools: ['vscode', 'intellij', 'git', 'github'],
  },
  skillNames: {
    html5: 'HTML',
    css3: 'CSS',
    java: 'Java',
    javascript: 'JavaScript',
    react: 'React.js',
    nodejs: 'Node.js',
    express: 'Express.js',
    mongodb: 'MongoDB',
    mysql: 'MySQL',
    vscode: 'VS Code',
    intellij: 'IntelliJ IDEA',
    git: 'Git',
    github: 'GitHub',
    tailwindcss: 'Tailwind CSS',
  },
  projects: [
    {
      title: 'TaskFlow',
      description:
        'A full-stack task management app with authentication, real-time updates, and drag-and-drop kanban boards.',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
      repo: 'https://github.com/yourusername/taskflow',
      demo: 'https://taskflow.example.com',
    },
    {
      title: 'ShopCart',
      description:
        'An e-commerce platform with cart, payments, order tracking, and an admin dashboard for inventory.',
      tech: ['React', 'Redux', 'Node.js', 'Stripe'],
      repo: 'https://github.com/yourusername/shopcart',
      demo: 'https://shopcart.example.com',
    },
    {
      title: 'DevBlog API',
      description:
        'A RESTful blog API with user roles, JWT auth, comments, and file uploads, documented with Swagger.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      repo: 'https://github.com/yourusername/devblog-api',
      demo: '',
    },
    {
      title: 'Weatherly',
      description:
        'A minimal weather app consuming OpenWeatherMap, with location search and a 5-day forecast.',
      tech: ['React', 'CSS', 'REST API'],
      repo: 'https://github.com/yourusername/weatherly',
      demo: 'https://weatherly.example.com',
    },
  ],
}

export default profile