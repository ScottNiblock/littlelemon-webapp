import greeksalad from '../images/greeksalad.jpeg'
import kebap from '../images/kebap.jpeg'
import gyro from '../images/gyro.jpeg'
import { Link } from 'react-router-dom'
import '../css/Main.css'
const dishes =[
    {
        image: greeksalad,
        name: 'Greek Salad',
        price: 12.99,
        description: "Our Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."


    },
    {
        image: kebap,
        name: "Beef Kebap",
        price: 8.99,
        description: "Tender marinated beef skewered and charred to perfection, served with optional vegetables and accompanied by your choice of sides"
    },
    {
    image:gyro,
    name: "Greek Gyro",
    price: 13.00,
    description: "Succulent slices of seasoned meat wrapped in warm pita bread with fresh vegetables and creamy tzatziki sauce."
    }
]
const Highlights = () =>{

    return (
        <section className="specials">
            <div className='specials-top-items'>
                <h1>Specials</h1>
                <Link to="/menu"><button className='page-btn'>Online Menu</button></Link>
            </div>
            <section className='special-card-layout'>
                {dishes.map(dish => {
                    return (

                        <div className='special-card' key={dish.name}>
                            <img src={dish.image} alt='Dish image'></img>
                            <div className='dish-all'>
                           <div className='dish-info'>
                            <p><b>{dish.name}</b></p>
                            <p className='dish-price'>${dish.price}</p>
                            </div>
                            <p className='dish-desc'>{dish.description}</p>
                            <button className='page-btn delivery-btn'>Order for Delivery x1</button>
                            </div>

                        </div>


                    )
                })}
            </section>

        </section>
    )
}
export default Highlights;