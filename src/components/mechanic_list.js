import React, { useState } from 'react';
import "../styles/mechanic_list.css";
import Popup from './Popup';



const Mechanic_list = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const handleClick = () => {

        alert("button is clicked");


    };

    return (
        <div style={{ textAlign: "center" }}>

            {isOpen && <Popup
                content={<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <b>Name</b>
                    <br />
                    <b>Location</b>
                    <br />
                    <b>mahindra bike vehicle no. XXXX</b>
                    <br />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button style={{ backgroundColor: "#5D5FEF", color: "White", borderRadius: "5px", marginLeft: "40%" }}>Test button</button>
                </>}
                handleClose={togglePopup}
            />}
            <br />
            <br />
            <h1 style={{ color: "#5D5FEF" }}>List of mechanics</h1>
            <button onClick={handleClick}>click</button>
            <br />
            <br />
            <div className='mech_list_container'>
                <div>
                    <p>Name: Yash Ajay Darshankar</p>
                    <p>Rating: 5</p>
                    <p>Location: nanded</p>
                    <p>Mobile: +91 1236547891</p>
                    <button onClick={togglePopup}>Hire mechanic</button>



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