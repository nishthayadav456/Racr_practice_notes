function FunCompo(Props){
    // console.log(Props.data)
    console.log(Props.data)
    return(
        <div>
           {/* <h2>{Props.data}</h2> */}
          <h2>{Props.data.name}</h2> 
          
           
    
            <h2>This is child component</h2>
        </div>
    )
}
export default FunCompo