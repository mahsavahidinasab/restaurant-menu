import { useState } from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export default function Menu({ id, name, price, description, onAddToCart }) {
    const [yumCount, setYumCount] = useState(0)
    return (
    <div className="items">
        <div className="headers">
            <h2><Link to= {`/dish/${id}`}>{name}</Link></h2>
            <span className="price">${price.toFixed(2)}</span>
        </div>
        <p>{description}</p>

        <Button variant='contained' onClick={() => setYumCount(yumCount + 1)}>
            😋 Yum! ({yumCount})
        </Button>

        <Button variant='outlined' onClick={onAddToCart} sx={{ ml: 1 }}>
            Add to Cart
        </Button>
    </div>
    )
}