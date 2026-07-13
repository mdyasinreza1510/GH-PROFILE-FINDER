import { useRef, useState } from "react";
import "./Herosection.css"
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FiUsers } from "react-icons/fi";


function Herosection() {
    let base_url = "https://api.github.com/users/"
    const [username, setusername] = useState("");
    const [userdata, setuserdata] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");
    const [popup, setpopup] = useState(false);
    const clearref = useRef(null);
    const [repos, setrepos] = useState([]);


    function usernamechange(event) {
        setusername(event.target.value)
    }

    function close() {
        setpopup(false);
        seterror("");

    }

    function clear() {
        clearref.current.value = "";
        setusername(event.target.value)
    }

    const display = async () => {

        if (username == "") {
            seterror("enter a github username !!");
            setuserdata(null);
            setpopup(true)
            setrepos([]);

            return;
        }
        setloading(true);
        seterror("");


        const response = await fetch(`${base_url}${username}`);
        const response2 = await fetch(`${base_url}${username}/repos`)



        if (response.status === 404) {
            seterror("user ot found");
            setusername("");
            setpopup(true);

            setrepos([]);
            setloading(false);
            return;
        }
        const data = await response.json();
        const data2 = await response2.json();
        setuserdata(data);
        setrepos(data2);
        console.log(data2);
        setloading(false);




    }

    return (
        <>
            <section className="homepage">

                {popup && <div className="overlay">
                    <div className="user-msg">
                        <p >{error}</p>
                        <button className="close-btn" onClick={close}>close</button>
                    </div>

                </div>}



                <div className="input-box">
                    <input ref={clearref} onChange={usernamechange} type="text" placeholder="Enter username" value={username} />
                    <button onClick={display}>{loading ? "loading..." : "SEARCH"}</button>
                    <button onClick={clear}>X</button>
                    <p>{error}</p>
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
                                {repos.map((repo) => (
                                    <div className="repobox" key={repo.id}>

                                        <div className="info1">

                                            <div className="logo"><RiGitRepositoryCommitsLine size={40} color="#3C0753" />
                                            </div>

                                            <div className="texts">
                                                <h3 style={{ color: "white" }}>{repo.name}</h3>
                                                <p style={{ color: "rgb(228, 228, 228)" }}>{repo.description}</p>
                                                <p style={{ color: "rgb(195, 195, 195)" }}>{repo.language}</p>
                                            </div>
                                        </div>

                                        <div className="info2">
                                            <div className=" stars-box">
                                                <span className="sp" htmlFor=""><FaRegStar /> {repo.stargazers_count
                                                }</span>

                                                <span className="sp" htmlFor=""><IoIosGitNetwork />{repo.forks_count
                                                }</span>
                                            </div>
                                            <div className="lastupdated">
                                                <span >Last Updated
                                                    <br />
                                                    {new Date(repo.updated_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                    </div>



                                ))}



                            </div>
                        </div>
                    </div>



                </div>


            </section>

        </>

    );

}
export default Herosection