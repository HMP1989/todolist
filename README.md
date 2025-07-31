# ToDo Project

A simple, modern, and responsive ToDo application built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Add Tasks:** Quickly add new tasks by typing in the input and pressing Enter.
- **View List:** See all your tasks, marked as completed or incomplete.
- **Inline Edit:** Edit tasks directly by clicking on the task text—no extra forms needed!
- **Delete Tasks:** Remove any task instantly for easy management.
- **Toggle Status:** Mark tasks as done/undone with clear visual feedback.
- **Persistent Storage:** Tasks are saved in browser `localStorage`—your list stays after page refresh.
- **Responsive Design:** Works great on desktop and mobile devices.

## Technologies Used

- [React](https://react.dev/) (uses Hooks: useState, useEffect, useContext)
- [Vite](https://vitejs.dev/) for fast development and HMR
- [Tailwind CSS](https://tailwindcss.com/) for beautiful, responsive styling
- [UUID](https://www.npmjs.com/package/uuid) for generating unique task IDs

## Project Structure

- **MainToDo:** Main component, handles input and entire list rendering.
- **ToDoList:** Presents all tasks.
- **ToDoItem:** Single task, with edit/toggle/delete actions.
- **DeleteToDo & EditToDo:** SVG icons for action buttons.
- **ToDoContext:** Global state management with React Context API.

## Getting Started

1. Clone the repository
2. Run `npm install`  
3. Run `npm run dev` to start development server

---

> **Note:**  
> This project was bootstrapped with [React + Vite](https://vitejs.dev/), providing a fast and modern React development environment with HMR and ESLint support.

---

