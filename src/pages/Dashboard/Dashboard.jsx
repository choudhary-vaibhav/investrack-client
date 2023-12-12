import { useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { TableRow } from '../../components/TableRow/TableRow';
import { ValueCard } from '../../components/ValueCard/ValueCard';
import './Dashboard.css';
import { API_CLIENT } from '../../services/api-client';
import loading from '../../assets/loading1.gif';

export const Dashboard = () => {
    const [load, setLoad] = useState(true);
    const [portfolioArr, setPortfolioArr] = useState([]);
    const [noOfInvst, setNoofInvst] = useState(0);
    const [totalInvst, setTotalInvst] = useState(0);
    const [rate, setRate] = useState(0);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    //portfolio Object
    const portfolioName = useRef({});
    const portfolioRate = useRef({});
    const portfolioDate = useRef({});
    const portfolioPeriod = useRef({});
    const portfolioType = useRef({});
    const portfolioValue = useRef({});

    useEffect(()=>{
        getPortfolioData();
    },[]);

    const getPortfolioData = async () => {
        const Email = sessionStorage.getItem('email');
        const Name = sessionStorage.getItem('name');
        setName(Name);
        setEmail(Email);
        try{
            
            const userObj = {
                'email': Email,
            };
            // console.log(userObj)
            const result = await API_CLIENT.post(process.env.REACT_APP_DASHBOARD_URL, userObj);

            if(result.data){
                console.log(result.data.result.portfolio)
                setNoofInvst(result.data.result.portfolio.length);
                setTotalInvst(result.data.total);
                setPortfolioArr(result.data.result.portfolio);
                setRate(result.data.rate);
                setLoad(false);
            }

        }catch(err){
            console.log(err);
        }
    }

    const addToPortfolio = async () => {
        try{
            const userObj = {
                "email": email,
                "portfolioObj" : {
                    "name": portfolioName.current.value,
                    "issueDate": portfolioDate.current.value,
                    "rate": portfolioRate.current.value,
                    "period": portfolioPeriod.current.value,
                    "type": portfolioType.current.value,
                    "value": portfolioValue.current.value
                }
            };
            // console.log(userObj)
            const result = await API_CLIENT.post(process.env.REACT_APP_APPEND_URL, userObj);

            if(result.data){
                window.location.reload();
            }

        }catch(err){
            console.log(err);
        }
    }

    

    return <>
        <div id='dashboard'>
            
            <Header name={name}/>

            <div id='summary'>
                <ValueCard color='#00CD66' text='Total Invested Amount' value={'$'+totalInvst} />
                <ValueCard color='#4169E1' text='Number of Investments' value={noOfInvst} />
                <ValueCard color='#A020F0' text='Rate of Return' value={'+'+rate} />
            </div>

            <h3>
                Asset Issues Table
            </h3>

            <div id='table-card'>
                <table>
                    <tr>
                        <th style={{ width: '150px' }} >Issue Name</th>
                        <th style={{ width: '150px' }} >Value($)</th>
                        <th style={{ width: '80px' }} >Issue Date</th>
                        <th style={{ width: '80px' }} >Return Rate</th>
                        <th style={{ width: '80px' }} >Time Period</th>
                        <th style={{ width: '80px' }} >Interest Type</th>
                        <th style={{ width: '150px' }} >Current Value($)</th>
                    </tr>

                    {load?
                        <div className='loading'>
                        <img className='loading-img' src={loading}></img>
                        </div>
                        :
                        portfolioArr.map(obj => {
                            return(
                                <TableRow object={obj}></TableRow>
                            )
                        })
                    }
                </table>
            </div>

                
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                ADD TO PORTFOLIO
            </button>

            {/* Modal View for Add to Portfolio */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add To Portfolio</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="issue-name" class="form-label">Issue Name</label>
                        <input ref={portfolioName} type="text" class="form-control" id="issue-name" placeholder="eg. FD, SGB"/>
                        <label for="value" class="form-label">Value($)</label>
                        <input ref={portfolioValue} type="text" class="form-control" id="value" placeholder="eg. 10000"/>
                        <label for="date" class="form-label">Issue Date</label>
                        <input ref={portfolioDate} type="text" class="form-control" id="date" placeholder="MM/DD/YYYY"/>
                        <label for="period" class="form-label">Time Period</label>
                        <input ref={portfolioPeriod} type="text" class="form-control" id="period" placeholder="eg. 3 (years)"/>
                        <label for="type" class="form-label">Type</label>
                        <input ref={portfolioType} type="text" class="form-control" id="type" placeholder="SI/CI"/>
                        <label for="rate" class="form-label">Return Rate(%)</label>
                        <input ref={portfolioRate} type="text" class="form-control" id="rate" placeholder="eg. 7.5"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={addToPortfolio} type="button" class="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        
    </>
}