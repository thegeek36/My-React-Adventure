import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copyMessage, setCopyMessage] = useState('');
  const generatePass = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*(){}[]:;>.?/';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopyMessage('Password copied to clipboard!');
      setTimeout(() => {
        setCopyMessage('');
      }, 2000); 
    }).catch(err => {
      console.error('Failed to copy password: ', err);
    });
  };

  return (
   
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 p-5 text-orange-500 border bg-slate-800'>
        <h1 className='text-4xl text-center p-4 my-3 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly></input>
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={50} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev); }}></input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed((prev) => !prev); }}></input>
            <label htmlFor='charInput'>Char</label>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='self-center bg-gray-400 rounded-xl mt-3 p-2 text-black' onClick={generatePass}>Generate Password</button>
        </div>
        {copyMessage && (
          <div className='text-center text-green-500 mt-4'>
            {copyMessage}
          </div>
        )}
      </div>
      
  );
}

export default App;
