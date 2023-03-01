export default function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <img className="images"
                src={props.image} 
                alt={props.allternative} 
                /> 
                <span>{props.title}</span>
                <span>{props.description}</span>
                </div>
        </div>
)
}