import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
 

function App() {
  return (
    <>
      <ChatEngine
          height="100vh"
          projectID="068601a6-de5f-4c74-8327-95474c339b73"
          userName="admin"
          userSecret="9876543210"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </>
  );
}

export default App;
