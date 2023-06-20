"use client"
import GuestList from './GuestList';
import Image from 'next/image';
import { useState } from "react"
import AddGuest from './AddGuest';

export default function Home (){

  const backgroundStyle = {
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: '100% 100%',  // Adjust the background size
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    maxWidth: '700px',  // Set the maximum width
    margin: '0 auto',    // Center the content horizontally
  };

  const [whichPage, setWhichPage] = useState("GuestList")

  return (

 <div style={backgroundStyle}>

  { whichPage === 'GuestList' ?   
  

  <GuestList onSwitch={() => setWhichPage("AddGuest")} />

  :
  
  <AddGuest onSwitch={() => setWhichPage("GuestList")} />
    
  }
    
    </div>
  );
};
