import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
 

function App() {
  return (
    <>
      <ChatEngine
          height="100vh"
          projectID="7509e767-5964-4595-9688-edcd5d547654"
          userName="badal"
          userSecret="123123"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </>
  );
}

export default App;
