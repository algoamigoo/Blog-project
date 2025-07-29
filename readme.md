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
<img width="2083" height="834" alt="deepseek_mermaid_20250729_809d16" src="https://github.com/user-attachments/assets/97b1f368-1529-4787-b1a5-0eca4cabb212" />


## Data Flow
<img width="4644" height="1521" alt="deepseek_mermaid_20250729_a52ab7" src="https://github.com/user-attachments/assets/5393f887-49ff-47ae-8e80-be5d229a742c" />

### Blog Creation
- **Frontend** → **Author Service**: Initiates a `POST /api/author/blogs` request with content and image.
- **Author Service** → (**Cloudinary** + **PostgreSQL**):
  - Uploads image to Cloudinary and stores the URL.
  - Saves blog metadata (e.g., title, content, author ID) to PostgreSQL.
- **PostgreSQL** → **RabbitMQ**: Triggers cache invalidation message after saving.
- **RabbitMQ**: Notifies the Blog Service to update caches.

### Blog Fetching
- **Cache Hit**: 
  - **Redis** → **Frontend**: Serves cached blog data directly if available.
- **Cache Miss**: 
  - **PostgreSQL** → **Redis**: Fetches data from PostgreSQL and caches it in Redis.
  - **Redis** → **Frontend**: Delivers the cached data to the frontend.

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: Shadcn/ui + Tailwind CSS
- **State Management**: React Context
- **Rich Text**: Jodit Editor

### Backend Services
| Service   | Database  | Key Dependencies         |
|-----------|-----------|---------------------------|
| User      | MongoDB   | mongoose, jsonwebtoken    |
| Author    | PostgreSQL| neon, cloudinary          |
| Blog      | Redis     | redis, amqplib            |

### Infrastructure
- **Hosting**: Vercel (Frontend), Render (Backend)
- **CI/CD**: GitHub Actions

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

## Prerequisites

Before setting up the project, ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Docker** (for containerized services)
- **Git**
- A code editor (e.g., VS Code)

You’ll also need API keys and credentials for:
- Google OAuth
- Google Generative AI
- Cloudinary
- PostgreSQL (Neon)
- MongoDB
- Redis
- RabbitMQ

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/blogging-platform.git
cd blogging-platform
