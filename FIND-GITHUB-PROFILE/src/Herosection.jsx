import { useState } from "react";
import "./Herosection.css"
function Herosection(){
    let base_url="https://api.github.com/users/"
    const [username,setusername]=useState("");
    const [userdata,setuserdata]=useState(null);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState("");

    function usernamechange(event){
        setusername(event.target.value)
    }
    const display = async()=>{
        const response= await fetch(`${base_url}${username}`);
        const data= await response.json();
        console.log (data);
        setuserdata(data);
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
                    <div className="pfp"><img src={userdata?.avatar_url} alt="pfp" /></div>

                    <span>@{userdata?.login}</span>

                    <span>{userdata?.bio}</span>
                    <div className="details">my details</div>
                    <span><a href={userdata?.html_url} target="_blank">view on github</a></span>
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