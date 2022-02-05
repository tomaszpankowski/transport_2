import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import SupportS1 from "../components/support-s1";
import SupportS2 from "../components/support-s2";
import SupportS3 from "../components/support-s3";

class Support extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <SupportS1/>
                <SupportS2/>
                <SupportS3/>
            </Container>    
        );
    }
}

export default Support;