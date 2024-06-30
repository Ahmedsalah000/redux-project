import  { useDispatch, useSelector } from "react-redux";
function App(){
  // it  understanad that use selector that i have store and can  acccess it 
  //4- access data from store  resducer  with  use selector 
  const data =useSelector(state=>state)
  const dispatchCounter = useDispatch()
  console.log(data)

  return(
    <div>
      <h3>counter :</h3>
      <h3>{data}</h3>
      <button onClick={()=>dispatchCounter({type:'INCREMENT'})}> increase</button>
      <button>decrease</button> 
      <button>Reset</button>
    </div>
  )
}

export default App;