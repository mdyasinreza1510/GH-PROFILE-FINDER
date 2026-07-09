import { useState } from "react";
import "./Herosection.css"
function Herosection(){
    const [username,setusername]=useState("");
    const [userdata,setuserdata]=useState(null);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState("");

    function usernamechange(event){
        setusername(event.target.value)
    }
    function display(){
        console.log("username:",username);
        
    }

    return(
        <>
        <section className="homepage">


            
            <div className="input-box">
                <input onChange={usernamechange} type="text" placeholder="Enter username" value={username}/> 
                <button onClick={display}>SEARCH</button>
            </div>


            <div className="main-box" >
                <div className="cards" id="left">
                    <div className="pfp"></div>
                    <span>USERNAME</span>
                    <span>ABOUT</span>
                    <div className="details">my details</div>
                    <button>vuew on github</button>
                </div>



                <div className="cards" id="right">
                    <div className="b1">
                        <div className="mini-boxes" id="r1"></div>
                        <div className="mini-boxes" id="r2"></div>
                        <div className="mini-boxes" id="r3"></div>
                        <div className="mini-boxes" id="r4"></div>
                    </div>



                    <div className="b2">
                        <div className="d1">
                            <span>repositories</span>
                            <button>view all</button>
                        </div>

                        <div className="repo-main-box">
                            <div className="repobox"></div>
                            <div className="repobox"></div>
                            <div className="repobox"></div>
                            <div className="repobox"></div>
                            <div className="repobox"></div>
                        </div>
                    </div>
                </div>
                
                

            </div>


        </section>
        
        </>

    );

}
export default Herosection