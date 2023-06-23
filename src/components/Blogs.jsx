import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Sppinner from './Sppinner';
import "./Blogs.css"


const Blogs = () => {
  //  Consuming wali baat agayii data ko 
  // uske liye useContent hai jisses kar lengee


  const { posts, loading } = useContext(AppContext);

  console.log("Printing inside blogs components ")
  console.log(posts);

  // yaha se humee loading wala dataa mil gaya 
  // >>>>>>> aab simple jo chahiye wo direct le legnge props se bhejna nahi hoga very simple

  return (
    <div className='w-11/12  max-w-[670px] mx-auto py-7 flex flex-col gap-y-7 mt-[260px] mb-[240px] items-center justify-center h-screen'>
      {/* Har ek page me 5 post hai to map function ka use karege ek create karege  */}
      {

        loading ? (<Sppinner  />) :
          (

            posts.length === 0?
              (
                <div>
                  <p>No post found</p>
                </div>
              )
              :
              ( posts.map((post)=>(
                 <div key={post.id}>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-sm mt-[4px]'>
                      By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    </p>
                    <p className='text-sm mt-[3px]'>Posted on {post.date}</p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    {/* tag  dikhane hai */}
                    <div className='flex gap-x-2'>
                     {
                      // agar key ka id  nahi hota to index parameter maan kar kar lete hai
                      post.tags.map((tag , index) =>{
                        return <span className='text-blue-500  underline font-bold text-xs' key={index}>{`#${tag}`}</span>
                      })
                     } 
                    </div>

                 </div>
              )))

          )
      }








    </div>
  )
}

export default Blogs