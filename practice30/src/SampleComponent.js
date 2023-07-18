
export default function SampleComponent(props){
    return( 
        <>
         <h1>Hii I am sample component</h1>
         {
            props.name && <h2>Hii I am {props.name}</h2>
         }
        </>
    )
}

const hocFunction = (Component) => {

    return((props) =>(
        <div style = {{backgroundColor : `red`, paddding :`40px`}}>
            I am HOC component
            <Component {...props} />

        </div>
    ))
}
const HOCofSampleComponent = hocFunction(SampleComponent)
export {HOCofSampleComponent}