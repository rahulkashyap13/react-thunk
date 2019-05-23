import React, { Component } from 'react';
import { Button, Form, FormControl, Spinner } from 'react-bootstrap';
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/BlogInfo";
import { deletePost } from "../../store/actions/PostDelete";
class Posts extends Component {
    
    componentDidMount() {       
        this.props.postInfo();
    }

    deleteFun(id) {
        this.props.deleteProps(id);
    }
    editFun(id, title, description, status) {
        const authData = {
            id: id,
            title: title,
            content: description,
            status: status
        };
        localStorage.setItem("post", JSON.stringify(authData));
        this.props.history.push("/edit-post/"+id);
    }
	render() {
        const { postInfo } = this.props.postInfoData;
		return (
            <>
                <div className=" mt-3">
                <>
                    {  postInfo && postInfo.data ?
                        postInfo.data.map((item,index) => {
                        // eslint-disable-next-line react/no-array-index-key
                        return  <div className="post-box-inner" key={ index }>
                            <h4>{index + 1+ " - " }<dspaniv dangerouslySetInnerHTML={ { __html: item.title.rendered } } /> </h4>
                            <p><span dangerouslySetInnerHTML={ { __html: item.content.rendered } } /></p>
                            <div className="text-right">
                                <Button onClick={ this.editFun.bind(this, item.id, item.title.rendered, item.content.rendered, item.status) }>Edit</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button onClick={ this.deleteFun.bind(this, item.id) }>Delete</Button>                                
                            </div>                            
                        </div>
                        })
                        : null
                    }
                </>               
                </div>
            </>
		);
	}
}

const mapStateToProps = state => {
    return {
        postInfoData: state.PostReducer
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
       postInfo: userData => {
        dispatch(getPosts(userData));
      },
      deleteProps: id => {
          dispatch(deletePost(id))
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts);