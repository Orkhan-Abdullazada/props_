import React from 'react'
import Item from './Item'

function List({table,settables,myProducts}) {
  return (
    <div>
    
    {
        table && table.map(((myProduct,id)=>(<Item table={table} settables={settables} myProduct={myProduct} key={id}/>
        )))
      }
    </div>
  )
}

export default List
