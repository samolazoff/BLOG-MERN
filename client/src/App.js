import {Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AddPostPage from './pages/AddPostPage';
import EditPostPage from './pages/EditPostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='new' element = {<AddPostPage/>}></Route>
        <Route path='/' element = {<MainPage/>}></Route>
        <Route path=':id' element = {<PostPage/>}></Route>
        <Route path='posts' element = {<PostsPage/>}></Route>
        <Route path=':id/edit' element = {<EditPostPage/>}></Route>
        <Route path='register' element = {<RegisterPage/>}></Route>
        <Route path='login' element = {<LoginPage/>}></Route>
      </Routes>
    </Layout>
  )
}

export default App;
