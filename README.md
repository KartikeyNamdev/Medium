# 📝 Medium - Modern Blogging Platform

A full-stack blogging platform inspired by Medium, built with modern web technologies. This project was born from my passion for creating scalable web applications and my desire to understand the intricacies of building a production-grade blogging platform.

## 🎯 Project Vision
When I started this project, I wanted to challenge myself by building a complex application that would help me grow as a developer. The goal wasn't just to clone Medium, but to understand the architectural decisions that go into building a scalable content platform while putting my own spin on it.

## ✨ Features

### For Readers
- 📚 Browse through a curated collection of articles
- 🏷️ Category-based article organization
- 👤 User profile Updation with real-time updates
- 📱 Fully responsive design optimized for all devices
- 🌙 Dark mode support for comfortable reading

### For Writers
- ✍️ Rich text editor with markdown support
- 📤 Publish/unpublish articles with draft saving
- 📚 Browse through a curated collection of articles
- 🏷️ Category-based article organization
- 📝 Interactive comment system with threading support

## 🛠️ Tech Stack & Architecture Decisions

### Frontend
- **TypeScript**: Chose for type safety and better development experience
- **React**: Selected for its robust ecosystem and component reusability
- **Tailwind CSS**: Enabled rapid UI development with utility-first approach
- **Lucide Icons**: Provided consistent and lightweight iconography
- **Vercel**: Chosen for its seamless deployment and excellent DX

### Backend
- **Cloudflare Workers**: Opted for edge computing benefits and global distribution
- **PostgreSQL**: Selected for robust relational data management
- **JWT Authentication**: Implemented secure, stateless authentication
- **Hono**: Chose for its lightweight and performant nature
- **Prisma**: Selected for type-safe database operations
- **Custom NPM Package (@kartikeynamdev/medium-common)**: Created for code reusability

## 💡 Key Learnings

During this project, I gained valuable experience in:
1. **Edge Computing**: Learned how to leverage Cloudflare Workers for better performance
2. **Database Design**: Improved my skills in designing efficient schemas
3. **Authentication**: Implemented secure user authentication from scratch
4. **Package Publishing**: Created and maintained my first NPM package
5. **Performance Optimization**: Implemented lazy loading and optimization techniques

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/KartikeyNamdev/Medium.git
cd Medium
```

2. Install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
```bash
# Frontend (.env)
DATABASE_URL="https://backend.kartikeynamdev2003.workers.dev"
JWT_TOKEN=your_token

# Backend (.env)
DATABASE_URL
JWT_SECRET
```

4. Run development servers
```bash
# Frontend
npm run dev

# Backend
npm run dev
```

## 🔑 API Routes

### Authentication
- `POST /api/user/signup` - Create new account
- `POST /api/user/signin` - Sign in

### Posts
- `GET /api/v1/blogs` - Get all blogs
- `GET /api/v1/blog/:id` - Get single blog
- `POST /api/v1/blog` - Create post
- `PUT /api/v1/blog/:id` - Update post

## 🎯 Future Improvements

Based on my experience building this project, here are some planned enhancements:
1. Implement real-time notifications using WebSockets
2. Add social authentication options
3. Integrate a rich text editor with better image handling
4. Add analytics dashboard for writers
5. Implement content recommendation system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎉 Project Highlights

Some achievements I'm proud of:
- Successfully implemented edge computing with Cloudflare Workers
- Created and published my first NPM package
- Achieved optimal Lighthouse scores for performance
- Built a scalable authentication system
- Implemented a responsive design that works across all devices

## 👏 Acknowledgments

- Design inspired by Medium
- Icons from Lucide React
- The amazing open-source community
- Special thanks to the Cloudflare Workers team for their excellent documentation

## 📧 Contact

Kartikey Namdev - [@_KartikeyNamdev](https://x.com/_KartikeyNamdev)

Project Link: [https://github.com/kartikeyNamdev/medium](https://github.com/kartikeyNamdev/medium)
