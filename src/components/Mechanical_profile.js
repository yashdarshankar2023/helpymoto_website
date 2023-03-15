import { VillaOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import "../styles/mechanical_profile.css"

const Mechanical_profile = () => {
    const [ShowMore, SetShowMore] = useState(false);
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum sed purus nec rutrum. Morbi laoreet vel tellus in pulvinar. Donec ultrices faucibus leo, et placerat erat molestie non. In nec ligula nec lacus aliquet fringilla. Suspendisse in nisl eu nunc sagittis luctus vel sodales elit. Nulla facilisis nibh a egestas varius. Pellentesque ullamcorper mauris non nunc sagittis varius. Duis ex lorem, vulputate at leo sit amet, lacinia vehicula leo. Praesent consectetur egestas enim, sit amet efficitur risus fringilla at. Mauris placerat mauris metus, sit amet consequat enim rhoncus sed. Cras id tristique dui. Ut placerat est non aliquam efficitur. Mauris eget mi in velit feugiat accumsan a a m In suscipit vehicula quam eu accumsan. Nulla et risus ullamcorper, molestie diam a, volutpat ipsum. Nunc porta neque quis erat finibus consequat. Suspendisse potenti. Sed ultrices risus eu euismod aliquam. Praesent viverra massa ultrices velit viverra, a aliquam neque bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dapibus ex quis consectetur placerat. Morbi quis orci nec ipsum euismod euismod sed nec nulla. Nunc suscipit, nisi vel eleifend pharetra, massa dolor fermentum quam, eget dignissim quam urna in augue. Ut tincidunt, justo at ultricies dignissim, urna purus tincidunt ipsum, sed luctus leo ante dictum ante. Morbi congue finibus arcu, commodo congue erat tristique sed. Curabitur placerat erat orci, nec dictum lacus venenatis ut. Phasellus dictum blandit facilisis'
    return (
        <div className='mechanical_profile'>
            <h1>Profile</h1>
            <br />
            <div className='mech_profile_first'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtIHYTHVXSdiCxXKjIzizZCTUEnrq83bLPA&usqp=CAU' width="250px" height="250px" />
                <div>
                    <h2>Mechanic name</h2>
                    <h3>Company name</h3>
                    <h3>Location</h3>
                    <h4>Mechanic Id 80808080</h4>
                </div>
            </div>
            <div style={{ textAlign: "left" }} className="mech_profile_second">
                <h5 style={{ color: 'gray', marginLeft: '100px' }}>Experience-5 years</h5>
                <br />
                <h6>
                    {ShowMore ? text : `${text.substring(0, 250)}`}
                    <button className="btn" onClick={() => SetShowMore(!ShowMore)}> {ShowMore ? "Show less" : "Show more"}</button>

                </h6>
            </div>
            <br/>
            <div style={{ textAlign: "left" }}>


                <p style={{ marginLeft: '300px' }}><b>Address : </b>Lorem ipsum dolor sit  consectetur adipiscing  Vestibulum vestibulum sed purus nec  Morbi laoreet vel tellus </p>
                <p style={{ marginLeft: '300px' }}><b>Phone number : </b>+91 555-6788-543 </p>
                <p style={{ marginLeft: '300px' }}><b>Email ID : </b>Example@gmail.com </p>
            </div>

            <br />
            <div style={{ textAlign: "left", marginLeft: '300px', width: "60%" }}>

                <h2>Services</h2>
                <br />
                <div className="mech_profile_services">
                    <p className='mech_profile_service_item'>Engine Repair </p>
                    <p className='mech_profile_service_item'>Cleaning </p>
                    <p className='mech_profile_service_item'>Fuels and oils </p>
                    <p className='mech_profile_service_item'>Periodic maintenance </p>
                    <p className='mech_profile_service_item'>AC services and repair </p>
                    <p className='mech_profile_service_item'>Cleaning </p>               
                    <p className='mech_profile_service_item'>Batteries health </p>

                </div>


            </div>
            <br />
            <div style={{ textAlign: "left" }}>

                <h2 style={{ marginLeft: '300px' }}>Minimum charge</h2>
                <p style={{ marginLeft: '300px', color: "gray" }}>Starting 350₹ onwards </p>

            </div>
            <br />
            <div  className="mech_profile_reviews">

                <h2>User Reviews</h2>
                <div className='mech_profile_review'>
                    <div style={{display:"flex"}}>
                        <div style={{height:"50px",width:"50px",borderRadius:"50px",backgroundColor:"gray",margin:"30px"}}></div>
                        <div style={{marginTop:"30px"}}>
                        <p>Santosh Kumar</p>
                        <p style={{color:"gray"}}>dd\mm\yyyy</p>

                        </div>
                        
                    </div>
                    <p style={{color:"gray",marginTop:"80px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum sed purus nec rutrum. Morbi laoreet vel tellus in pulvinar.</p>


                </div>
                <br/><br/><br/><br/><br/><br/><br/>

            </div>

        </div>
    )
}

export default Mechanical_profile