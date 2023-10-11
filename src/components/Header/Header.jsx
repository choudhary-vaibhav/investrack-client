import './Header.css';

export const Header = ({name}) => {
    
    return <>
        <div className='header'>
            <div className='investrack'>
                INVESTRACK
            </div>
            <div id='header-center-text'>
                Investment Portfolio
            </div>
            <div className='investrack' id='avatar'>
                Hey {name}!
            </div>
        </div> 
        <div id='header-line'>

        </div>
    </>
}