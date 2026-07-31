# MediCare Clinic — Appointment Dashboard UI (React + Vite, Frontend Only)

**OSTAD Assignment:** This is a single-page **Hospital Appointment Dashboard UI** in React. The whole application must run on hard-coded local data (a simple JavaScript file). There is no backend in this assignment.

This is a front-desk screen application (_Frontend Only_) made for **MediCare Clinic**. From this single screen the receptionist can:

- See summary counters of the clinic at a glance (_doctors, appointments, pending, completed_).
- Browse the doctor list, filter it by department and search it by doctor name.
- Select a doctor and book a new appointment for a patient using a form.
- See the appointment list, change an appointment's status and delete an appointment

<small>💡**Note:** Everything lives in <u>React state</u>. When the page is refreshed, the data resets to the seed data.</small>

## Screenshot(s) of The Final UI

## Setup Instructions (Install / Dev / Build)

1. Create a React app using Vite.

   > npm create vite@latest medicare-dashboard -- --template react

2. Navigate into the project's directory.

   > cd medicare-dashboard

3. Install the required node modules.

   > npm install

4. Run the development server.

   > npm run dev

5. To generate the production build.

   > npm run build

6. To preview the build.

   > npm run preview

7. (_Optional_) Execute the shell script **server.sh** to automate the installation of node modules & run the development server.

   > bash server.sh

## Folder Structure

src/ <br/>
├── assets/ <br/>
├── components/ <br/>
│ &emsp;&emsp;├── layout/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Header.jsx, PageContainer.jsx <br/>
│ &emsp;&emsp;├── ui/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Card.jsx, Button.jsx, Badge.jsx, EmptyState.jsx <br/>
│ &emsp;&emsp;├── stats/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; StatGrid.jsx, StatCard.jsx <br/>
│ &emsp;&emsp;├── doctors/ &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; DoctorPanel.jsx, DoctorFilter.jsx, DoctorList.jsx, DoctorCard.jsx <br/>
│ &emsp;&emsp;├── appointments/ &emsp;&emsp;&emsp; AppointmentForm.jsx, AppointmentList.jsx, AppointmentRow.jsx <br/>
│ &emsp;&emsp;└── error/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp; ErrorBoundary.jsx, FallbackUI.jsx, CrashTest.jsx <br/>
├── data/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; doctors.js, appointments.js <br/>
├── utils/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; logger.js, validators.js, format.js <br/>
├── App.jsx <br/>
├── main.jsx <br/>
└── index.css <br/>

## Feature List

## React Concepts Used

## Miscellaneous

This assignment evaluates the following topics 🎯:

- Creating a React app using Vite, run & build commands, project structure
- Organizing files and folders (components / data / utils)
- Components, JSX and naming conventions
- JSX conditional rendering: if-else, switch, ternary, logical &&, IIFE
- Looping in JSX with .map() (and why map, not for/forEach)
- Passing props to child components
- Click event handling and form submit handling
- Component composition & reusability
- children prop and render props
- Controlled vs uncontrolled components
- Prop drilling problem and its alternatives
- Lifting state up
- Error handling, Error Boundary, Fallback UI, global error patterns, basic logging

What features & design techniques I implemented in this project 🎯:

- 3-level deep shallow nesting (_CSS Nesting_) in CSS properties.
