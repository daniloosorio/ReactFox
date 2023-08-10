'use client';
import Image from 'next/image'
import { LazyImage } from '../../components/RandomFox'
import Head from 'next/head'
import {useState,MouseEventHandler} from "react"
//import {random} from "lodash"

const random = () => Math.floor(Math.random() *123)+1
const generateId = () => Math.random().toString(36).substring(2,9)

export default function Home() {
const [images, setImages] = useState<Array<IFoxImageItem>>([ //useState<Array<string>>([
]);

const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) =>{
  event.preventDefault()
  const newImageItem : IFoxImageItem =   {id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg`}
  setImages([
    ...images,
    newImageItem
  ])
  window.plausible("add_fox")
}

  return (
    <div>
      <Head>
        <title>Zorros</title>
        <meta name='zorritos' content="generate by dprograming" />
        <link rel="icon" href='/favicon.ico'/>
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>,
      <main>
        <div className='rounded bg-blue-400 p-2 m-2' style={{ display: 'inline-block' }}>
          <button onClick={addNewFox}>
          Add new Fox</button>
        </div>
        <div className="mx-8 flex-col content-center p-8 ">
          <h1 className="text-3xl font-bold underline bg-red-800">Lindos Zorros</h1>
          <h1>holaaa</h1>
          {images.map(({id,url})=>(
            <div key={id} className='p-4'>
                <LazyImage 
                src ={url} 
                title="fox" 
                onClick={() => console.log("algo")}     
                className="rounded bg-slate-600 shadow-2xl shadow-black "
                width ={320} 
                height="auto"/>
            </div>
          ))
          }
        
        </div>
      </main>
      
    <footer>
      <h5>fin</h5>
    </footer>
    </div>
  )
}