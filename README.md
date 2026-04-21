# TaskFlow — Task Management System

## Project Overview
TaskFlow is a full-stack web application designed for personal and team productivity. 
It allows users to organize tasks into workspaces, categorize them with tags, and track progress.

## Tech Stack
- **Frontend:** Angular 17+ (Signals, Standalone Components, JWT Interceptor)
- **Backend:** Django REST Framework (JWT Auth, Generic Views, ModelSerializers)
- **Database:** SQLite (Development)

## Core Features
- User Authentication (Signup/Login via JWT)
- Workspace and Task Management (Full CRUD)
- Task Filtering by Priority and Tags
- Responsive UI with Angular Material/CSS

## Group Members
- Nurbay Meyrzhan
- Alzhanbay Alibi
- Olzhabay Kuanysh
  
## Project Structure
- `/backend` - Django REST Framework API
- `/frontend` - Angular Standalone components

## Setup Instructions

### Backend (Django)
1. Navigate to directory: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Run migrations: `python manage.py migrate`
4. Start server: `python manage.py runserver`

### Frontend (Angular)
1. Navigate to directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `ng serve`
4. Open in browser: `http://localhost:4200`

## Features
- JWT Authentication (Login/Logout)
- Workspace Dashboard (Fetch data from REST API)
- Responsive UI Design
- API verified via Talend API Tester
