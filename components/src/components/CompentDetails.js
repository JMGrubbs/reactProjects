import React from 'react';
// import ReactDOM from 'react-dom'

const CommentDetail = (props) =>{
    return(
        <div className ="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="data">
                            {props.time}
                        </span>
                    </div>
                    <div className="text">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default CommentDetail;