"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

const courses = [
  {
    title: "HTML, CSS & JavaScript",
    description:
      "Learn modern web development practices with hands-on projects, professional-level skills, and the latest industry trends.",
    modules: [
      {
        title: "Module 1: Semantic HTML & Modern Page Structure",
        points: [
          "Document structure and semantic markup (HTML5 elements: header, footer, article, section, aside, etc.)",
          "Forms and validation techniques (form elements, validation attributes, custom validation functions)",
          "Multimedia integration (video, audio, iframe, embedding external content)",
          "Creating responsive tables and accessible tables using `table`, `thead`, `tbody`, `tfoot`",
          "SEO best practices for semantic HTML",
          "Accessibility best practices (aria-* tags, roles, keyboard navigation, screen readers)",
          "HTML5 APIs and features (Canvas for drawing, localStorage for storage, Geolocation API, etc.)",
          "Introduction to the concept of Progressive Web Apps (PWAs) and service workers",
          "Meta tags for enhancing web app visibility and performance (viewport, charset, description)",
          "HTML template literals and reusable components for modern page structures",
        ],
      },
      {
        title: "Module 2: CSS Layouts, Flexbox, and Grid",
        points: [
          "Understanding the CSS Box model (margin, padding, border, content) and its impact on layout",
          "CSS Positioning: relative, absolute, fixed, sticky, and their applications",
          "Creating layouts with Flexbox: centering elements, aligning items and content",
          "Using Flexbox for responsive design and common layout patterns (navigation bars, cards, grids)",
          "CSS Grid for complex layouts: creating multi-column and multi-row designs, grid-template-areas",
          "Responsive Design using Media Queries (targeting different screen sizes, mobile-first approach)",
          "Combining Flexbox and Grid for advanced layouts and flexible interfaces",
          "Z-index and stacking context for managing layers in layouts",
          "CSS Overflow property and controlling element clipping and scrolling",
          "CSS Transitions for smooth, interactive effects",
          "Working with viewport units (vw, vh) for responsive typography and layouts",
        ],
      },
      {
        title: "Module 3: JavaScript Essentials + DOM Manipulation",
        points: [
          "Understanding JavaScript Variables: `var`, `let`, `const` and their scopes",
          "Data Types in JavaScript: Strings, Numbers, Booleans, Arrays, Objects, null, undefined",
          "Operators: Arithmetic, Comparison, Logical, Ternary Operator, Template literals",
          "Arrays & Objects: Iterating over arrays, array methods (map, filter, reduce), and object manipulation",
          "Control Flow: Conditional statements (if-else, switch) and looping (for, while, do-while)",
          "Functions in JavaScript: function declaration, function expressions, and arrow functions",
          "Closures and Scope in JavaScript (lexical scoping, private variables)",
          "DOM Selectors (querySelector, getElementById) and manipulating DOM elements (`innerHTML`, `classList`, `style`)",
          "Event Listeners: Handling click, keypress, and submit events, event propagation (bubbling & capturing)",
          "Form validation using JavaScript: `onsubmit`, custom error messages, and regex validation",
          "Working with JavaScript data structures like Sets and Maps",
          "Introduction to debugging JavaScript code using browser dev tools",
        ],
      },
      {
        title: "Module 4: Advanced CSS + UI Animations",
        points: [
          "Using CSS Variables (Custom properties) to dynamically change themes and styles",
          "Creating animations with Transitions & Keyframes (hover, focus, active states)",
          "Using CSS for smooth scrolling and scroll effects (scroll-behavior, scroll animations)",
          "Advanced Selectors: nth-child, nth-of-type, attribute selectors, and pseudo-elements (before, after, etc.)",
          "Creating complex UI interactions with advanced pseudo-classes (focus, active, hover)",
          "Building modal windows, dropdowns, and tooltips with pure CSS",
          "Responsive Design using utility-first CSS frameworks (Tailwind CSS) for fast and scalable UI components",
          "CSS3 transforms and 3D effects: rotating, scaling, translating, and skewing elements",
          "Creating complex hover effects and advanced CSS states with `:hover`, `:focus`, and `:active`",
          "Using animations to enhance user experience (UI feedback on button clicks, form submissions, etc.)",
          "Integrating popular CSS frameworks like Bootstrap for rapid prototyping and development",
        ],
      },
      {
        title: "Module 5: Modern JavaScript (ES6+), APIs, & State",
        points: [
          "Understanding ES6+ Features: let/const for block-scoped variables, template literals, and default parameters",
          "Arrow functions and their implications (shortened syntax and lexical `this`)",
          "Destructuring assignment for arrays and objects, rest/spread operators for cleaner code",
          "Object-Oriented Programming (OOP) in JavaScript: Classes, Inheritance, Prototypes, and Methods",
          "Asynchronous JavaScript: Promises, chaining, handling errors with `.catch()`",
          "Async/Await syntax for cleaner asynchronous code and error handling",
          "Fetching data with the Fetch API, working with JSON, handling errors and timeouts",
          "State management with localStorage and sessionStorage for persistent data across sessions",
          "Introduction to APIs: Fetching external data, integrating public APIs (e.g., weather, news)",
          "Working with the JavaScript Event Loop and understanding asynchronous execution flow",
          "Understanding the concept of `this` in different contexts (global, object methods, arrow functions)",
          "Introduction to functional programming concepts in JavaScript (higher-order functions, immutability)",
          "Modularizing JavaScript code with ES6 Modules (import/export syntax)",
        ],
      },
      {
        title: "Module 6: Final Project & Deployment",
        points: [
          "Building a real-world web app (e.g., Portfolio, Blog, Admin Dashboard) incorporating all learned skills",
          "Using Git & GitHub for version control: creating branches, commits, pull requests, and collaboration",
          "Deploying your website to platforms like Netlify, Vercel, and GitHub Pages",
          "Best practices for debugging and troubleshooting (console logs, breakpoints, and network tab)",
          "Performance optimization: Lazy loading, code splitting, image optimization, and minification",
          "Optimizing CSS with PurgeCSS and removing unused CSS classes",
          "Code review process: Writing clean, maintainable code and getting feedback from peers",
          "Final project demo and presentation: Preparing a project portfolio for future job opportunities",
          "Continuous Integration (CI) with GitHub Actions for automatic deployment and testing",
          "Security considerations in web development: Preventing XSS, CSRF, and other vulnerabilities",
          "Progressive Web Apps (PWAs) and Service Workers for offline functionality",
        ],
      },
    ],
  },
  {
    title: "MERN Stack Development",
    description:
      "Become a full-stack web developer by mastering MongoDB, Express.js, React, and Node.js through hands-on projects and real-world applications. Gain expertise in building scalable and efficient web apps.",
    modules: [
      {
        title: "Module 1: Frontend with React.js",
        points: [
          "Introduction to React and JSX: Understanding the React framework and JSX syntax",
          "Component architecture and State management: Organizing components and managing state with `useState`",
          "Event handling in React: Working with events like `onClick`, `onChange`, etc.",
          "Props and Conditional rendering: Passing data between components using props and conditionally rendering elements",
          "Functional vs Class components: Understanding the differences and when to use each",
          "React Hooks: `useState`, `useEffect`, `useRef` for functional components, and custom hooks",
          "React Context API: Sharing state across components without prop drilling",
          "Handling side effects in React using `useEffect`",
          "React DevTools for debugging React components and optimizing performance",
          "Managing forms in React: Controlled vs uncontrolled components",
        ],
      },
      {
        title: "Module 2: Advanced React + Routing",
        points: [
          "React Router v6 for navigation: Setting up and managing routes in a React app",
          "Nested routes and dynamic routes: Creating hierarchical and parameterized routes for complex navigation",
          "State management with Context API or Redux: Using the Context API or Redux for managing global application state",
          "Code splitting with React.lazy() and Suspense: Dynamically loading components to improve performance",
          "Form handling with React Hook Form or Formik: Efficient form validation and management in React",
          "Handling complex form inputs like checkboxes, radios, and dropdowns",
          "Optimizing React app performance: React.memo, useMemo, and useCallback",
          "Handling authentication in React apps with JWT (JSON Web Tokens) and protected routes",
          "Custom hooks for reusable logic and optimizing component structure",
        ],
      },
      {
        title: "Module 3: Backend with Node.js & Express.js",
        points: [
          "Setting up Node.js environment: Installing Node.js, npm, and setting up development tools",
          "Building RESTful APIs with Express.js: Understanding the architecture of REST APIs and building routes",
          "Middleware in Express: Using built-in middleware like `express.json()`, `express.static()`, and custom middleware for authentication, logging, etc.",
          "Error handling in Express: Using `try-catch`, custom error handlers, and status codes",
          "Working with RESTful methods: GET, POST, PUT, DELETE for handling HTTP requests",
          "Connecting the backend to the frontend using Axios or Fetch API for API requests",
          "Understanding Express routing: Using `app.get()`, `app.post()`, `app.put()`, `app.delete()`",
          "Environment variables for configuration (using dotenv or similar libraries)",
          "CORS (Cross-Origin Resource Sharing) configuration for API security",
        ],
      },
      {
        title: "Module 4: MongoDB & Mongoose for Data Persistence",
        points: [
          "Introduction to NoSQL databases: Overview of MongoDB and its advantages over relational databases",
          "CRUD operations with MongoDB: Creating, reading, updating, and deleting data in MongoDB using the Mongo shell or Compass",
          "Schema design with Mongoose: Defining models, schemas, and validations in Mongoose",
          "Relationships in MongoDB: Using References (e.g., `ObjectId`) and Embedded documents for data modeling",
          "Data validation in Mongoose: Using built-in validators and custom validation logic",
          "Indexing in MongoDB: Creating indexes to optimize query performance",
          "Aggregation framework in MongoDB: Aggregating data using `$match`, `$group`, `$sort`, and other operators",
          "Mongoose middleware: Using `pre` and `post` hooks for handling operations like saving data",
          "Working with MongoDB in the backend: Establishing connections with MongoDB using `mongoose.connect()`",
          "Handling data population and virtuals in Mongoose",
        ],
      },
      {
        title: "Module 5: Authentication and Authorization",
        points: [
          "User authentication with JWT (JSON Web Tokens): Implementing user login, token generation, and validation",
          "Hashing passwords with bcrypt: Storing passwords securely by hashing them before saving to the database",
          "Role-based access control (RBAC): Creating roles for users and restricting access to resources based on roles",
          "User authorization: Creating middleware to verify user roles and access permissions",
          "Implementing secure routes in React & Express: Protecting sensitive routes in both frontend and backend",
          "Implementing login and signup functionality with JWT in React",
          "Token expiration and refresh tokens: Creating a secure authentication flow with token refresh",
          "Password reset functionality with email verification",
          "Implementing multi-factor authentication (MFA) in the app",
        ],
      },
      {
        title: "Module 6: Full-Stack Project & Deployment",
        points: [
          "Building a full-stack web app: Developing an end-to-end application (e.g., E-commerce platform, Blog system)",
          "Frontend-backend integration with REST APIs: Connecting React frontend with Node.js/Express.js backend",
          "Connecting MongoDB to the backend: Using Mongoose for data operations and persistence",
          "Handling user authentication and authorization with JWT tokens",
          "Deploying your application: Using platforms like Vercel, Render, or Heroku for frontend and backend deployment",
          "CI/CD pipelines and GitHub Actions: Automating deployment and testing with GitHub workflows",
          "Optimizing the app for production: Minifying code, setting up environment variables, and using caching",
          "Testing with Jest and React Testing Library for unit and integration tests",
          "Creating a responsive UI using CSS frameworks like TailwindCSS or Bootstrap",
          "SEO and performance optimization strategies for the production app",
          "Setting up domain, SSL certificates, and HTTPS for secure deployment",
        ],
      },
    ],
  },
  {
    title: "MEAN Stack Development",
    description:
      "Master full-stack development with MongoDB, Express.js, Angular, and Node.js, building scalable and efficient web applications. Learn best practices for backend integration, frontend development, authentication, and deployment.",
    modules: [
      {
        title: "Module 1: Frontend with Angular",
        points: [
          "Introduction to Angular and TypeScript: Understanding Angular framework fundamentals and TypeScript syntax",
          "Component structure and data binding: Creating components, templates, and two-way data binding",
          "Directives, Services, and Dependency Injection: Using built-in Angular directives and creating custom directives",
          "Services: Implementing services for reusable logic and data management",
          "Dependency Injection in Angular: Managing service dependencies and injecting services into components",
          "Routing and navigation in Angular: Configuring routes and handling navigation with the Angular Router",
          "Forms in Angular: Template-driven and Reactive forms for handling user input",
          "Custom form validation and error handling in Angular forms",
          "Life cycle hooks: Understanding Angular component lifecycle events (`ngOnInit`, `ngOnChanges`, etc.)",
        ],
      },
      {
        title: "Module 2: Advanced Angular + RxJS",
        points: [
          "Advanced RxJS operators: Understanding `map`, `mergeMap`, `switchMap`, `debounceTime`, and others for reactive programming",
          "Handling HTTP requests and responses with RxJS: Using `HttpClient` and RxJS operators for handling asynchronous HTTP calls",
          "State management in Angular: Using NgRx or Angular services to manage application state",
          "Optimizing performance with lazy loading: Implementing lazy loading for feature modules in Angular",
          "Unit testing Angular components: Writing unit tests using Jasmine and Karma for Angular components and services",
          "Error handling in Angular: Using RxJS operators like `catchError` and `throwError` for graceful error handling",
          "Custom RxJS operators: Creating custom operators for specific business logic",
        ],
      },
      {
        title: "Module 3: Backend with Node.js & Express.js",
        points: [
          "Setting up a Node.js backend environment: Installing Node.js, Express.js, and creating the project structure",
          "Creating RESTful APIs using Express.js: Building CRUD endpoints for a full-featured API",
          "Middleware for authentication, error handling, and logging in Express.js",
          "Setting up CORS (Cross-Origin Resource Sharing) for API security",
          "Connecting the backend to the frontend with Angular using HTTP requests and Axios",
          "API testing and validation: Writing unit tests with Mocha/Chai and validating incoming requests with `Joi` or `express-validator`",
          "Implementing custom middleware for user authentication, logging, and error handling",
          "Environment configuration with `.env` files for secure environment variables",
        ],
      },
      {
        title: "Module 4: MongoDB & Mongoose for Data Storage",
        points: [
          "Introduction to MongoDB and NoSQL: Understanding MongoDB's document-based approach and comparison with relational databases",
          "CRUD operations with MongoDB: Performing Create, Read, Update, Delete operations using MongoDB shell and Mongoose",
          "Schema design using Mongoose: Creating schemas and models, using validation, and managing data types",
          "Handling relationships in MongoDB: Using references (e.g., `ObjectId`) and embedded documents to model relationships between entities",
          "Aggregation framework in MongoDB: Using `$match`, `$group`, `$project`, and other operators for data aggregation and analysis",
          "Indexing in MongoDB: Creating and managing indexes to improve query performance",
          "Mongoose middleware and hooks: Using `pre` and `post` hooks to add logic during document lifecycle events",
          "Data population in Mongoose: Using `populate()` for managing and retrieving references between documents",
        ],
      },
      {
        title: "Module 5: Authentication & Security",
        points: [
          "JWT authentication and authorization: Implementing secure user authentication using JSON Web Tokens (JWT)",
          "Session management with cookies: Using cookies for session management and maintaining user state",
          "Role-based access control (RBAC): Creating roles for users and restricting access to resources based on their roles",
          "Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protection: Understanding and implementing security best practices to prevent attacks",
          "Encrypting sensitive data with bcrypt: Hashing passwords securely before saving them to the database",
          "Password reset and email verification: Implementing functionality to securely reset passwords and verify user emails",
          "Secure APIs with HTTPS: Setting up secure communication using HTTPS in Node.js applications",
          "Rate limiting and brute-force protection: Preventing abuse of APIs by limiting the number of requests a user can make in a given time period",
        ],
      },
      {
        title: "Module 6: Full-Stack MEAN Project & Deployment",
        points: [
          "Building a full-stack web app: Developing a complete MEAN stack project, such as an E-commerce platform or Blogging system",
          "Frontend-backend integration: Connecting the Angular frontend with the Node.js/Express backend via RESTful APIs",
          "User authentication in the MEAN stack: Implementing JWT-based authentication and integrating it with Angular",
          "Deploying MEAN applications: Deploying applications to platforms such as Heroku, AWS, or DigitalOcean",
          "Continuous Integration and Continuous Deployment (CI/CD) pipelines: Setting up GitHub Actions or Jenkins to automate testing and deployment",
          "Performance tuning and debugging: Optimizing the app's performance and debugging issues using tools like Chrome DevTools, Node.js Debugger, and others",
          "Setting up environment variables for production: Securely managing different configurations for development and production environments",
          "Implementing logging and monitoring: Using tools like Winston, Morgan, or Loggly for logging errors and monitoring application health",
          "SEO optimization for Angular applications: Making Angular applications search engine friendly",
        ],
      },
    ],
  },
  {
    title: "Advanced API Integration - React",
    description:
      "Master React with advanced API integration techniques, state management, and authentication, building dynamic and scalable applications.",
    modules: [
      {
        title: "Module 1: Intermediate API Essentials (React)",
        points: [
          "Introduction to RESTful APIs",
          "Fetch vs Axios (pros/cons, configuration)",
          "Basic API calls using `useEffect`",
          "useState & conditional rendering for API responses",
          "Handling loading and error states",
          "Caching API responses for performance optimization",
          "Error boundaries for graceful failure handling",
          "Handling response errors with custom error components",
        ],
      },
      {
        title: "Module 2: Intermediate API with Forms and CRUD",
        points: [
          "Controlled vs uncontrolled components",
          "Creating reusable API services",
          "Form submission (POST/PUT)",
          "Basic CRUD operations (with JSONPlaceholder)",
          "Pagination and query parameters",
          "Handling form validation with libraries like Formik or React Hook Form",
          "Optimistic UI updates during POST/PUT requests",
          "Batch API calls and managing concurrent requests",
          "Handling large form data with efficient state management",
        ],
      },
      {
        title: "Module 3: Advanced State & Auth",
        points: [
          "Zustand/Redux Toolkit for API state",
          "Axios interceptors (attach tokens, log requests)",
          "Centralized error handling",
          "Token-based Authentication (JWT) + Protected routes",
          "Refresh token strategy",
          "Persisting authentication state across app reloads",
          "Handling API errors with custom retry strategies",
          "State management best practices for API data",
          "Lazy loading data for large-scale applications",
        ],
      },
      {
        title: "Module 4: Real-Time & Optimizations",
        points: [
          "Polling vs WebSockets overview",
          "Integrate Socket.IO with React",
          "Optimistic UI updates",
          "Debounce/throttle for search API",
          "Performance optimizations for heavy API data",
          "WebSocket best practices for handling real-time data",
          "Error handling and reconnection strategies in WebSocket",
          "Efficient data fetching with Suspense and React Query",
          "Lazy loading and caching WebSocket messages",
        ],
      },
      {
        title: "Module 5: File Handling & Multi-Part Integration",
        points: [
          "File/image uploads to backend",
          "Multi-part form data using `FormData`",
          "Display uploaded files/images",
          "Chunking large file uploads for efficiency",
          "Handling file previews before upload",
          "File validation (size, type) before upload",
          "Progressive file upload with progress bars",
          "Handling server-side file storage and optimizations",
        ],
      },
      {
        title: "Module 6: External APIs, GraphQL & Security",
        points: [
          "3rd-party APIs (e.g., GitHub API, OpenWeather)",
          "API rate limiting and retries",
          "Introduction to GraphQL queries and mutations",
          "CORS, HTTPS, API versioning",
          "Securing endpoints on the client side",
          "Error handling with GraphQL",
          "Using Apollo Client for advanced GraphQL integration",
          "Optimizing GraphQL queries with fragments",
          "OAuth 2.0 and authorization in API integrations",
          "Implementing API security headers and rate limiting",
        ],
      },
    ],
  },
  {
    title: "Advanced API Integration - Angular",
    description:
      "Learn how to build powerful Angular applications with advanced API integration, RxJS, and secure authentication practices.",
    modules: [
      {
        title: "Module 1: Intermediate API Essentials (Angular)",
        points: [
          "Using `HttpClientModule`",
          "Simple GET/POST with Observables",
          "Displaying response using async pipe",
          "Error handling and status codes",
          "Custom HTTP Interceptors for request/response manipulation",
          "Handling global API errors with an error service",
          "Setting global headers (Authorization, Content-Type)",
          "Transforming API responses using RxJS operators",
          "Introduction to Angular's HTTPClient testing",
        ],
      },
      {
        title: "Module 2: CRUD Operations & Forms",
        points: [
          "Angular Reactive Forms + API",
          "Submit, update, delete data using REST API",
          "HTTP params, headers, and request options",
          "Pagination and filtering",
          "Handling form validations and error messages",
          "Optimizing forms with lazy loading data",
          "Form state management with observables",
          "Handling nested or dynamic forms with API data",
        ],
      },
      {
        title: "Module 3: RxJS Mastery for APIs",
        points: [
          "`pipe`, `map`, `switchMap`, `catchError`",
          "Real-time search with debounce",
          "Combine multiple API calls using `forkJoin`/`combineLatest`",
          "Using `mergeMap` for handling multiple requests concurrently",
          "Building retry logic with `retryWhen` and `delayWhen`",
          "Handling side effects in your app with `tap`",
          "Optimizing API calls with caching and memory management",
          "Managing API request lifecycles with `takeUntil`",
        ],
      },
      {
        title: "Module 4: Authentication & Route Protection",
        points: [
          "Token-based login using JWT",
          "Storing tokens in localStorage/sessionStorage",
          "Route guards for authentication and roles",
          "Refreshing JWT tokens with refresh token strategy",
          "Securing HTTP requests with Authorization headers",
          "Role-based access control (RBAC) using route guards",
          "OAuth2.0 and integrating third-party OAuth providers",
          "Logout and token invalidation",
          "Secure storage solutions for sensitive tokens in Angular",
        ],
      },
      {
        title: "Module 5: Real-time Data & File Uploads",
        points: [
          "Connecting Angular with WebSocket",
          "Multi-part form data with file upload APIs",
          "Handling file preview and drag-drop functionality",
          "Real-time updates with WebSocket for chat or notifications",
          "Efficiently managing WebSocket connections (Reconnect, Heartbeat)",
          "Handling file upload progress with RxJS",
          "Chunked file uploads for large files",
          "File type validation and security considerations",
        ],
      },
      {
        title: "Module 6: Advanced API Security & Performance",
        points: [
          "API request rate-limiting & retry strategy",
          "API versioning strategies",
          "Caching HTTP requests for better performance",
          "Securing APIs with CORS, OAuth, and CSRF protection",
          "Using HTTPS and ensuring secure API endpoints",
          "Optimizing API calls with GraphQL",
          "API load balancing strategies",
          "Monitoring API usage and performance with tools like Sentry or New Relic",
          "Configuring API security headers (Content Security Policy, X-Frame-Options)",
        ],
      },
    ],
  },
  {
    title: "C & C++ Programming",
    description:
      "A comprehensive course covering both C and C++ programming languages, including core concepts, data structures, and algorithms.",
    modules: [
      {
        title: "Module 1: Introduction to C and C++",
        points: [
          "History and evolution of C and C++",
          "Basic syntax and structure of C and C++ programs",
          "Data types, variables, and constants",
          "Input and output handling",
          "Preprocessor directives (#include, #define, #if)",
          "Difference between C and C++ syntax and paradigms",
          "Compilation process (Preprocessing, Compilation, Linking)",
          "Basic debugging techniques",
        ],
      },
      {
        title: "Module 2: Control Structures and Functions",
        points: [
          "Conditional statements (if, switch)",
          "Loops (for, while, do-while)",
          "Functions, function overloading (C++)",
          "Recursion",
          "Pass by value vs. pass by reference",
          "Lambda functions (C++)",
          "Variable scope and lifetime (local vs. global)",
          "Error handling with `errno` in C",
        ],
      },
      {
        title: "Module 3: Pointers and Memory Management",
        points: [
          "Understanding pointers and references",
          "Dynamic memory allocation (malloc, free)",
          "Pointer arithmetic",
          "Memory management and leaks",
          "Memory segmentation (stack vs heap)",
          "Dangling pointers and null pointers",
          "Smart pointers (C++)",
          "Use of `new` and `delete` operators in C++",
          "Pointer to function and function pointers",
        ],
      },
      {
        title: "Module 4: Object-Oriented Programming in C++",
        points: [
          "Classes and Objects",
          "Encapsulation, Inheritance, Polymorphism",
          "Constructors and Destructors",
          "Operator Overloading",
          "Access specifiers (public, private, protected)",
          "Abstract classes and interfaces",
          "Virtual functions and Dynamic Binding",
          "Static members in C++",
          "Copy constructors and assignment operators",
        ],
      },
      {
        title: "Module 5: Data Structures & Algorithms",
        points: [
          "Arrays, Linked lists, Stacks, Queues",
          "Sorting and searching algorithms (QuickSort, MergeSort)",
          "Recursion and dynamic programming",
          "Graphs, Trees, and Hash Tables",
          "Binary Search Trees (BST) and AVL Trees",
          "Doubly Linked Lists and Circular Linked Lists",
          "Time and Space complexity analysis (Big O notation)",
          "Heap (Priority Queue) implementation",
          "Graph traversal algorithms (BFS, DFS)",
        ],
      },
      {
        title: "Module 6: File Handling and Advanced C++",
        points: [
          "Reading and writing to files",
          "Exception handling in C++",
          "STL (Standard Template Library)",
          "Templates and generic programming",
          "File streams (`fstream`, `ifstream`, `ofstream`)",
          "Serialization and deserialization of data",
          "Multithreading in C++",
          "Concurrency and thread synchronization",
          "Move semantics and R-value references (C++)",
          "C++11, C++14, and C++17 features",
        ],
      },
    ],
  },
  {
    title: "Core Java Programming",
    description:
      "A comprehensive course covering fundamental Java programming concepts, including object-oriented programming, data structures, exception handling, multithreading, and more.",
    modules: [
      {
        title: "Module 1: Introduction to Java and Basic Syntax",
        points: [
          "History and evolution of Java",
          "Basic syntax and structure of Java programs",
          "Primitive data types: int, float, char, boolean",
          "Variables, constants, and data types",
          "Control flow: if, else if, switch, for, while, do-while",
          "Compilation process in Java",
          "Writing and debugging your first Java program",
        ],
      },
      {
        title: "Module 2: Object-Oriented Programming Concepts",
        points: [
          "Classes and Objects",
          "Constructors and default constructors",
          "Methods and method overloading",
          "Instance and class variables",
          "Encapsulation and Abstraction",
          "Access modifiers: public, private, protected",
          "Getters and Setters",
          "The 'this' keyword",
        ],
      },
      {
        title: "Module 3: Inheritance and Polymorphism",
        points: [
          "Inheritance in Java: extends keyword",
          "Method overriding",
          "Polymorphism: Compile-time and Runtime",
          "The 'super' keyword",
          "Object class and 'equals()' method",
          "Dynamic method dispatch",
        ],
      },
      {
        title: "Module 4: Arrays and Collections Framework",
        points: [
          "Arrays: declaration, initialization, and access",
          "Multi-dimensional arrays",
          "Introduction to Collections Framework",
          "List interface: ArrayList, LinkedList",
          "Set interface: HashSet, LinkedHashSet",
          "Map interface: HashMap, TreeMap",
          "Iterators and Collection Operations",
        ],
      },
      {
        title: "Module 5: Exception Handling and Debugging",
        points: [
          "What are exceptions? Why handle them?",
          "Types of exceptions: Checked vs Unchecked",
          "The 'try', 'catch', and 'finally' blocks",
          "Creating custom exceptions",
          "Throwing and catching exceptions",
          "Debugging Java programs using IDE",
          "Stack traces and exception handling best practices",
        ],
      },
      {
        title: "Module 6: Java Input/Output (I/O) and File Handling",
        points: [
          "Understanding Java Streams: InputStream, OutputStream",
          "Reader and Writer classes",
          "Reading from and writing to files",
          "File handling with FileReader and FileWriter",
          "BufferedReader and BufferedWriter",
          "Working with directories using File class",
          "File permissions and handling file exceptions",
        ],
      },
      {
        title: "Module 7: Multithreading and Concurrency",
        points: [
          "What is Multithreading and why use it?",
          "Creating threads using Thread class and Runnable interface",
          "Thread lifecycle and states",
          "Thread synchronization and the 'synchronized' keyword",
          "Deadlocks and race conditions",
          "Concurrency utilities: ExecutorService, Semaphore",
        ],
      },
      {
        title: "Module 8: Java 8 Features and Advanced Topics",
        points: [
          "Lambda expressions and functional interfaces",
          "Streams API for processing data",
          "Optional class for null handling",
          "Date and Time API (LocalDate, LocalTime)",
          "Default methods in interfaces",
          "Introduction to JavaFX (Optional)",
          "Basic event-driven programming with JavaFX",
        ],
      },
    ],
  },
  {
    title: "Advanced Java Programming",
    description:
      "An advanced-level course focusing on enterprise-level Java applications, frameworks, networking, database connectivity, and more, including popular Java tools and technologies used in real-world scenarios.",
    modules: [
      {
        title: "Module 1: Java EE and Enterprise Applications",
        points: [
          "Introduction to Java EE (Enterprise Edition)",
          "Servlets and JSP (Java Server Pages)",
          "Creating and managing web applications with Java EE",
          "Java Server Faces (JSF) Framework",
          "Dependency Injection in Java EE (CDI)",
          "Enterprise JavaBeans (EJB) Basics",
          "Java Persistence API (JPA) for Database Integration",
        ],
      },
      {
        title: "Module 2: Spring Framework",
        points: [
          "Introduction to Spring Framework",
          "Inversion of Control (IoC) and Dependency Injection (DI)",
          "Spring Core Container: Beans, ApplicationContext",
          "Spring Boot: Setting up a project quickly",
          "Spring AOP (Aspect-Oriented Programming)",
          "Spring Data JPA and Spring Security",
          "Creating RESTful Web Services using Spring Boot",
          "Spring MVC for web application development",
        ],
      },
      {
        title: "Module 3: Hibernate and JPA",
        points: [
          "Introduction to Hibernate ORM",
          "Setting up Hibernate configuration",
          "Mapping Java objects to database tables (Annotations and XML)",
          "CRUD operations with Hibernate",
          "Querying with HQL (Hibernate Query Language)",
          "Transaction management in Hibernate",
          "Introduction to Java Persistence API (JPA)",
          "EntityManager and JPQL (Java Persistence Query Language)",
        ],
      },
      {
        title: "Module 4: Java Web Services (SOAP and RESTful)",
        points: [
          "Introduction to Web Services",
          "SOAP-based Web Services",
          "Creating and consuming SOAP Web Services with JAX-WS",
          "RESTful Web Services with JAX-RS",
          "Consuming REST APIs using Java",
          "JSON and XML processing in Java",
          "Security considerations for web services",
          "Using Swagger for API documentation",
        ],
      },
      {
        title: "Module 5: Networking and Socket Programming",
        points: [
          "Introduction to Java Networking",
          "TCP/IP and UDP Protocols",
          "Creating Client-Server applications with Sockets",
          "DatagramSocket and DatagramPacket for UDP communication",
          "URL handling and HttpURLConnection",
          "Multithreaded socket programming",
          "Implementing HTTP Servers and Clients in Java",
          "Socket communication with non-blocking I/O (NIO)",
        ],
      },
      {
        title: "Module 6: Java Concurrency and Parallel Programming",
        points: [
          "Introduction to Java concurrency",
          "Threads and thread safety",
          "ExecutorService and ThreadPoolExecutor",
          "Concurrent Collections (CopyOnWrite, ConcurrentHashMap)",
          "Synchronization, Locks, and Deadlocks",
          "Atomic variables and the `java.util.concurrent` package",
          "Fork/Join Framework for parallel tasks",
          "Introduction to reactive programming with Project Reactor",
        ],
      },
      {
        title: "Module 7: Java Design Patterns and Best Practices",
        points: [
          "Introduction to Design Patterns",
          "Creational Patterns: Singleton, Factory, Abstract Factory",
          "Structural Patterns: Adapter, Composite, Proxy",
          "Behavioral Patterns: Observer, Strategy, Command",
          "Implementing Dependency Injection",
          "Refactoring and improving code structure",
          "Java best practices for performance optimization",
          "Code reviews and writing maintainable code",
        ],
      },
      {
        title: "Module 8: Java Security and Cryptography",
        points: [
          "Understanding Java security architecture",
          "Encryption and decryption techniques",
          "Message Digest Algorithm (MD5, SHA) for hashing",
          "Public and Private Key encryption (RSA)",
          "Using Java Cryptography Architecture (JCA)",
          "Creating secure communication with SSL/TLS",
          "Access control, Authentication, and Authorization",
          "Java Security Manager and Policy Files",
        ],
      },
    ],
  },
  {
    title: "Core Python Programming",
    description:
      "A comprehensive two-month course designed to build a strong foundation in Python programming, covering essential concepts, data structures, OOP, libraries, and project development with real-world applications.",
    modules: [
      {
        title: "Module 1: Python Basics",
        points: [
          "Introduction to Python and installation (IDEs, pip)",
          "Python syntax, code structure, and indentation",
          "Data types: integers, floats, strings, booleans",
          "Variables, constants, and type casting",
          "Input/Output operations",
          "Operators: arithmetic, logical, comparison, bitwise",
          "Writing and running Python scripts",
        ],
      },
      {
        title: "Module 2: Control Flow and Functions",
        points: [
          "Conditional statements (if, elif, else)",
          "Loops: for, while, nested loops",
          "Loop control: break, continue, pass",
          "Defining and calling functions",
          "Function arguments, return values",
          "Lambda expressions",
          "Recursion and scope rules",
        ],
      },
      {
        title: "Module 3: Data Structures in Python",
        points: [
          "Lists: indexing, slicing, and common methods",
          "Tuples and their immutability",
          "Sets and set operations",
          "Dictionaries: key-value pairs and methods",
          "Nested data structures",
          "List, dict, and set comprehensions",
          "Practical use cases of data structures",
        ],
      },
      {
        title: "Module 4: Object-Oriented Programming (OOP)",
        points: [
          "Classes and objects",
          "Constructors (init), instance vs class variables",
          "Encapsulation, getters and setters",
          "Inheritance and method overriding",
          "Polymorphism and abstraction",
          "Magic methods (str, repr, etc.)",
          "Exception handling and custom exceptions",
        ],
      },
      {
        title: "Module 5: File Handling and Modules",
        points: [
          "Opening, reading, and writing text files",
          "Working with CSV and JSON data",
          "File modes and file pointer handling",
          "Creating and importing custom modules",
          "Python standard libraries (os, sys, math, random)",
          "Working with datetime and calendar modules",
          "Understanding packages and init.py",
        ],
      },
      {
        title: "Module 6: Python Libraries and Tools",
        points: [
          "Introduction to pip and virtual environments",
          "NumPy basics: arrays and mathematical operations",
          "Pandas for data manipulation and analysis",
          "Matplotlib for data visualization",
          "Using requests for API calls",
          "BeautifulSoup for web scraping",
          "Real-world data processing examples",
        ],
      },
      {
        title: "Module 7: Intermediate Concepts and Algorithms",
        points: [
          "Sorting and searching algorithms",
          "Understanding recursion with examples",
          "Working with stacks, queues, and linked lists",
          "Basics of tree and graph representations",
          "Intro to time complexity and optimization",
          "Using Python's collections module",
          "Project structure and modular programming",
        ],
      },
      {
        title: "Module 8: Final Project and Assessment",
        points: [
          "Defining a real-world problem and project goals",
          "Designing modules and planning development",
          "Applying OOP, file handling, and libraries",
          "Implementing user input and output",
          "Debugging, testing, and refactoring code",
          "Writing documentation and README",
          "Final project submission and presentation",
        ],
      },
    ],
  },
  {
    title: "Advanced Python Design",
    description:
      "An intensive two-month course focusing on advanced Python design principles, including OOP mastery, design patterns, architecture, testing, and project development for scalable, maintainable software systems.",
    modules: [
      {
        title: "Module 1: Advanced Python Fundamentals",
        points: [
          "Deep dive into advanced data structures (deque, defaultdict, namedtuple)",
          "Custom iterators and generators",
          "Advanced list, dict, and set comprehensions",
          "Decorators, closures, and context managers",
          "Understanding Python memory management and garbage collection",
          "Using the functools and itertools modules",
          "Writing efficient and Pythonic code",
        ],
      },
      {
        title: "Module 2: Object-Oriented Design Principles",
        points: [
          "Inheritance, composition, and delegation in depth",
          "Encapsulation, abstraction, and polymorphism techniques",
          "Abstract Base Classes (ABC) and interfaces",
          "Multiple inheritance and method resolution order (MRO)",
          "Using dunder/magic methods effectively",
          "Metaclasses and dynamic class creation",
          "SOLID principles with practical Python examples",
        ],
      },
      {
        title: "Module 3: Python Design Patterns I – Creational & Structural",
        points: [
          "Understanding the purpose of design patterns",
          "Singleton, Factory, Abstract Factory, and Builder patterns",
          "Prototype pattern and object cloning",
          "Adapter, Bridge, Composite, Decorator patterns",
          "Facade, Proxy, and Flyweight patterns",
          "Pattern use cases and refactoring examples",
          "Anti-patterns and what to avoid",
        ],
      },
      {
        title: "Module 4: Python Design Patterns II – Behavioral",
        points: [
          "Strategy and Template Method patterns",
          "Command, Chain of Responsibility, and Observer patterns",
          "Iterator, State, Visitor, and Memento patterns",
          "Interpreter and Mediator patterns",
          "Implementing patterns in real-world scenarios",
          "Testing and benchmarking pattern-based code",
          "When and when not to use patterns",
        ],
      },
      {
        title: "Module 5: Architecture and System Design",
        points: [
          "Layered and modular architecture",
          "Microservices vs monolithic architecture",
          "Hexagonal architecture in Python",
          "Dependency injection and inversion of control (IoC)",
          "Managing large codebases with namespaces and packages",
          "Error handling strategies in architecture",
          "Configuration and environment management",
        ],
      },
      {
        title: "Module 6: Async, Concurrency, and Performance",
        points: [
          "Asynchronous programming with asyncio",
          "Event loops, tasks, and coroutines",
          "Multithreading vs multiprocessing in Python",
          "Concurrent execution with ThreadPool and ProcessPool",
          "Profiling and optimizing Python code",
          "Handling I/O-bound vs CPU-bound tasks",
          "Building responsive systems with async patterns",
        ],
      },
      {
        title: "Module 7: Testing, Refactoring & Clean Code",
        points: [
          "Unit testing with unittest and pytest",
          "Mocking and test coverage tools",
          "TDD (Test-Driven Development) practices",
          "Refactoring techniques and code smells",
          "Writing maintainable, clean, and readable Python code",
          "Automation and CI pipelines for testing",
          "Documentation and code review practices",
        ],
      },
      {
        title: "Module 8: Final Project and Case Study",
        points: [
          "Choosing a real-world scalable project",
          "Designing using architecture and design patterns",
          "Implementing with modular and maintainable code",
          "Incorporating testing, logging, and error handling",
          "Code optimization and documentation",
          "Peer review and feedback",
          "Final project presentation and evaluation",
        ],
      },
    ],
  },
  {
    title: "Cyber Security",
    description:
      "A comprehensive guide for CEHv13, covering all the essential modules for ethical hacking and cybersecurity.",
    modules: [
      {
        title: "Module 1: Introduction to Cyber Security & Core Concepts",
        points: [
          "Information Security Pillars (CIAAN): Confidentiality, Integrity, Availability, Authenticity, Non-Repudiation",
          "Types of Attacks: Attack formula, Common motives, TTPs, Vulnerabilities, Attack types",
          "Hacker Classification: White Hat, Black Hat, Grey Hat, Script Kiddies, Hacktivists, State-sponsored, Cyber Terrorists, Corporate Spies, Green Hats",
          "Cyber Warfare: Defensive / Offensive, Threats, Phases of Ethical Hacking",
          "Cyber Kill Chain & Defense: Phases of attack, Defense in Depth",
        ],
      },
      {
        title: "Module 2: Networking, OSI, Protocols & Basic Commands",
        points: [
          "Basics of Network: IP, Port, Protocol, TCP/IP & OSI Model",
          "OSI Model (7 Layers): Physical, Data Link, Network, Transport, Session, Presentation, Application",
          "TCP/IP Model (4 Layers): Network Interface, Internet, Transport, Application",
          "Protocols: HTTP, HTTPS, FTP, SSH, SMTP, DNS, DHCP, ARP, ICMP",
          "Command Basics: Windows and Kali Linux commands",
        ],
      },
      {
        title: "Module 3: Reconnaissance & Footprinting",
        points: [
          "Passive Recon (OSINT): Whois, Google Dorking, Shodan, Wayback Machine, Exploit-DB",
          "Active Recon: Nmap, Social Engineering, Banner Grabbing",
        ],
      },
      {
        title: "Module 4: Scanning & Enumeration",
        points: [
          "Network Scanning Tools: Nmap, Angry IP Scanner, Hping3, Netdiscover",
          "Enumeration Tools: Nmap Scripts, Dirbuster, Gobuster, Sublister, FTP/SSH/Telnet Enumeration",
        ],
      },
      {
        title: "Module 5: Vulnerability Analysis",
        points: [
          "Vulnerability Classification: Misconfig, Application Flaws, Poor Patch Management, Design Flaws, 3rd Party Risks",
          "Scoring Systems: CVSS, NVD, CVE, CWE",
          "OWASP Top 10: Web App security flaws (e.g., XSS, SQLi)",
          "Tools: Burp Suite, OWASP ZAP, OpenVAS, Nessus",
        ],
      },
      {
        title: "Module 6: System Hacking, Malware & Social Engineering",
        points: [
          "System Hacking Phases: Gaining Access (MSF/Console/Venom), Exploit DB",
          "Malware Threats: Virus, Worms, Trojan, Ransomware, Spyware, Rootkits",
          "Social Engineering: Phishing, Vishing, Pretexting, Baiting",
          "Sniffing: Wireshark, TCPDump, Active/Passive sniffing",
          "Session Hijacking: CSRF, XSS, Cookie/session token hijack",
        ],
      },
      {
        title: "Module 7: Network, Web & Wireless Attacks",
        points: [
          "DOS/DDOS: LOIC, HOIC, Detection & Mitigation",
          "IDS/IPS/Firewalls & Honeypots: Types of Firewalls, IDS vs IPS, Honeypots",
          "Web Server & Web App Hacking: Web App Vulnerabilities, LFI, RFI, XSS, SQLi, Tools: Burp, Nikto",
          "SQL Injection: Manual & Automated (sqlmap), Bypass authentication",
          "Wireless Attacks: Wifite, Aircrack-ng, Airmon-ng, Reaver, WPA/WPA2 cracking, Evil Twin",
        ],
      },
      {
        title: "Module 8: Mobile, Cloud, IoT & Cryptography",
        points: [
          "Mobile Hacking: MSF Console, EvilDroid, APKTool, MITM & Payloads",
          "IoT & OT Attacks: Flipper Zero, M5Stack, Vulnerabilities in smart devices",
          "Cloud Security: IAAS / PAAS / SAAS, Cloud Misconfig Takeover",
          "Cryptography: Symmetric (AES, DES, 3DES), Asymmetric (RSA, ECC), Hashing (SHA, MD5), Cryptographic Attacks (MITM, Replay, Brute Force)",
          "Cyber Law & Compliance: ISO/IEC, PCI DSS, HIPAA, GDPR, DMCA, IT Act 2000",
          "AI in Cybersecurity: Automation, Threat Detection, HackerGPT, Predictive Analytics, Adaptive Defense",
        ],
      },
    ],
  },
];

const Curriculum = () => {
  const curriculumRef = useRef(null);
  const isInView = useInView(curriculumRef, { once: true, margin: "-100px" });
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedModule, setExpandedModule] = useState({});

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
    setExpandedModule({});
  };

  const toggleModule = (courseIndex, moduleIndex) => {
    setExpandedModule((prev) => {
      const key = `${courseIndex}-${moduleIndex}`;
      const newState = { ...prev };

      Object.keys(newState).forEach((existingKey) => {
        if (existingKey.startsWith(`${courseIndex}-`) && existingKey !== key) {
          delete newState[existingKey];
        }
      });

      newState[key] = !prev[key];
      return newState;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const moduleContentVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50" ref={curriculumRef}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-black"
        >
          Curriculum Overview
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center"
        >
          Comprehensive learning paths designed to take you from beginner to
          professional
        </motion.p>

        <motion.div
          className="mt-16 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course, courseIndex) => (
            <motion.div
              key={courseIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCourse(courseIndex)}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{course.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedCourse === courseIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-blue-600" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedCourse === courseIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 gap-6">
                      {course.modules.map((module, moduleIndex) => (
                        <motion.div
                          key={moduleIndex}
                          variants={itemVariants}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.05 * moduleIndex,
                          }}
                          className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-300"
                        >
                          <motion.div
                            className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
                            onClick={() =>
                              toggleModule(courseIndex, moduleIndex)
                            }
                            whileHover={{
                              backgroundColor: "rgba(239, 246, 255, 0.8)",
                            }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <h4 className="font-semibold text-black flex items-center">
                              <BookOpen
                                size={18}
                                className="mr-2 text-blue-600"
                              />
                              <span className="w-full">{module.title}</span>
                            </h4>
                            <motion.div
                              animate={{
                                rotate: expandedModule[
                                  `${courseIndex}-${moduleIndex}`
                                ]
                                  ? 180
                                  : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown
                                size={18}
                                className="text-blue-600"
                              />
                            </motion.div>
                          </motion.div>

                          <AnimatePresence>
                            {expandedModule[
                              `${courseIndex}-${moduleIndex}`
                            ] && (
                              <motion.div
                                variants={moduleContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="p-4 bg-gray-50"
                              >
                                <motion.ul className="space-y-2">
                                  {module.points.map((point, pointIndex) => (
                                    <motion.li
                                      key={pointIndex}
                                      className="flex items-start"
                                      initial={{ opacity: 0, x: -5 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.03 * pointIndex }}
                                    >
                                      <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                                      <span className="text-gray-700 w-full">
                                        {point}
                                      </span>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
