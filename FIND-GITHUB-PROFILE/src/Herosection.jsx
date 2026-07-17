import { useRef, useState } from "react";
import "./Herosection.css"
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Ferrofluid from "./Components/Ferrofluid.jsx";


function Herosection() {
    let base_url = "https://api.github.com/users/"
    const [username, setusername] = useState("");
    const [userdata, setuserdata] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");
    const [popup, setpopup] = useState(false);
    const [result, setresult] = useState(false)
    const clearref = useRef(null);
    const [repos, setrepos] = useState([]);

    const totalStars = repos.reduce((total, repo) => {
        return total + repo.stargazers_count;
    }, 0);


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
            setresult(false);

            return;
        }

        setloading(true);
        seterror("");


        const response = await fetch(`${base_url}${username}`);
        const response2 = await fetch(`${base_url}${username}/repos`)



        if (response.status === 404) {
            seterror("user not found");
            setusername("");
            setpopup(true);
            setresult(false);
            setrepos([]);
            setloading(false);
            setresult(false);
            return;
        }


        const data = await response.json();
        const data2 = await response2.json();
        setuserdata(data);
        setrepos(data2);
        console.log(data2);
        console.log(data);
        setloading(false);
        setresult(true);

    }


    return (
        <>
            <section className="homepage">


                <div className="bg" >
                    <Ferrofluid
                        colors={["#ffffff", "#ffffff", "#ffffff"]}
                        speed={0.5}
                        scale={1.6}
                        turbulence={1}
                        fluidity={0.1}
                        rimWidth={0.2}
                        sharpness={2.5}
                        shimmer={1.5}
                        glow={2}
                        flowDirection="down"
                        opacity={1}
                        mouseInteraction
                        mouseStrength={1}
                        mouseRadius={0.35}
                    />
                </div>

                <div className="hero">
                    {popup && <div className="overlay">
                        <div className="user-msg">
                            <p >{error}</p>
                            <button className="close-btn" onClick={close}>close</button>
                        </div>

                    </div>}



                    <div className="input-box">
                        <input ref={clearref} onChange={usernamechange} type="text" placeholder="Enter username" value={username} ></input>
                        <button className="srch-btn" onClick={display}>{loading ? "loading..." : <BsSearch size={26} />
                        }</button>
                        <button className="cancel-btn" onClick={clear}>X</button>

                    </div>

                    {result && <div className="main-box" >
                        <div className="cards" id="left">
                            <div className="pfp"><img src={userdata?.avatar_url} alt="pfp" /></div>
                            <span id="name">{userdata?.name}</span>
                            <span id="user-name">@{userdata?.login}</span>

                            <span id="bio">{userdata?.bio}</span>


                            <div className="details">
                                <div className="user-details">
                                    <span className="lcwj"><FaLocationDot /> LOCATION</span> <span className="label" >{userdata?.location}</span>
                                </div>
                                <div className="user-details">
                                    <span className="lcwj"><BsBuildingsFill /> COMPANY</span> <span className="label" >{userdata?.company}</span>
                                </div>

                                <div className="user-details">
                                    <span className="lcwj"><FaLink /> WEBSITE</span> <span className="label" ><a href={userdata?.blog}>@{username}</a></span>
                                </div>
                                <div className="user-details">
                                    <span className="lcwj"><SlCalender /> JOINED</span> <span className="label" >{new Date(userdata?.created_at).toLocaleDateString()}</span>
                                </div>





                            </div>


                            <span id="view"><a href={userdata?.html_url} target="_blank">VIEW ON GITHUB</a></span>
                        </div>



                        <div className="cards" id="right">

                            <div className="b1">
                                <div className="mini-boxes" id="r1">
                                    <FiUsers size={25} />
                                    <span className="nums"> {userdata?.followers}</span>
                                    <p>FOLLOWERS</p>
                                </div>
                                <div className="divider"></div>
                                <div className="mini-boxes" id="r2">
                                    <FiUsers size={25} />
                                    <span className="nums"> {userdata?.following}</span>
                                    <p>FOLLOWING</p>

                                </div>

                                <div className="divider"></div>


                                <div className="mini-boxes" id="r2">
                                    <RiGitRepositoryCommitsLine size={25} />
                                    <span className="nums"> {userdata?.public_repos}</span>
                                    <p>REPOSITORIES</p>

                                </div>

                                <div className="divider"></div>

                                <div className="mini-boxes" id="r2">
                                    <FaRegStar size={25} />
                                    <span className="nums">{totalStars}</span>
                                    <p>STARS</p>

                                </div>

                            </div>



                            <div className="b2">
                                <div className="d1">
                                    <h5>Repositories {userdata?.public_repos
                                    } </h5>

                                </div>

                                <div className="repo-main-box">
                                    {repos.map((repo) => (

                                        <div className="repobox" key={repo.id}>

                                            <div className="info1">

                                                <div className="logo"><RiGitRepositoryCommitsLine size={40} color="#3C0753" />
                                                </div>

                                                <div className="texts">
                                                    <a href={repo.svn_url
                                                    }><h3 style={{ color: "white" }}>{repo.name}</h3> </a>
                                                    <p className="description" style={{ color: "rgb(50, 50, 50)" }}> </p>
                                                    <p style={{ color: "rgb(195, 195, 195)", fontWeight: "700" }}>{repo.language}</p>
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



                    </div>}

                </div>




            </section>

        </>

    );

}
export default Herosection