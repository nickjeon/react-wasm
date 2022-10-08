import { useState, useEffect } from 'react'
import * as WASM from './WASM/release'
import './App.css'

function App() {

  useEffect(() => {
    console.log(WASM.add(2, 3))
  })

  return (
    <div className="App">
      {WASM &&
        WASM.addString('hello', "wasm")
      }
    </div>
  )
}

export default App
