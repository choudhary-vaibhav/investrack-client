import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { TableRow } from '../../components/TableRow/TableRow';
import { ValueCard } from '../../components/ValueCard/ValueCard';
import './Dashboard.css';

export const Dashboard = () => {
    const [portfolioArr, setPortfolioArr] = useState([]);
    const [dashboardObj, setDashboardObj] = useState({});

    const tempObj = {
        "_id": "65243e5e314ca6b292ce60f3",
        "name": "Test",
        "email": "test1@gmail.com",
        "password": "$2b$10$AsssKJDMK9VDONhqhpC74edKf6l.UWPKQ1x93FAH5FzZeimceGV1.",
        "portfolio": [
            {
                "name": "SGB",
                "issueDate": "10/10/23",
                "value": 20000,
                "rate": 9.5,
                "period": 3,
                "type": "SI",
                "_id": "652440e01ac9c7212ca7756d"
            },
            {
                "name": "SGB1",
                "issueDate": "11/10/22",
                "value": 25000,
                "rate": 8.5,
                "period": 3,
                "type": "SI",
                "_id": "652599af647112e2d448c8e3"
            }
        ],
        "__v": 0
    };

    useEffect(()=>{
        getPortfolioData();
    },[]);

    const getPortfolioData = async () => {
        try{
           setPortfolioArr(tempObj.portfolio);

        }catch(err){
            console.log(err);
        }
}

    

    return <>
        <div id='dashboard'>
            
            <Header/>

            <div id='summary'>
                <ValueCard color='#00CD66' text='Total Invested Amount' value='$46,000' />
                <ValueCard color='#4169E1' text='Number of Investments' value='216' />
                <ValueCard color='#A020F0' text='Rate of Return' value='+4.16%' />
            </div>

            <h3>
                Asset Issues Table
            </h3>

            <div id='table-card'>
                <table>
                    <tr>
                        <th style={{ width: '150px' }} >Issue Name</th>
                        <th style={{ width: '150px' }} >Value</th>
                        <th style={{ width: '80px' }} >Issue Date</th>
                        <th style={{ width: '80px' }} >Return Rate</th>
                        <th style={{ width: '80px' }} >Time Period</th>
                        <th style={{ width: '80px' }} >Interest Type</th>
                        <th style={{ width: '150px' }} >Current Value</th>
                    </tr>
                    {
                        portfolioArr.map(obj => {
                            console.log(obj);
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
                        <input type="text" class="form-control" id="issue-name" placeholder="eg. FD, SGB"/>
                        <label for="value" class="form-label">Value($)</label>
                        <input type="text" class="form-control" id="value" placeholder="eg. 10000"/>
                        <label for="date" class="form-label">Issue Date</label>
                        <input type="text" class="form-control" id="date" placeholder="MM/DD/YYYY"/>
                        <label for="period" class="form-label">Time Period</label>
                        <input type="text" class="form-control" id="period" placeholder="eg. 3 (years)"/>
                        <label for="type" class="form-label">Type</label>
                        <input type="text" class="form-control" id="type" placeholder="SI/CI"/>
                        <label for="rate" class="form-label">Return Rate(%)</label>
                        <input type="text" class="form-control" id="rate" placeholder="eg. 7.5"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        
    </>
}