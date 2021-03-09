import imgplanete from "../../assets/imgmars.jpg";



const PlaneteCard = () =>{
    return(
        <a href="/destination/planete">
            <div className="planete">
            <img src={imgplanete}></img>
            <h1>Mars</h1>
        </div>
        </a>
       
    )
}

export default PlaneteCard