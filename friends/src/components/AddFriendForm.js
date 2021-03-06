import React from 'react';

function AddFriendForm(props) {
    return (
        <div>
        <form className='addFriendForm'>
            <input placeholder="Friend Name" name='name' value={props.newFriend.name} onChange={props.changeHandler}/>
            <input placeholder="Friend Email" name='email' value={props.newFriend.email} onChange={props.changeHandler}/>
            <input placeholder="Friend Age" name='age' value={props.newFriend.age} onChange={props.changeHandler}/>
        </form>
        <button onClick={props.addFriend}>Add Friend</button>
        </div>
    )
}

export default AddFriendForm;