import React from 'react';

import ToDo from './components/todo/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsContext from './context/settings/context.js';



export default function App() {
  return (
    <SettingsContext>
    <>
      <ToDo />
    </>
    </SettingsContext>
  );
}
