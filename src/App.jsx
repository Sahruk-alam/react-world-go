
import { Suspense } from 'react'
import './App.css'
import Countries from './Countries/countries'
const fetchPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res =>res.json())
function App() {
  return (
    <>
 <Suspense fallback={<>Data is loading</>}>
   <Countries fetchPromise={fetchPromise}></Countries>
 </Suspense>
    </>
  )
}

export default App
