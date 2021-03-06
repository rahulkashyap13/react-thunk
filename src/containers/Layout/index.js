import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";

const Layout = (props) => {
	return(
		<>
			<Container>			
				<Header />		
				<Row className="pl-3 pr-3 mt-1">
					<Col xs={ 4 } className= "box-border">
						<Sidebar />
					</Col>
					<Col xs={ 8 } className= "box-border">
					{ props.children }				
					</Col>
				</Row>
				<Footer />
			</Container>
		</>
	)
}

export default Layout