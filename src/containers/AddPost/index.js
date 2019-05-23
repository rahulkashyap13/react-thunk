import React, { Component } from 'react';
import { connect } from "react-redux";
import CreatePostPage from "../../components/CreatePostPage";
import { createPost } from "../../store/actions/PostCreate";
class CreatePost extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  componentDidMount() {
      
  }

  updateFun = (data) => {	
    this.props.createPostFun(data);
  }

	render() { 
		return (
		<>
			<CreatePostPage 
			createPost={ this.updateFun }/>
		</>
		);
	}
}

  const mapDispatchToProps = dispatch => {
    return {
      createPostFun: data => {
        dispatch(createPost(data));
      }
    };
  };
  export default connect(
    undefined,
    mapDispatchToProps
  )(CreatePost);