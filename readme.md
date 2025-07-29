# Blogging Platform

Welcome to the Blogging Platform, a full-stack web application built with modern technologies to enable users to create, manage, and interact with blog posts. This platform features user authentication, AI-powered content assistance, and a scalable microservices architecture. Whether you're a developer looking to contribute or a user exploring the codebase, this README will guide you through the setup and usage.

## Overview

The Blogging Platform is designed to be a robust, scalable solution for blogging with the following key features:
- **User Authentication**: Secure login via Google OAuth with JWT-based session management.
- **Content Management**: Create, edit, and delete blog posts with image uploads handled by Cloudinary.
- **AI Assistance**: Leverage Google Generative AI for title suggestions and grammar fixes.
- **Interactive Features**: Comment on posts and save them for later.
- **Performance Optimization**: Redis caching and RabbitMQ for async tasks.
- **Scalable Architecture**: Microservices (Author, Blog, User) with PostgreSQL and MongoDB databases.

The application is split into a Next.js-based frontend and a Node.js-based backend with three microservices, ensuring modularity and maintainability.

## Technologies Used

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework.
- **shadcn/ui**: Customizable UI components.

### Backend
- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for APIs.
- **Prisma**: ORM for PostgreSQL.
- **Mongoose**: ODM for MongoDB.

### Databases
- **PostgreSQL (Neon)**: Relational database for blogs and comments.
- **MongoDB**: NoSQL database for user data.

### Infrastructure
- **Redis**: In-memory caching.
- **RabbitMQ**: Message broker for async communication.
- **Docker**: Containerization.

### Integrations
- **Cloudinary**: Image storage and processing.
- **Google OAuth**: Authentication provider.
- **Google Generative AI**: AI-powered content tools.

## Project Structure

### Frontend
- `src/app/`: Page components and routes.
- `src/components/`: Reusable UI elements.
- `src/context/`: Global state management.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions.
- `public/`: Static assets.

### Backend (Microservices)
- **Author Service**: Manages blog creation and updates.
- **Blog Service**: Handles blog retrieval and comments.
- **User Service**: Manages authentication and profiles.
- Each service includes `src/controllers/`, `src/middlewares/`, `src/routes/`, and `src/utils/` directories.
