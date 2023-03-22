import React from 'react'
import './App.css'
import data from './data/data.json'

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="balance">
          <p className="title">My balance</p>
          <span className="balance-amount">$921.48</span>
        </div>

        <div className="icon"></div>
      </div>

      <div className="data-card">
        <h1>Spending - Last 7 days</h1>
        <div className="chart-container">
          {
            data.map((dataPoint, index) => {
              return (
                <div key={index} className='bar-container'>
                  <div className="bar" style={{height: `${dataPoint.amount * 1.55}px`}}></div>
                  <p>{dataPoint.day}</p> 
                </div>
              )
            })
          }
        </div>

        <div className='footer'>
          <div className="expenses">
            <p className="title">Total this month</p>
            <span className="expense-amount">$478.33</span>
          </div>

          <div className="stats">
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
