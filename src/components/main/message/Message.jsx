import "./Message.css";

import PageContainer from "../container/PageContainer.jsx";
import MessageChat from "./MessageChat.jsx";
import MessageInput from "./MessageInput";

// import MessageContextProvider from "../../../store/messageStore.jsx";

export default function Message() {
  return (
    <div>
      <PageContainer title="어머니😎">
        {/* <MessageContextProvider> */}
        <div id="message">
          {/* 메시지 출력 */}
          <MessageChat />

          {/* 메시지 입력 */}
          <MessageInput />
        </div>
        {/* </MessageContextProvider> */}
      </PageContainer>
    </div>
  );
}
