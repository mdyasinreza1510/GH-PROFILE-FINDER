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
                <div className="cards" id="left"></div>
                <div className="cards" id="right">
                    <div className="b1"></div>
                    <div className="b2"></div>
                </div>
                
                

            </div>


        </section>
        
        </>

    );

}
export default Herosection