function E(props){
console.log(props)
    return(
        <>
       
        <h1> Name:{props.value.name}</h1>
        <h1>Year:{props.value.year}</h1>
        </>
    )
}
export default E