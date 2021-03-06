import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import { ButtonPanel } from './buttonPanel.jsx';
import { ResourceTable } from './resourceTable.jsx';
import { BookList } from './bookList.jsx';

var rowStyle = {
	marginTop:'20px'
};

var serverUrl = "http://localhost:8080/resource";

class Content extends React.Component {
  render() {
    return <Grid>
  			<Row>
  		    	<Col xs={4} md={4}>
					<ButtonPanel serverUrl={serverUrl}>Panel</ButtonPanel>
		  		</Col>
      			<Col xs={8} md={8}>
					<InputGroup>
						<InputGroup.Addon>Поиск</InputGroup.Addon>
						<FormControl type="text" />
					</InputGroup>
	  			</Col>
	  		</Row>
			<Row></Row>
		    <Row style={rowStyle}>
				<BookList/>
			</Row>
	  	   </Grid>;
  }
}
        
ReactDOM.render(<Content/>, document.getElementById('content'));


