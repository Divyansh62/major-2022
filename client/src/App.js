import React from "react";
import {Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Project from "./components/Projects/Project.js";

import TodoList2 from "./components/Events/EventNotice/TodoList.js";
import TodoList4 from "./components/Events/EventQueires/TodoList.js";
import TodoList3 from "./components/Events/EventHubs/TodoList.js";
import TodoList from "./components/Events/EventsProject/TodoList.js";
//eslint-disable-next-line
import ImagesPosts from "./components/PostDetails/ImagesPosts.js";


const App =()=>{
    const user=JSON.parse(localStorage.getItem('profile'));
    return(
        <BrowserRouter>
        <Container maxWidth="xl">
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<Navigate to="/posts"/>}/>
        <Route path="/posts" exact element={<Home/>}/>
        <Route path="/events" exact element={<Project/>}/>
        <Route path="/events/project" exact element={<TodoList/>}/>
        <Route path="/events/queries" exact element={<TodoList4/>}/>
        <Route path="/events/hubs" exact element={<TodoList3/>}/>
        <Route path="/events/notice" exact element={<TodoList2/>}/>
        <Route path="/posts/search" exact element={<Home/>}/>
        <Route path="posts/:id" exact element={<PostDetails/>}/>
        <Route path="posts/image" exact element={<ImagesPosts/>}/>
        <Route path="/Auth" exact element={(!user?<Auth/>:<Home/>)}/>
        </Routes>
        </Container>
        </BrowserRouter>
    );
}
export default App;