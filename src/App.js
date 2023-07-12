import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area, BarChart, Bar} from 'recharts';
import './App.css';
import apiData from './api.js';

function App() {
  return (
    <>
    <h1 className="chart-heading">Line Chart</h1>
    <ResponsiveContainer width='100%' aspect={3}>
      <LineChart data={apiData} width={500} height={300} margin={{top:5, right:80, left: 50, bottom:5}}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name'  interval='preserveStartEnd' tickFormatter={(val)=>val + ' prog'}/>
        <YAxis dataKey='fees' />
        <Tooltip  contentStyle={{background:'yellow'}}/>
        <Legend />

        <Line type='monotone' dataKey='student' stroke='green' activeDot={{r:8}}/>
        <Line type='monotone' dataKey='fees' stroke='red' activeDot={{r:8}}/>

        
      </LineChart>
      
    </ResponsiveContainer>

    <h1 className="chart-heading">Area Chart</h1>
    <ResponsiveContainer width='100%' aspect={3}>
      <AreaChart data={apiData} 
        width={730} height={250}  
        margin={{top: 20, right: 20, bottom: 20, left: 20, }}>
      <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name'  interval='preserveStartEnd'/>
        <YAxis dataKey='fees' />
        <Tooltip  contentStyle={{background:'yellow'}}/>
        <Legend />

        <Area type='monotone' dataKey='student' stroke='green' activeDot={{r:8}} fill='pink'/>
        <Area type='monotone' dataKey='fees' stroke='red' activeDot={{r:8}} fill='blue'/>
      </AreaChart>
      
    </ResponsiveContainer>


    <h1 className="chart-heading">Bar Chart</h1>
    <ResponsiveContainer width='100%' aspect={3}>
      <BarChart data={apiData} 
        width={730} height={250}  
        margin={{top: 20, right: 80, bottom: 20, left: 50, }}>
      <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name'  interval='preserveStartEnd'/>
        <YAxis dataKey='fees' />
        <Tooltip  contentStyle={{background:'yellow'}}/>
        <Legend />

        <Bar type='monotone' dataKey='student' fill='green'/>
        <Bar type='monotone' dataKey='fees'  fill='red'/>
      </BarChart>
      
    </ResponsiveContainer>
    </>
  );
}

export default App;
