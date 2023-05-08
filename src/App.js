import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext,useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import './App.css'

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  
  useEffect(()=>{
    fetchBlogPosts()
  },[]);

  return(
    <div className='flex flex-col w-full h-full justify-center items-center gap-y-1'>
      <Navbar/>
      <Blogs/>
      <Pagination/>    
    </div>
  );
}
