import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, HandlePageChange, totalPages } = useContext(AppContext);
  console.log("pagecheckig")
  console.log(page);


  return (
    <div className='w-full border-2 fixed bottom-0 bg-white'  >

      <div className='flex justify-between w-[670px] mx-auto py-2'>
        {/* bracket use kiye qki previous buttons ek condition ke sath ayyegaa */}
      <div className='flex gap-7'>

        {page > 1 &&
          <button
          className='rounded-md border-2 px-4 py-1'
          onClick={() => HandlePageChange(page - 1)}>
            Previous
          </button>
        }

        {page < totalPages &&
          <button
          className='rounded-md border-2 px-4 py-1'
          onClick={() => HandlePageChange(page + 1)}>
            Next
          </button>
        }

        </div>
        <p className='font-bold text-sm'>
          page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination