import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import MyAPIScreen from "./pages/MyAPIScreen";

function App() {
  return (
      <section>
        <Button variant="contained" endIcon={<PublicIcon/>} sx={{ m: 2 }}>Hello world</Button>

        <MyAPIScreen />
      </section>
  );
}

export default App;