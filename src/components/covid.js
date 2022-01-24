import React, { useEffect, useState } from 'react'
import '../index.css'
// import ReactDOM from 'react-dom';
const Covid = () => {
    const name = "satish";
    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actuledata = await res.json();
            setData(actuledata.statewise[0])
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData()
    })
    return (
        <> <h1> first changes</h1>
            <h1> live Data</h1>
            <h2>Covid 19 Coronavirus tracker</h2>
            <h2>Total recovered {data.recovered}</h2>
            <h2>Total confirmed {data.confirmed}</h2>
            <h2>Total deaths {data.deaths}</h2>
            <h2> lastupdatedtime {data.lastupdatedtime}</h2>
            <h1 className="heading">My name is {name}</h1>
            <div className="img_div">
                <img src="https://picsum.photos/200/305" />
                <img src="https://picsum.photos/200/301" />
                <img src="https://picsum.photos/200/302" />
                <a href='http://eventindians.com' target="_event">
                    <img src="https://picsum.photos/200/303" />
                </a>
            </div>
        </>
    );
}
export default Covid