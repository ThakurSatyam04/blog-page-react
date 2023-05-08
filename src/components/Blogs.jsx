import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import './Blog.css'

const Blogs = () => {

    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] py-7 flex flex-col gap-y-7 mt-10 mb-10'>
      {
        loading ? (<Spinner/>) : (
            posts.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : (
                posts.map((post)=> (
                    <div key={post.id}>
                        <p className='font-bold text-lg'>{post.title}</p>
                        <p className='text-sm'> 
                            By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'> {post.category} </span>
                        </p>
                        <p className='text-sm mt-[4px]'>Post on {post.date}</p>
                        <p className='text-md mt-3 '> {post.content}</p>
                        <div className='flex gap-x-3 mt-2'>
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className='text-blue-500 underline font-bold text-xs'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                ))
            )
        )
      }
    </div>
  )
}

export default Blogs
