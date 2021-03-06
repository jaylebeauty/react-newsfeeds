import React from 'react';
import PropTypes from 'prop-types';


function Post({ id,title,delPost}){
    return(
    <div className="Post">
        <button className="Post_del" onClick={() => delPost(id)}>X</button>
        <div className="Post_title">{title}</div>
        <img className="Post_img" 
        src={`https://source.unsplash.com/random?sig=${id}`}/>
    </div>
    )
}


Post.propTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    delPost :PropTypes.func.isRequired
};


export default Post;