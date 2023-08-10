import { type FunctionComponent, type FC, useRef,useEffect,useState, ImgHTMLAttributes } from "react"

type LazyImageProps = {src :string}
type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

export const LazyImage = ({src, ...imgProps}:Props) : JSX.Element=> {
   const node =  useRef<HTMLImageElement>(null)
   const [currentSrc,setcurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

   useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                console.log("hey ypu");
                setcurrentSrc(src)
            }
        })
       })
    
       //observer node
       if(node.current){
       observer.observe(node.current)
       }

       //desconectar
       return () => {
        observer.disconnect()
       }
   }, [src]); 

   //new observer


    return (
    <img 
    ref={node}
    src={currentSrc}
    {...imgProps}
     />
    )
    
}