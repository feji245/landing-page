import ProductCard from "../ProductCard"

function ProfileCard({ name, age, country, image }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "16px",
            width: "200px",
            borderRadius: "10px",
        }}>

            <img 
            src="https://media.istockphoto.com/id/184876509/photo/portrait-of-a-young-brazilian-man-outdoors.jpg?s=612x612&w=is&k=20&c=FtwRRNES6gqWiRfRrB0Z-8Hyn4J_J5lRuW6RWf1u4SA=" 
            alt="" 
            style={{ width: "100px", borderRadius: "100px" }}
            />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
        </div>
    )
}

export default ProfileCard;