import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Image from './burger-logo.png'




class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      item:null
    };
  }
  render(){
    console.log(this.props.item[0]);
    const HOST="http://localhost:3000"
    const {id,title,description,price} = this.props.item[0]
    const image=this.props.item[1].image

    return (
      <div className="item">
        <figure className="figure" />
          <Link to={`/items/${id}`}><img src={`${HOST}${image}`} alt="Figure"/></Link>
          <figcaption className="figure-caption"><strong>{title}</strong></figcaption>
          <figcaption className="figure-caption"><strong>{description}</strong></figcaption>
          <figcaption className="figure-caption"><strong>{price}</strong><strong>USD</strong>
          </figcaption>



      </div>
    );
  }

}

export default Item
