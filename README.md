# CodeCatalyst Solutions - Full-Stack Web Application

Welcome to **CodeCatalyst Solutions**. This repository contains the code for a modern, full-stack web application built using **React** for the frontend, **Express** and **MongoDB** for the backend, with a responsive design, animations, and a clean UI/UX.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Installation and Setup](#installation-and-setup)
5. [Running the Application](#running-the-application)
6. [Technologies Used](#technologies-used)
7. [Screenshots](#screenshots)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Project Overview**

This project provides a fully-functional business website for **CodeCatalyst Solutions**. It includes a responsive design with animations, dark mode, career form submission, testimonials slider, contact form, and more.

### **Key Functionalities**:
- **Frontend**: Built with **React** and **SCSS** for styling, includes a dark mode toggle and animations using GSAP.
- **Backend**: **Express** server handles form submissions for contact and career applications, connecting to a **MongoDB** database.
- **Responsive Design**: Optimized for mobile-first design and looks great on all devices.
- **Animations**: Powered by **GSAP** for smooth transitions and dynamic scrolling effects.
  
---

## **Features**

- **Responsive Layout** for mobile and desktop views.
- **Dark Mode** switch for improved user experience.
- **Smooth Animations** using GSAP for enhanced visual appeal.
- **Form Handling** for contact and career application submissions.
- **Integrated Testimonials** slider with auto-scrolling.
- **Cloud Solutions and Custom Development** service descriptions.

---

## **File Structure**

```bash
code-catalyst-solutions/
├── backend/
│   ├── server.js               # Express backend server
│   └── models/                 # MongoDB Mongoose models
│       ├── contact.js          # Contact form model
│       └── career.js           # Career application model
├── frontend/
│   ├── public/
│   │   ├── images/             # Static images
│   │   │   ├── hero-bg.jpg     # Background image for hero section
│   │   │   ├── service1.jpg    # Image for service 1
│   │   │   └── service2.jpg    # Image for service 2
│   ├── src/
│   │   ├── components/         # React component files
│   │   │   ├── About.js        # About section
│   │   │   ├── Blog.js         # Blog section
│   │   │   ├── Careers.js      # Careers form
│   │   │   ├── Contact.js      # Contact form
│   │   │   ├── FAQ.js          # FAQ section
│   │   │   ├── Header.js       # Header with dark mode toggle
│   │   │   ├── Hero.js         # Hero section with animation
│   │   │   ├── Services.js     # Services section
│   │   │   └── Testimonials.js # Client testimonials
│   │   ├── App.js              # Main React App component
│   │   ├── App.scss            # Global SCSS styles
│   │   ├── index.js            # React DOM entry point
│   └── index.html              # HTML entry point
├── package.json                # Dependencies and scripts for the project
└── README.md                   # Project documentation
```

---

## **Installation and Setup**

Follow these steps to get the project running locally.

### **Prerequisites**
- Node.js (v14 or later)
- MongoDB (running locally or hosted on a cloud service like MongoDB Atlas)

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/code-catalyst-solutions.git
cd code-catalyst-solutions
```

### **Step 2: Install Dependencies**

1. **Backend:**
   ```bash
   cd backend
   npm install
   ```

2. **Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

### **Step 3: Set Up MongoDB**

Make sure MongoDB is running locally or provide a connection string to a MongoDB cloud instance. You can configure the connection in `backend/server.js`.

### **Step 4: Start the Backend**

Start the Express server to handle the API routes.
```bash
cd backend
node server.js
```

The backend should now be running on `http://localhost:5000`.

### **Step 5: Start the Frontend**

Run the frontend React app:
```bash
cd frontend
npm start
```

The frontend app will run on `http://localhost:3000` by default.

---

## **Running the Application**

1. Start the **backend server**:
   ```bash
   cd backend
   node server.js
   ```

2. Start the **frontend React app**:
   ```bash
   cd frontend
   npm start
   ```

---

## **Technologies Used**

### **Frontend**:
- **React**: JavaScript library for building user interfaces.
- **SCSS**: CSS preprocessor for more maintainable and flexible styles.
- **GSAP**: JavaScript animation library for smooth transitions and animations.
- **Swiper.js**: Responsive slider used for testimonials.

### **Backend**:
- **Express.js**: Web framework for handling API requests.
- **MongoDB**: NoSQL database for storing form submissions.
- **Mongoose**: ODM library for MongoDB.

### **Other**:
- **Node.js**: JavaScript runtime environment.
- **Nodemon**: For auto-restarting the server during development.

---

## **Screenshots**

### **Homepage**
![Hero Section](frontend/public/images/hero-bg.jpg)

---

## **Contributing**

Feel free to fork this project and submit pull requests. You can open issues for any bugs or feature requests you may have.