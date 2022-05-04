import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="d1edd90d-3c5d-4f70-882b-4ff1de2da614"
      userName="alaa-samy"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;
