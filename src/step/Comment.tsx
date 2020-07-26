import React from 'react';

type Comment = {
  date: Date,
  text: string,
  author: {
    name: string,
    avatarUrl: string
  }
}

type User = {
  user: {
    name: string,
    avatarUrl: string
  }
}

function formatDate(date: Date) {
  return date.toLocaleDateString();
}

function Avatar(props: User) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props: User) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props: Comment) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />