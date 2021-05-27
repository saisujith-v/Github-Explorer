import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext';

const Alert = ({alert}) => {
    const alertContext = useContext(AlertContext);
    return (
        alertContext.alert!= null &&(
            <div className={`alert alert-${alertContext.alert.type}`}>
                <i className="fas fa-info-circle"></i>{alertContext.alert.msg}
            </div>
        )
    )
}

export default Alert;
