import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = `https://covid19api.io/api/v1/BrazilCasesByRegion`

const BrCountry = () => {
  
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data.data[0].table)
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
              data.map(est => {
                return(
                  <tr key={est.state}>
                    <td>{est.state}</td>
                    <td>{est.cases}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

  export default BrCountry