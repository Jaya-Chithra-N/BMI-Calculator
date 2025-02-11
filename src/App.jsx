import './App.css'
import React,{ useState } from 'react';

function App() {
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [bmi,setBmi]=useState('')
  const[message,setMessage]=useState('');

  const calcBmi = (e) => {
    e.preventDefault();
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter a valid weight and height.");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You have a Healthy Weight");
    } else {
      setMessage("You are Overweight");
    }
  };

  let reload=()=>{
    window.location.reload();
  }

  return (
    <div className='App'>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input 
              type="text" 
              placeholder='Enter weight value' 
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input 
              type="text" 
              placeholder='Enter height value' 
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='button' onClick={reload}>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
