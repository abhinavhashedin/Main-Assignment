import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger} from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TriggerTooltip = ({ value, icon,text }) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {`${text} is : ${value}`}
        </Tooltip>
    );

    const GetCircularProgressBar = (value, icon) => {

        return (
            <div>
                <CircularProgressbarWithChildren className="power-card" value={value}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                </CircularProgressbarWithChildren>
            </div>
        )
    }

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(value)}
        >
            {GetCircularProgressBar(value, icon)}

        </OverlayTrigger>
    );
}

export default TriggerTooltip;