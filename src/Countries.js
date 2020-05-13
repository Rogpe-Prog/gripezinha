import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = `https://covid19api.io/api/v1/AllReports`

const Countries = () => {
  
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        const contr = res.data.reports[0].table[0]      
        Object
          .keys(contr)
          .forEach((item) => {
            setData(contr)
          })   
      },[])
  })

    return(
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Cases</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(cassie => {
                return(
                  <tr key={cassie.Country}>
                    <td><Link to={`/countries/${cassie.Country}`}>{cassie.Country}</Link></td>
                    <td>{cassie.TotalCases}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

  export default Countries