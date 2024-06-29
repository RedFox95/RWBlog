// App.js
import React, { useState } from 'react';
import Login from './Login';
import Homepage from './HomePage';
import style from './style.css';

function App() {
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = (e) => {
    // e.preventDefault();
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    if (enteredPassword === 'swordfish') {
      setAuthorized(true);
    } else {
      // Display an error message or popup
      alert('THAT\'S THE WRONG PASSWORD\nHint: It\'s something related to a fish with a sword as it\'s nose');
    }
  };

  return (
    <div>
      {authorized ? <Homepage /> : <Login onSubmit={handleLogin}/>}
    </div>
  );
}

export default App;