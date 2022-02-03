import React, { useState } from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container, Nav,Row} from 'react-bootstrap';
import Image from './Image';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const [route,setRoute] = useState(0); 
  return <div>
      <Container style={{marginBottom:"3%"}}>
      <Row style = {{marginTop:"1%"}}>
        <Col style = {{display:"flex",justifyContent:"left"}}>
        <div style = {{marginLeft:"5%"}}>
      <img src={logo} style = {{width:'100px',height:'90px'}}/>
    </div>
      <div style = {{paddingTop:"3.7%",textDecoration:"none"}}><Link to='/' style = {{textDecoration:"none",color:"#B1D0E0"}}><h2 style = {{fontFamily:"sans-serif "}}>OnlineClinic</h2></Link></div>
        </Col>
        <Col style = {{paddingTop:"2%",display:"flex",justifyContent:"right"}}>
        <div style = {{textDecoration:"none",color:"white",marginRight:"2%"}}><h4 style = {{fontFamily:"sans-serif "}}>Discover</h4></div>
        <div style = {{marginRight:"2%"}}><h4 style = {{color:"white",fontFamily:"sans-serif "}}>Join</h4></div>
        <FontAwesomeIcon icon={faBell} size='2x'style={{color:"snow"}}/>
        </Col>
      </Row>
    </Container>
    <Container style={{marginBottom:"8%"}}>
      <Row>
        <Col className='col-xl-3' style={{justifyContent:"left",marginBottom:"5%"}}>
        <div style = {{marginBottom:"8%"}}>
      <img src={logo} style = {{width:'70px',height:'60px'}}/>
    </div>
        <div style={{listStyle:"none",borderStyle:'solid',borderRadius:"50px",paddingBottom:"20%",paddingTop:"12%"}}>
          <ul style={{listStyle:"none"}}>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faHouseUser} size='x'style={{color:"snow"}}/> Dashboard</li>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{color:"snow"}}/> Consult Doctors</li>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{color:"snow"}}/> Appointments</li>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{color:"snow"}}/> DoctorAI</li>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{color:"snow"}}/> Payments</li>
            <li style={{color:"white",fontSize:"160%",marginBottom:"5%"}}><FontAwesomeIcon  icon={faUser} size='x'style={{color:"snow"}}/> Registration Info</li>
          </ul>
          </div>
        </Col>
        
        <Col>
        <Container style={{justifyContent:"center"}}>
        <h2 style={{marginBottom:"3%",color:"#B1D0E0",marginLeft:"8%"}}><b>Profile</b></h2>
        <div style = {{marginBottom:"3%",display:"flex",justifyContent:"center"}}>
      <img src={logo} style = {{width:'130px',height:'120px'}}/>
        </div>
        <form>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>First Name: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"5%",width:"30%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Last Name: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"15%",width:"30%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Email: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"8%",width:"79%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Contact Number: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"10%",width:"70%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Address: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"15%",width:"76%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>City: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"5%",width:"30%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>State: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"20%",width:"30%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Country: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"5%",width:"30%",borderRadius:"20px"}}/>
          <label style={{marginBottom:"3%",color:"#B1D0E0",marginRight:"1%"}}>Zip Code: </label>
          <input style={{marginBottom:"3%",backgroundColor:"white",marginRight:"15%",width:"30%",borderRadius:"20px"}}/>
          
          <Button style={{marginLeft:"40%",backgroundColor:"#6998AB",padding:"1% 6%",borderRadius:"19px",borderColor:"transparent"}}>Save</Button>
          </form>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default Dashboard;
