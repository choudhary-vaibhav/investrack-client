import { useEffect, useState } from 'react';
import './TableRow.css';

export const TableRow = ({object}) => {
    const [currValue, setCurrValue] = useState(0);

    useEffect(()=>{
        calculateCurrValue();
    },[]);

    function calculateSimpleInterest(principal, rate, time) {
        // Simple Interest formula: SI = (P * R * T) / 100
        const simpleInterest = (principal * rate * time) / 100;
        return simpleInterest;
    }

    function calculateCompoundInterest(principal, rate, time, n) {
        // Compound Interest formula: A = P * (1 + (R / n))^(n * T) - P
        const compoundInterest =
          principal * Math.pow(1 + rate / (n * 100), n * time) - principal;
        return compoundInterest;
    }

    function calculateCurrValue(){
        const issueDate = new Date(object.issueDate);
        const currDate = new Date();

        let yearDiff = (currDate.getFullYear() - issueDate.getFullYear()) + ((currDate.getMonth() - issueDate.getMonth())/12);
        yearDiff = parseFloat(yearDiff.toFixed(3)); //rounding off

        if(object.type === 'SI'){
            const SI = calculateSimpleInterest(object.value, object.rate, yearDiff);

            setCurrValue((object.value + SI ));
        }else{
            const CI = calculateCompoundInterest(object.value, object.rate, yearDiff, 1);

            setCurrValue((object.value + CI));
        }
    }

    return <>
        <tr>
            <td>
                {object.name}
            </td>
            <td>
                {object.value}
            </td>
            <td>
                {object.issueDate}
            </td>
            <td>
                {object.rate}
            </td>
            <td>
                {object.period}
            </td>
            <td>
                {object.type}
            </td>
            <td>
                {currValue}
            </td>
        </tr>
    </>
}