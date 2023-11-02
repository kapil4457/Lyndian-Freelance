import React from 'react'

const akhilesh = () => {
  return (
    <div className='conteam'>
      <div className='image-and-heading'>
        <img
          className='teamimage'
          src='/akilesh.jpeg'
          alt='Your Image'
        />
        <h1 className='teamh1 centered-heading'>
        Akhilesh Airen <br />
        Supply Chain | Operations Research 
        </h1>
      </div>
      <div className='teamcontainer'>
        <div className='left-column'>
          <h2 className='teamh2'>Technical Expertise</h2>
          <hr className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <ul className='expertise'>
            <li>Expertise in Python, SQL, PLSQL, JavaScript</li>
            <li>LP/MIP Modelling with python Pulp and <br />
                solvers like CPLEX/CBC/HIGHS</li>
            <li>Route Optimization using Google OR-Tools</li>
            <li>Llamasoft Supply Chain Guru, Oracle
                <br />Demantra</li>
           
          </ul>
          <h2 className='teamh2'>Clients</h2>
          <hr  className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <div className='clients-flex'>
            <ul className='column'>
              <li>United</li>
              <li>Breweries</li>
              <li>Bayer</li>
              <li>Bazooka</li>
              <li>LIPO</li>
            </ul>
            
          </div>
          <h2 className='teamh2'>Domain Expertise</h2>
          <hr className='teamhr'/>
          <ul className='industry'>
            <li>Demand Forecasting</li>
            <li>Simulation</li>
            <li>Supply Planning</li>
            <li>Network Optimization</li>
            <li>Route Optimization</li>
            <li>Multi Echelon Inventory Optimization</li>
          </ul>
        </div>
        <div className='right-column'>
          <h2 className='teamh2'>Selected Relevant Experience</h2>
          <hr className='teamhr'/>
          <ul className='experience'>
            <li>
            Developed automated workflows to load different planning parameters like MOQ, LT, Forecast
            Accuracy from SAP data.one reports to MEIO model. Validate/tune MIEO results after running
            simulation and execute management presentation with focus on gaps and potential savings

            </li>
            <li>
            Responsible for the design, development and implementation of processes and systems that optimize Demand & Supply Planning and Inventory Management across Supply Chain, taking into consideration the trade-offs between carrying cost, operational cost, obsolescence cost, and service levels


            </li>
            <li>
            Developed inhouse network optimization tool with backend in python which models LP/MIP
            problem in pulp then generates MPS file which is then solved using commercial (CPLEX) or
            opensource (CBC/HIGHS) solver. This tool is being used by largest beer company in India.

            </li>
            <li>
            Developed supply planning algorithm in python which utilizes sequential optimization, where first
            objective is to minimize demand shortfall, then inventory gap and then total cost optimization. Idea
            is to create a sequential LP/MIP model which where each constraint in modelled as soft constraint
            and model should never be infeasible.

            </li>
            <li>
            Developed inhouse Demand Forecasting & Supply Planning Tool with web-based UI and backend in
            python which uses different statistical methods at selected aggregation level and select the best fit
            algorithm. For supply planning it uses simulation-based approach. Developed S&OP dashboard, so
            all planning and forecast data can be seen at one place.
 

            </li>
            <li>
            Developed inhouse route optimization tool using Google-OR tools.

            </li>
            <li>
            Executed multiple network design/ optimization projects using Llamasoft Supply Chain Guru.

            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default akhilesh