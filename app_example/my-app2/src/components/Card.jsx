
function Card(props)  {
    return (
        <div className="card">
            <div className="card-body">
                {props.title ? <h4 className="card-title">{props.title}</h4>:''}
                {props.text ? <p className="card-text">{props.text}</p>:''}
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: null,
    text: null
}

export default Card;
