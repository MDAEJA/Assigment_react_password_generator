import React, { useState } from 'react'
import '../components/passwordStyle.css'
import { numbers,upperCaseLetters,lowerCaseLetters,specialCharacters } from '../characters';

export default function Password() {
const [password,setPassword] = useState('Password Will Getting Here');
const [passwordlength,setPasswordLength] = useState(10);
const [uppercase,setUpperCase] = useState(false);
const [lowercase,setLowerCase] = useState(false);
const [number,setNumber] = useState(false);
const [symbols,setSymbols] = useState(false);

function generatepassword(){
let characterList = '';
if(!uppercase && !lowercase && !number && !symbols) alert("select check-box")
if(uppercase){
    characterList = characterList + upperCaseLetters
}
if(lowercase){
    characterList = characterList + lowerCaseLetters
}
if(number){
    characterList = characterList + numbers
}
if(symbols){
    characterList = characterList +  specialCharacters
}
setPassword(generatedpassword(characterList));
}

function generatedpassword(characterList){
let createpassword = ''
const passwordlen = passwordlength;
const characterListLength = characterList.length
for(let i=0; i<passwordlen ; i++){
    const randomIndx =Math.round( Math.random() * characterListLength);
    createpassword = createpassword + characterList.charAt(randomIndx)
}
  return createpassword;
}

function copyToClipboard(){
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
    alert("password has been copied")
}

function copypassword(){
    copyToClipboard()
}



  return (
    <>
    <div style={{ padding:'10px 20%' ,display:'flex',flexDirection:'column',gap:'10px',justifyContent:'center',alignItems:'center'}}>
    <div style={{border:'2px solid white',backgroundColor:'black', borderRadius:'10px ',color:'white', padding:'20px 20px', display:'flex',flexDirection:'column',gap:'20px'}}>  
        <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
            <div className='text-div'>{password}</div>
            <button className='copy-button' onClick={copypassword}>Copy</button>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center'}}> 
            <strong>Select Password Length(** 8 - 50 character)</strong>
            <input style={{padding:'10px 10px',borderRadius:'10px',fontStyle:'oblique',fontWeight:'700'}} type='number' placeholder='Enter password length' defaultValue={passwordlength}  onChange={(e)=>{
               setPasswordLength(e.target.value)
               
            }}></input>
        </div>
        <div style={{listStyle:'none', fontStyle:'italic'}}>
            <ul style={{listStyle:'none',display:'flex',justifyContent:'space-around'}}>
                <li>
                    <input type='checkbox' id='uppercase' checked={uppercase} onChange={(e)=>setUpperCase(e.target.value)}></input>
                    <label for='uppercase' >Includes UpperCase</label>
                    </li>
                    <li>
                    <input type='checkbox' id='lowercase' checked={lowercase} onChange={(e)=>setLowerCase(e.target.value)} ></input>
                    <label for='lowercase'>Includes LowerCase</label>
                </li>
            </ul>
        </div>
       
        <div style={{listStyle:'none', fontStyle:'italic'}}>
            <ul style={{listStyle:'none',display:'flex',justifyContent:'space-around'}}>
                <li>
                    <input type='checkbox' id='number' checked={number} onChange={(e)=>setNumber(e.target.value)}></input>
                    <label for='number'>Includes Numbers</label>
                    </li>
                    <li>
                    <input type='checkbox' id='symbols' checked={symbols} onChange={(e)=>setSymbols(e.target.value)}></input>
                    <label for ='symbols'>Includes Symbols</label>
                </li>
            </ul>
        </div>

    </div >
    <button onClick={generatepassword} className='copy-button' style={{width:'20%',padding:'10px 10px',borderRadius:'10px'}}>Generate</button>
    </div>
    
    </>
  )
}
