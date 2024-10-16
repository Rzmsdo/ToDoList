import React from 'react';
import PropTypes from 'prop-types';

const SecondCounter = (props) => {
    return (
        <div>
            <div className="counter-display">
                <div className="clock-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                </div>
                <div className="seconds hundredThousands">{props.hundredThousandsDigit}</div>
                <div className="seconds tenThousands">{props.tenThousandsDigit}</div>
                <div className="seconds thousands">{props.thousandsDigit}</div>
                <div className="seconds hundreds">{props.hundredsDigit}</div>
                <div className="seconds tens">{props.tensDigit}</div>
                <div className="seconds ones">{props.onesDigit}</div>
            </div>
        </div>
    )
}

SecondCounter.propTypes = {
    hundredThousandsDigit: PropTypes.number.isRequired,
    tenThousandsDigit: PropTypes.number.isRequired,
    thousandsDigit: PropTypes.number.isRequired,
    hundredsDigit: PropTypes.number.isRequired,
    tensDigit: PropTypes.number.isRequired,
    onesDigit: PropTypes.number.isRequired
};
SecondCounter.defaultProps = {
    hundredThousandsDigit: 0,
    tenThousandsDigit: 0,
    thousandsDigit: 0,
    hundredsDigit: 0,
    tensDigit: 0,
    onesDigit: 0,
};


export default SecondCounter;