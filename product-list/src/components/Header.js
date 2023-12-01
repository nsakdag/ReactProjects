import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1>Product List</h1>
        <div className="btns">
            <button>ALL</button>
            <button>ELECTRONICS</button>
            <button>JEWELERY</button>
            <button>MEN'S CLOTHING</button>
            <button>WOMEN'S CLOTHING</button>
        </div>
    </div>
  )
}

export default Header