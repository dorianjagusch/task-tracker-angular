# TaskTracker

A small task tracker in Angular

## Introduction

Welcome to the TaskTracker project! I build this simple task tracking application to learn the basics of Angular.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Angular CLI](https://angular.io/cli) (Command Line Interface for Angular)

You can install Angular CLI globally using npm:

```bash
  npm install -g @angular/cli
```

## Installation

1.Clone the repository:

```bash
  git clone https://github.com/your-username/task-tracker.git
  cd task-tracker
```

## Install dependencies:

```bash
  npm install
```

## Development Server

Run the following command to start the development server:

```bash
  npm start
```

Navigate to http://localhost:4200/ in your browser. The app will automatically reload if you change any of the source files.

## Running the JSON Server

This project uses a JSON server to simulate a backend. Run the following command to start the JSON server:

```bash
  npm run server
```

The server will be available at http://localhost:3000/.

## Project Structure
Here is an overview of the project structure:

```markdown
src/
  app/
    app.component.css
    app.component.html
    app.component.spec.ts
    app.component.ts
    app.config.ts
    app.routes.ts
    components/
      add-task/
      button/
      header/
      task-item/
      tasks/
    interfaces/
    mock-tasks.ts
    services/
  index.html
  main.ts
  styles.css
```

## Key Files and Directories
- `app.component.ts`: The root component of the application.
- `components/`: Contains all the Angular components used in the application.
- `services/`: Contains services for handling data and business logic.
- `interfaces/`: Contains the TS interface for the Task type.
- `db.json`: JSON file used by the JSON server to simulate a backend.

## My learnings

- Angular Components: How to create and use Angular components.
- Data Binding: How to use property binding, event binding, and two-way data binding.
- Custom Events: How to use Angular's EventEmitters to create custom events to use elsewhere
- Services: How to create and use Angular services to manage data and business logic.
- Routing: How to navigate between different views using Angular Router.
- HTTP Client: How to make HTTP requests to a backend server using Angular's HttpClient module.
- RXJS: Some basic methods from RXJS for simple interactions with Observers, Observables, Subscribers etc.
- Some Typescript
