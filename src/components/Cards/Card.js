import PropTypes from 'prop-types';

//Вёрстка card в bootstrap местами такая себе
//не стал выносить h5 и прочие куски кода выше (через children), так как тут bootstrap-зависимая верста, вынес только <p>
const Card = ({...props}) => (
    <div className="card" style={{width: '18rem'}}>
        {props.imgSrc && <img src={props.imgSrc} className="card-img-top" alt={props.title} />}
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {props.children}
            <a href={props.url} className="btn btn-primary">{props.urlTitle}</a>
        </div>
    </div>
)

Card.propTypes = {
    imgSrc: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urlTitle: PropTypes.string.isRequired
}

export default Card;