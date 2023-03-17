import Nav from './components/Navbar'
import Landing from './pages/Landing';
import GeneratorPage from './pages/Generator';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import StorePwd from './components/StoreComp';
import Profile from './pages/Profile';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';

function App() {
  return (

    <>
      <div className="overflow-hidden">
        {/* <ApolloProvider client={client}> */}
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/generator" element={<GeneratorPage />} />
              <Route path="/store" element={<StorePwd />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        {/* </ApolloProvider> */}
      </div>
    </>
  );
}

export default App;
