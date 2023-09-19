'use client'

import React from 'react'
import { remove } from '@/Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Cartpage = () => {

    const dispatch=useDispatch()
    const cartitems=useSelector((state)=>state.cart)

    const handleremove=()=>{
        dispatch(remove(id))
    }
  return (
    <div>
      <h3>Cart Page</h3>
      <div className='cartWrapper'>
        {
            cartitems.map((item)=>(
                <div className='cartCard'>
                    <img src={item.image} alt='img'/>
                    <h5>{item.title}</h5>
                    <h5>{item.price}</h5>
                    <button className='btn' onClick={()=>handleremove(item.id)}></button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cartpage
