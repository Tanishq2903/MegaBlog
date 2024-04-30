import React from 'react'


function Logo({width = '70px'}) {
  return (
    <div>
     <img className="block mx-auto h-24 sm:mx-0 sm:shrink-0" src='https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Logo' ></img>
    </div>
  )
}

export default Logo