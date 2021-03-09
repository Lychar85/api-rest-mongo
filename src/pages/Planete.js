import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderPlanete from '../components/planete/header';
import ArticlePlanete from '../components/planete/article';
 
const Planete = () =>{
    return(
        <div className="Planete">
            <Header/>

            <HeaderPlanete/>
            <ArticlePlanete/>


            <Footer/>
        </div>
    )
}

export default Planete