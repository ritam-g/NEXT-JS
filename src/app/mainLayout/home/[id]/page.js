import React from 'react'

const page = async({params}) => {
   const data=await params
   console.log(data)
  return (
    <div>
      <h1> this is homes page  {data.id}</h1>
    </div>
  )
}

export default page
