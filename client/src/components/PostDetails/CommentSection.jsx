import React, {useState, useRef} from 'react'
import { Typography, TextField, Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {commentPost} from '../../actions/posts'

const CommentSection=({post})=>{
    const user=JSON.parse(localStorage.getItem('profile'));
    const classes=useStyles();
    const[comments, setComments]=useState(post?.comments);
    const[comment,setComment]=useState('');
    const dispatch=useDispatch();
    const commentsRef=useRef();
    
    const handleClick=async()=>{
     const finalComment=`${user.result.name}:${comment}`;
     
     const newComments=await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({behaviour:'smooth'})
    };

    return(
        <div>
        <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">Comments</Typography>
        {comments.map((c,i)=>(
            <Typography key={i} gutterBottom variant='subtitle1'>
            <strong>{c.split(':')[0]}: </strong>
            {c.split(':')[1]}
            </Typography>
        ))
        }
        <div ref={commentsRef} />
        
        </div>
        {user?.result?.name && (
        <div style={{width:'70%'}}>
        <Typography gutterBottom variant="h6">Share your views</Typography>
        <TextField
        fullWidth
        rows={3}
        variant="outlined"
        label="Comment"
        multiline
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        />
        <Button style={{marginTop:'10px', backgroundColor:'#f64040', color:'#fff'}} fullWidth disabled={!comment} variant="contained" onClick={handleClick} >
        Post
        </Button>
        </div>)}

        </div>
        </div>
    );
};

export default CommentSection;