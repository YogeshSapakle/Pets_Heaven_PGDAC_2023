import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Options/Options";

const config = {
  botName: "AniBot",
  initialMessages: [
    createChatBotMessage(`Welcome to AniHome, Say Hi to start`),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
