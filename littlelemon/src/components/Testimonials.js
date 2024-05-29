import mary from "../images/mary.jpeg"
import tom from '../images/tom.jpeg'
import john from '../images/john.jpeg'
const users= [
    {
        rating:5,
        image:tom,
        name:"Tom B.",
        comments:"Was looking for a quick bite to eat and found this hidden gem, the greek salad is one of the best I have ever had!"
    },
    {
        rating:5,
        image:mary,
        name:"Mary H.",
        comments:"I took my kids here and I don't think I have ever seen them enjoy healthy food so much"
    },
    {
        rating:5,
        image:john,
        name:"John D.",
        comments:"The only thing better than the service is the food!"
    },
]
//populate amt of stars based on user rating
const generateStars = (rating) => {
    return '⭐'.repeat(rating);
}
const Testimonials = () =>{
    return(
        <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonial-layout">
            {users.map(user =>{
                return(
                    <div className="testimonial-card">
                         <img src={user.image} alt="user image" className="user-img"/>
                        <p>{generateStars(user.rating)}</p>
                        <p>{user.comments}</p>
                        <p>- {user.name}</p>
                    </div>
                )
            })}

        </div>
        </section>
    )
}
export default Testimonials