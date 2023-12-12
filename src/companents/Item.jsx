import React from 'react'

function Item({table,settables,myProduct}) {
  const handleClick=(id)=>{
     let deletedProducts=table.filter((product)=>product.id!==id)
    
     settables(deletedProducts)
  }

  return (
    <div>
      <table>
 
    <tr>
      <th>id</th>
      <th>title</th>
      <th>catagory</th>
      <th>price</th>
  
    </tr>
   <tr>
      <td>{myProduct.id}</td>
      <td>{myProduct.title}</td>
      <td>{myProduct.category}</td>
      <td>{myProduct.price}</td>
      <td><button onClick={()=>handleClick(myProduct.id)}>delete</button></td>
    </tr>
  
</table>

    </div>
  )
}

export default Item
