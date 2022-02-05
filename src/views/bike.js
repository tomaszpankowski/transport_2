import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BikeS1 from "../components/bike-s1";
import BikeS2 from "../components/bike-s2";
import BikeS3 from "../components/bike-s3";

class Bike extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BikeS1/>
                <BikeS2/>
                <BikeS3/>
            </Container>    
        );
    }
}

export default Bike;