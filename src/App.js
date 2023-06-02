
import './App.css';
import {  useState } from 'react';

//import Layout from './components/layout';
//import Footer from './components/footer';
//import Header from './components/header';


function App() {
  const [inputarr,setInputarr]=useState([])
  const [inputview,setInputview]=useState(false)
  const[inputData,setInputdata]=useState({
    Name: "",
    Rollno: ""  })
    

function changeHandle(e){
  setInputdata({...inputData,[e.target.name]: e.target.value})

}
let {name,rollNo}=inputData;
function changehandle(){
  setInputarr([...inputarr,{name,rollNo}])
  console.log(inputarr)
  console.log(inputData,"Input Data what we enter")
  setInputdata({name: "", rollNo: ""})
}
function changehandle2(){
  console.log("Object stored in array",inputarr)
}
function changehandle3(){
  console.log(inputview)
  setInputview(true)
}
return(
  <div className="App">
  <input type="text" autoComplete='off' name="name" value={inputData.name} placeholder="Enter your name" onChange={changeHandle}/><br></br>
  <input type="text" autoComplete='off' name="rollNo" value={inputData.rollNo} onChange={changeHandle} placeholder="Rollno"/><br></br>
  <button onClick={changehandle}>Add It</button>
  <button onClick={changehandle2}>Check array on console</button>
  <button onClick={changehandle3}>View table</button>

  <table border={1} cellPadding={10} width= '30%'>
    <tbody>
    <tr>
      <td>Name</td>
      <td>Rollno</td>
    </tr>
    {
      inputarr.map(
      (info,ind) =>{
        return(
          <tr key={ind}>
            <td>{info.name}</td>
            <td>{info.rollNo}</td>
          </tr>
        )
      }
      )
    }
    </tbody>
  </table>
 </div>
);
}


 /// const [test, setTest] = useState(true)

 // const incrementCounter = () => {
    //setTimeout(() => {
      //setTest(false)
   // }, 10000);
//}

  //useEffect(() => {
    //incrementCounter()
 // }, [test])

//  return (
  
//     <div className="App">
//      <Header>

//      </Header>
//      <div className = "container my-3">
//      <Textform handling="Enter the text to analyze below"/>
//   {/* <Layout myAttribute="test" />
//       {test && <Footer />} */}
//     </div>


//   </div>
//  );
// }

export default App;
    