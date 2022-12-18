import Head from 'next/head'
import Image from 'next/image'
import ConvertApi from 'convertapi-js'
import React from 'react'

export default function Home() {


  const [resultValue, setResultValue] = React.useState('')




 async function getPDF() {
 
    let input = document.querySelector(".input")
    let convertBtn= document.querySelector("#convertBtn") 
    convertBtn.style.cursor="wait"
    let convertApi = ConvertApi.auth('NR8c9ERy4wIZNDDw')
    let params = convertApi.createParams()
    params.add('url', input.value);
    let result = await convertApi.convert('web', 'pdf', params)
    setResultValue(result.files[0].Url)
    input.value=""

    try{
      
    }
    finally {
      convertBtn.style.cursor="pointer"
    }
  }

  

  return (
    <>
      <Head>
        {<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"></link>}
        {<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"></link>}
      </Head>

      <div className='container'>

        <h1>Web Page Converter</h1>
        <p>Convert your WebPage to JPEG format</p>

        <div className='input-div'>
         
          <input className='input' type='text' placeholder='Enter URL' />
          <button onClick={getPDF} id='convertBtn' >Convert to PDF</button>
        </div>

        <div id='result'></div>


        <p className='result-para'>
          Result file:
          <a id="resultLink" className='result-link' href={resultValue}>{" "+resultValue}</a>
        </p>


      </div>
    </>
  )

}