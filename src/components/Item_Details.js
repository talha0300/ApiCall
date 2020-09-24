import React from 'react'
import { useState,useEffect  } from 'react'
import axios from 'axios'
import Item from './Item.js'

const Item_Detail = (props) =>  {
  const url=`http://localhost:3000/api/v1/items/${props.match.params.id}.json`
  const [item, setItem] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect( () => {
    axios.get(url)
    .then( resp =>
      {
        setItem(resp.data)
        setLoaded(true)
      })
      .catch(
        data => {})
      }, [])









    return (
      <div className="item-detail">
      {console.log(item,loaded)}
      
      {
        loaded && <Item item={item[0]} />
    }

      </div>
    );


}
export default Item_Detail
