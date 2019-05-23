import React, { Component } from 'react';
import { connect } from "react-redux";
import EditPostPage from "../../components/EditPostPage";
import { updatePost } from "../../store/actions/PostUpdate";
class EditPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  componentDidMount() {
    const postSession=JSON.parse(localStorage.getItem('post'));
  }

  updateFun = (data) => {
    this.props.updatePostFun(data);
  }

	render() { 
    const postSession=JSON.parse(localStorage.getItem('post'));
		return (
		<>
			<EditPostPage 
			postSessionData={ postSession }
      updatePost = { this.updateFun } />
		</>
		);
	}
}

  const mapDispatchToProps = dispatch => {
    return {
      updatePostFun: data => {
        dispatch(updatePost(data));
      }
    };
  };
  export default connect(
    undefined,
    mapDispatchToProps
  )(EditPost);