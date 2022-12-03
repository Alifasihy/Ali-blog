import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';
import NewPost from '../CreateNewPost/CreateNewPost';

import PostHistory from '../DisplayAllPosts/DisplayAllPosts';
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
          
            <Routes>
              {/* Route components in here */}
              <Route path="/posts/new" element={<NewPost />} />
              <Route path="/posts" element={<PostHistory />} />
              
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
