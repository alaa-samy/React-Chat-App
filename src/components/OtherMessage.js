const OtherMessage = ({lastMessage , message}) => {
    const isFirstUserMessage = !lastMessage || lastMessage.sender.userName !== message.sender.userName;

    return(
      <div className="message-row">
        {isFirstUserMessage && (
          <div className="message-avatar" style={{backgroundImage : `url(${message?.sender?.avatar})`}}>
          </div>
        )};

        {(message?.attachments?.length > 0) ? 
          <img src={message.attachments[0].file} alt='message-img' className="message-image" style={{marginLeft: isFirstUserMessage ? '4px' : '48px'}}/>
          : 
          <div className="message" style={{float: 'left', backgroundColor: 'green' , marginLeft: isFirstUserMessage ? '4px' : '48px'}}>
            {message.text}
          </div>
        }
      </div>
    );
  };
  export default OtherMessage;
  