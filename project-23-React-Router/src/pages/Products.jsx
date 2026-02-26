import { Link } from "react-router-dom"

export default function Products() {

    //for example we have our products data here
    const PRODUCTS = [
        {id: 1, name: "product 1"},
        {id: 2, name: "product 2"},
        {id: 3, name: "product 3"},
        {id: 4, name: "product 4"}
    ]

    return <>
        <h1>This is my products page.</h1>
        <ul>
            {PRODUCTS.map(product => <li key={product.id}><Link to={`${product.id}`}>{product.name}</Link></li>)}
        </ul>
    </>
};
