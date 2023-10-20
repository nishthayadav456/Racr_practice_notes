function HOC(props){
     return(
        <>
<h1 style={{backgroundColor:"pink" ,width:'40%'}}>{props.value}</h1>
<h1 style={{backgroundColor:"green" ,width:'40%'}}>{props.value}</h1>
        <h2>Data</h2>
        </>
     )
}
export default HOC