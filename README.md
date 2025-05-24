# Video Streaming System

A containerized video streaming platform built using Node.js microservices, MySQL, and Docker Compose. This project allows authenticated users to upload and stream videos through a simple backend architecture.

---

## Microservices Architecture

The system consists of the following services:

1. **Authentication Service**  
   - Verifies users via username/password (stored in MySQL)
   - Built with Node.js and Express

2. **Video Uploading Web App**  
   - Allows users to upload videos after authentication
   - Saves metadata to MySQL and video files to the filesystem service

3. **Video Streaming Web App**  
   - Displays all uploaded videos for authenticated users
   - Fetches video files from the filesystem and metadata from MySQL

4. **Filesystem Service**  
   - Handles video file storage using `multer` and `fs` modules

5. **MySQL Database**  
   - Stores user credentials and video metadata

## Requirements

- Docker
- Docker Compose

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ahmdjaber/video-streaming-app.git
   cd video-streaming-system
   ```

2. **Run the services:**
   ```bash
   docker-compose up --build
   ```

3. **Access the services:**
  - Upload videos: http://localhost:5001/api/upload
  - Stream videos: http://localhost:5002/api/stream
  - Auth service: http://localhost:5000/api/auth

## Notes
  - Uploaded videos are stored in a shared Docker volume (filesystem_data)
  - Video metadata is stored in a MySQL container (mysql_data)
  - All services are containerized and networked using Docker Compose


