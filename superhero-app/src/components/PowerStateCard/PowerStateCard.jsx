import { faHandBackFist, faBrain, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import TriggerTooltip from '../../helpers/TriggerTooltip';
import './PowerState.css';

const PowerStateCard = ({ powerstats }) => {

    const { intelligence, strength, power } = powerstats ? powerstats : ''

    return (
        <>
            <div className='circular-container'>
                <TriggerTooltip value={intelligence} icon={faBrain} text={`Intelligence`}/>
                <TriggerTooltip value={strength} icon={faHandBackFist} text={`Strength`}/>
                <TriggerTooltip value={power} icon={faBoltLightning} text={`Power`}/>
            </div>

        </>
    )
}

export default PowerStateCard;