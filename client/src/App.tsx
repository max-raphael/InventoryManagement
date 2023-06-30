// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Users from './components/Users';

const App: React.FC = () => {
  return (
    // <div>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6">
    //         My Timber Inventory App
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <div>
      <h1>Users</h1>
      <Users />
    </div>
  );
}

export default App;