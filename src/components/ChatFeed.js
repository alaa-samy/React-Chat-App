import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () =>{
      const keys = Object.keys(messages);

      return keys.map((key , index) =>{
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : key[index - 1]  ;    
        const isMyMessage = userName === message.sender.userName;

        return (
            <div style={{ width: '100%' }}>
                <div className="message-block">
                    {
                        isMyMessage ? <MyMessage message={message} /> : <OtherMessage message={ message} lastMessage={messages[lastMessageKey]} />
                    }
                </div>
                <div className="read-receipts" style={{ marginRight : isMyMessage ? '18px' : '0' , marginLeft : isMyMessage ? '0' : '18px'}} >
                </div>
            </div>
        )
    })
  }


  if (!chat) return <h3> ...Loading</h3>;
  return(
      <div className="chat-feed">
          <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `person.person.userName`)}
                </div>
          </div>
          { renderMessages() }
          <div style={{height : '70px'}}>
              <div className="message-form-container">
                  <MessageForm {...props} chatID={activeChat} />
              </div>
          </div>
      </div>
  );
};
export default ChatFeed;
