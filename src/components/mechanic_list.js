import React, { useState } from 'react';
import "../styles/mechanic_list.css";
import Popup from './Popup';



const Mechanic_list = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const handleClick = () => {

        var coll = document.getElementsByClassName("content");

        if (coll.style.display === "block") {
            coll.style.display = "none";
        } else {
            coll.style.display = "block";
        }


    };

    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <h1 style={{ color: "#5D5FEF" }}>List of mechanics</h1>
            <br />
            <br />
            <div className='mech_list_container'>
                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>

                    {isOpen && <Popup
                        content={<>
                            <b>Name</b>
                            <br/>
                            <b>Location</b>
                            <br/>
                            <b>mahindra bike vehicle no. XXXX</b>
                            <br/>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button style={{backgroundColor:"#5D5FEF",color:"White",borderRadius:"5px",marginLeft:"40%"}}>Test button</button>
                        </>}
                        handleClose={togglePopup}
                    />}

                </div>

                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>        <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button>Hire mechanic</button>

                </div>



            </div>
        </div>
    )
}

export default Mechanic_list