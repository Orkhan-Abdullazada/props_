// import React from 'react'
import React, { useState } from 'react'
  import List from './companents/List'
  import "./style.css"
const myProducts=[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No.",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
    "id": 2,
    "title": "Mens Casual Premium  ",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    
]

function App() {
  const [table,settables]=useState(myProducts)
  return (
    <div>
      <List table={table} settables={settables} myProducts={myProducts} />
      
    </div>
  )
}

export default App

