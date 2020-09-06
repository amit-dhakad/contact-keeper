import React from 'react'
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';
const Alerts = () => {
    const alertContext = useContext(AlertContext);
    console.log('alertContext: ', alertContext);
    console.log(alertContext.alerts.length > 0)
    return (
        alertContext.alerts.length > 0 &&
        alertContext.alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'/> {alert.msg}
            </div>
        ))
    )
}

export default Alerts
