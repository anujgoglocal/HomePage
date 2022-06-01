import {React, useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import PhoneInput,{ formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input/input'

export default function SignInForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword ] = useState("");
    // const [token, setToken] = useState("");

    // function saveUser(e){
    //     e.preventDefault()
    //     let data={username, password}
    //     console.log(data)
    //     fetch("https://fusionauth.io/docs/v1/tech/apis/login", {
    //         method:'POST',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(data)                                       
    //     }).then((result) => {
    //         // console.log("result", result)
    //         result.json().
    //         then((resp)=>{
    //             // setToken(resp.token)
    //             console.log(resp);
    //         })
    //     })
    // }

    const responseGoogle = (response) => {
        console.log(response);
      }
    const clientId = "775185895865-79g2kp5ss0dtb30ikuh56lhkr4vl1rjj.apps.googleusercontent.com";

return (
  <div className="App"> 
    <div className="appAside" 
    
    />
    <div className="appForm">
        <div className='formCenter'>
            
            <form action="">
                <div className="formField">
                    <h2>Sign in</h2>
                    <label className="formFieldLabel"  htmlFor="phone"> Mobile </label>
            
                    <PhoneInput
                        className="formFieldInput"
                        placeholder="Enter Your Number"
                        value={username}
                        onChange={setUsername}
                        error={username ? (isValidPhoneNumber(username) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />
                    {/* <p> {value && isValidPhoneNumber(value) ? '' : 'Enter valid Number'} </p> */}
                    <label className="formFieldLabel"  htmlFor="phone"> Password </label>
                     
                    <input className="formFieldInput" type="text" id="password" name="password" 
                        autoComplete='off'
                        placeholder="Password"
                        value={password}
                        onChange= { (e) => setPassword(e.target.value) }
                    />
                </div>

                <div className="or"> Or </div>
                <div >
                    <GoogleLogin
                        className='sign-in'
                        clientId={clientId}
                        buttonText=" Sign in with Google  "
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                />
                </div>
                <div >
                    <button className='formFieldButton'  type="submit" > Sign in</button>

                </div>

            </form>

           
        </div>
        </div>
 </div>
  )
}

