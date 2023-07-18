import SampleComponent from './SampleComponent'
import { HOCofSampleComponent } from './SampleComponent'

export default function App(){
    return( 
        <div style ={{padding: `50px`}}>
            <h1>HOC Component</h1>
            <SampleComponent />
            <HOCofSampleComponent  name= "Rashmi Bharti"/>
        </div>
    )
}