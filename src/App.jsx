import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'

import PostList from './components/PostList'


function App() {
  const [selectedTab, setSelectTab] = useState("CreatePost");

  return (
  
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} ></Sidebar>
      <div className='content'>
        <Header>   </Header>
        {selectedTab === "Home" ? <PostList></PostList>:<CreatePost></CreatePost>  }

 
      <Footer></Footer>
 </div>
      
    </div>
 
  )
}

export default App
