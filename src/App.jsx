import { useState } from 'react'
import './App.css'
import { TextField,Button } from '@mui/material'

function App() {
  const[principal,setPrincipal]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)
  
  // conditional rendering
  const[isprincipal,setisPrincipal]=useState(true)
  const[israte,setisRate]=useState(true)
  const[isyear,setisYear]=useState(true)

  const validate=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target.name)
    let value=e.target.value
    let name=e.target.name

    console.log();

    if(!!value.match(/^[0-9]*$/)){
      if (name=='principle') {
        setPrincipal(value)
        setisPrincipal(true)
      }else if (name=='rate') {
        setRate(value)
        setisRate(true)
      }else{
        setYear(value)
        setisYear(true)
      }
    }else{
      if (name=='principle') {
        // even if the input is invalid the input text should be visible. for that value dhould be given  
        setPrincipal(value)
        setisPrincipal(false)
      }else if (name=='rate') {
        setRate(value)
        setisRate(false)
      }else{
        setYear(value)
        setisYear(false)
      }
    }
  }

  const handleReset = () =>{
    setisPrincipal(true)
    setPrincipal(0)
    setisRate(true)
    setRate(0)
    setisYear(true)
    setYear(0)
    setInterest(0)
  }

  const calculate =()=>{
    let i = (principal * rate * year)/100

    setInterest(i)
  }

  return (
    <div className='d-flex align-items-center justify-content-center'  style={{width:'100%', height:'100vh'}}>
        <div className="bg-light p-5 rounded" style={{width:'500px'}}>
            <h1 className='text-center'>Simple Interest</h1>
            <p className='text-center'>Calculate your simple interest easily.</p>
            
            <div className='mt-5 flex-column rounded shadow bg-warning d-flex align-items-center justify-content-center p-4'>
               <h2 className='fs-1 fw-bolder'>{/* windows+.*/}₹ {interest}</h2>
              <p>Total Simple Interest</p>
            </div>
            <form className='mt-5'>
              <div className='mb-3'>
                <TextField id="outlined-basic" value={principal || ''} label="Principal Amount" variant="outlined" name='principle' onChange={(e)=>{validate(e)}} className='w-100'/>
                {
                  !isprincipal &&
                  <p className='text-danger'>*Invalid input</p>
                }
              </div>
              <div className='mb-3'>
                {/* 
                value={value inside textfield i.e the state defined in js code}
                inorder to reset the value the attribute value should be given
                 */}
                <TextField id="outlined-basic" value={rate || ''} label="Rate of Interest" name='rate' onChange={(e)=>{validate(e)}} variant="outlined" className='w-100'/>
                {
                  !israte &&
                  <p className='text-danger'>*Invalid input</p>
                }
              </div>
              <div className='mb-3'>
                <TextField id="outlined-basic" value={year || ''} label="Year" name='year' variant="outlined" onChange={(e)=>{validate(e)}} className='w-100'/>
                {
                  !isyear &&
                  <p className='text-danger'>*Invalid input</p>
                }
              </div>

              <div className='mb-3 d-flex justify-content-between w-100'>
              <Button variant="contained" color='success' style={{width:'190px', height:'60px'}} disabled={isprincipal && israte && isyear ? false : true} onClick={calculate} >Submit</Button>
              <Button variant="outlined" color='primary' style={{width:'190px', height:'60px'}} onClick={handleReset}>Reset</Button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default App
