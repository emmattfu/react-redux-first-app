import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

function PostFrom() {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts)
    const alert = useSelector(state => state.app.alert)
   
    function submitHandle(event) {
        event.preventDefault();
        if (!inputVal.trim()) {
            dispatch(showAlert('Поле не может быть пустым!'))
            return
        }

        if(posts.some(el => el.title === inputVal)) {
          dispatch(showAlert('Такой пост уже есть!'))
          setInputVal('')
          return
        }

        const newPost = {
            title: inputVal,
            id: Date.parse(new Date())
        }

        dispatch(addPost(newPost))
        setInputVal('')
    }

    function changeHandle(event) {
        setInputVal(event.target.value)
    }

    if (alert) {
      return <Alert text={alert.text}/> 
    }

  return (
    <form className="post-form" onSubmit={submitHandle}>
      <div className="form-group">
        <label htmlFor="post">Password</label>
        <input
          type="text"
          className="form-control"
          id="post"
          onChange={changeHandle}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default PostFrom;
