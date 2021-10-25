const Message = (props) => {
    return (
      <div className="ui message">
        <div className="header">
          {props.title}
        </div>
        <p>{props.message}</p>
      </div>
    )
  }

  export default Message