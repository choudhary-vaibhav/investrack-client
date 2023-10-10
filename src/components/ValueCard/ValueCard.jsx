import './ValueCard.css';

export const ValueCard = (props) => {

    const circleStyle = {
        backgroundColor: props.color,
    };
    const boxStyle = {
        borderBottom: '3px solid ' + props.color,
    }

    return <>
            <div style={boxStyle} className='value-card'>
                <div className='value-card-first-line'>
                    <div style={circleStyle} className="circular-icon">
                        <i className="bi bi-currency-dollar"></i>       
                    </div>
                    <div className='value-card-text'>
                        {props.text}
                    </div>
                </div>
                <div className='value-card-number'>
                    {props.value}
                </div>
                
            </div>
            
    </>
}