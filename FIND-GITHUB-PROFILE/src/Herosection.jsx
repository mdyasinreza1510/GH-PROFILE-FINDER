import "./Herosection.css"
function Herosection(){

    return(
        <>
        <section className="homepage">


            
            <div className="input-box">
                <input type="text" placeholder="Enter username"/> 
                <button>SEARCH</button>
            </div>


            <div className="main-box" >
                <div className="cards" id="card1"></div>
                <div className="cards" id="card2"></div>
                <div className="cards" id="card3"></div>
                

            </div>


        </section>
        
        </>

    );

}
export default Herosection