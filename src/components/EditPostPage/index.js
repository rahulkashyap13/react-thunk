import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import Validator from "js-object-validation";
import { PostValidations, PostValidationsMessaages } from "../../validations";
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.postSessionData ?  this.props.postSessionData.title: "",
            content:  this.props.postSessionData ? this.props.postSessionData.content: "" ,
            status:  this.props.postSessionData ?  this.props.postSessionData.status: "publish",  
            id:  this.props.postSessionData ?  this.props.postSessionData.id: "",  
            errors: {}
        }
    }    

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
		errors: {}
		});
		try {
			const { isValid, errors } = Validator(
				this.state,
				PostValidations,
				PostValidationsMessaages
			);
			if (!isValid) {
				this.setState({
					errors,
				});
				return;
			}
			const {  title, content, status, id } = this.state;
			this.props.updatePost({
				title: title,
				content: content,
                status: status,
                id: id
			});
		} catch (error) {
			//console.log(error);
		}
	}

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [ name ]: value,
        errors: {
          ...this.state.errors,
          [ name ]: ""
        }
      });
    };

	render() { 
      const { errors } = this.state;
      console.log(this.state)
     
		return (
      <>
          <Form className="mt-2 mb-2">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                  name="title"
                  value={ this.state.title }
                  type="text"
                  placeholder="Title"
                  onChange={ this.handleChange }
                  autoComplete="title"/>
                  {errors && errors[ "title" ] ? (
                      <div className="text-danger">{errors[ "title" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description"  
                  name="content"
                  value={ this.state.content }
                  as="textarea" rows="3"
                  type="text"
                  placeholder="Description"
                  onChange={ this.handleChange }
                  autoComplete="descrition"/>
                  {errors && errors[ "content" ] ? (
                      <div className="text-danger">{errors[ "content" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" placeholder="status"  
                  name="status"
                  value={ this.state.status }
                  type="text"
				  placeholder="Status"
				  onChange={ this.handleChange }
                  autoComplete="status"
                  />
                  {errors && errors[ "status" ] ? (
                      <div className="text-danger">{errors[ "status" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>              
              <Button variant="primary" type="submit"  onClick={ this.handleSubmit }
              >
                  Submit
              </Button>
          </Form>
      </>
		);
	}
}

export default EditUser;