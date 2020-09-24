import React from 'react'
import { useState,useEffect  } from 'react'
import axios from 'axios'

import Item from './Item.js'


const render_items= (items) => {


  if (items.length>0){
    return(
      <div className="items">

      {  items.map( (item, index) => {
            return (
              <Item
                key={index}
                  item={item}
              />
            )
        })
      }
      </div>
    )
  }
  else{
    return(
      <div>
        Loading....
      </div>
    )
  }

}

const Items = () => {
  const [items, setItems] = useState([])
  useEffect( () => {
    axios.get('http://localhost:3000/api/v1/items.json')
    .then( resp => {

      setItems(resp.data)
    })
    .catch( data => {

    })
  }, [])





  return(
    <div className="home">

          {render_items(items)}

      <div className="header"></div>
      <div className="grid"></div>
    </div>
  )
}

export default Items
