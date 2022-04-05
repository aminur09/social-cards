import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__image"><img src={userData.picture.large} alt="Profile"/></div>
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Location location={userData.location}/>
                <Phone number={userData.phone} type="Cell"/>
            </div>

        </div>
    )
};

export default SocialCard;