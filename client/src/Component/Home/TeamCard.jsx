import React from 'react'

function TeamCard(props) {
  return (
    <>
    <div className="p-2 m-2 w-1/2">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.image}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{props.username}</h2>
            <p className="text-gray-500">{props.position}</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default TeamCard