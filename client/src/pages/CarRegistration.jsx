import React from 'react'
import '../styles/CarRegistration.css'
const CarRegistration = () => {
  return (
   <>
<div className='pt-10'>
        <div className='row mt-10'>
           <div className='col bg-white wrapper'>
             <h2 className='text-center pt-3 '>Vehicle Registration</h2>
             <p className='text-center text-muted lead mb-3'>It's Free and Takes a Minute</p>
             <form method='POST'>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-user'></i></span>
              <input type='text' name='fname' className='form-control' placeholder='Full Name'></input>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-user'></i></span>
              <input type='date' name='dob'   className='form-control' placeholder='Date Of Birth'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-envelope'></i></span>
              <input type='Address' name='address'   className='form-control' placeholder='Address'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='text' name='city'   className='form-control' placeholder='City'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='text' name='state'  className='form-control' placeholder='State'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='number' name='pcode'  className='form-control' placeholder='Postal Code'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='number' name='pnumber'  className='form-control' placeholder='Phone Number'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='email' name='email'  className='form-control' placeholder='Email'/>
             </div>
             <h2 className='text-center pt-3 '>Vehicle Information</h2>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='text' name='model'  className='form-control' placeholder='Model'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='number' name='year'  className='form-control' placeholder='Year'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='text' name='color'  className='form-control' placeholder='Color'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='text' name='lnumber'  className='form-control' placeholder='License Plate Number'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='number' name='mileage'  className='form-control' placeholder='Mileage'/>
             </div>
             <div className='input-group mb-3'>
              <span className='input-group-text'><i className='fa fa-lock'></i></span>
              <input type='file' name='photo' accept="image/*"  className='form-control' placeholder='Photo'/>
             </div>
             <h3 className='text-center pt-3' >Declaration</h3>
             <p className='text-center text-muted mt-2'>I hereby certify that the above information is true and accurate to the best of my knowledge.<br/>
              I understand that providing false information may result in penalties or legal action.</p>
             <div className='d-grid'>
               <button type='button'  className='btn btn-success'>Registercar Now</button>
               <p className='text-center text-muted mt-2'>
                When You Register By Clicking SignUp Button, You Agree to Our
                <a href='#'> Term and Conditions</a>and <a href='#'>Privacy Policy</a>
               </p>
               <p className='text-center'> 
                 Already Have An Account ? <a href="/login">Login here</a>
               </p> 
             </div>
             </form>
           </div>
        </div>
     </div>
   </>
  )
}

export default CarRegistration