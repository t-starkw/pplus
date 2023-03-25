import Nav from './components/Navbar'
import Landing from './pages/Landing';
import GeneratorPage from './pages/Generator';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import StorePwd from './components/StoreComp';
import Profile from './pages/Profile';

import { Route, Routes } from "react-router-dom";
import './styles/App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://pplus-api.onrender.com/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: bounded,
});

function App() {
  return (

    <>
      <div className="overflow-hidden">
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
