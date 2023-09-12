class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  initMessage = () => {
    const message = this.createChatBotMessage(
      "Welcome to AniHome, Say Hi to start"
    );
    this.addMessageToState(message);
  };

  greet = () => {
    const message = this.createChatBotMessage("Write the animal name for help. For example: Cat, Dog, Cow, and Rabbit.");
    this.addMessageToState(message);
  };

  handleDogs = () => {
    const message1 = this.createChatBotMessage("Handling a dog requires patience, care, and understanding of the dog's behavior. Here are some general tips for handling a dog:");
    const message2 = this.createChatBotMessage("1.Approach the dog calmly and slowly, allowing them to sniff you first to become familiar with your scent.");
    const message3 = this.createChatBotMessage("2.Avoid making sudden movements or loud noises that may startle the dog.");
    const message4 = this.createChatBotMessage("3.Use a friendly and soothing tone of voice when speaking to the dog.");
    const message5 = this.createChatBotMessage("4.Pet the dog gently, avoiding sensitive areas like the face, ears, and tail.");
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);

  };

  handleCats = () => {
    const message1 = this.createChatBotMessage("Handling a cat requires patience, care, and understanding of the cat's behavior. Here are some general tips for handling a cat:");
    const message2 = this.createChatBotMessage("1.Approach the cat calmly and slowly, allowing them to sniff you first to become familiar with your scent.");
    const message3 = this.createChatBotMessage("2.Avoid making sudden movements or loud noises that may startle the cat.");
    const message4 = this.createChatBotMessage("3.Avoid picking up a cat by the scruff of their neck, as this can be uncomfortable or even painful for the cat.");
    const message5 = this.createChatBotMessage("4.Pet the cat gently, starting with the head and neck and working your way down their back. Avoid touching sensitive areas like the belly, tail, and paws unless the cat is comfortable with it.");
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  handleCows = () => {
    const message1 = this.createChatBotMessage("Handling a cow can depend on the specific context, such as whether you are working with a dairy cow, beef cow, or show cow. However, here are some general tips for handling cows:");
    const message2 = this.createChatBotMessage("1.Approach the cow calmly and confidently. Cows can sense fear and anxiety, so try to remain calm and avoid sudden movements or loud noises.");
    const message3 = this.createChatBotMessage("2.Use a gentle touch. When handling a cow, use a gentle touch and avoid any rough or aggressive actions. Use slow, deliberate movements to help the cow feel calm and safe.");
    const message4 = this.createChatBotMessage("3.Know the cow's body language. Cows communicate through body language, so it's important to understand what the cow is trying to tell you. For example, if the cow's tail is twitching or its ears are pinned back, it may be agitated or unhappy.");
    const message5 = this.createChatBotMessage("4.Use proper equipment. When handling cows, it's important to use proper equipment, such as a halter or lead rope. Make sure the equipment fits properly and is not causing any discomfort to the cow.");
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  handleRabbits = () => {
    const message1 = this.createChatBotMessage("Handling a rabbit requires patience, care, and understanding of the rabbit's behavior. Here are some general tips for handling a rabbit:");
    const message2 = this.createChatBotMessage("1.Rabbits can be easily startled, so it's important to approach them calmly and gently. Talk to them in a soft voice and avoid making sudden movements.");
    const message3 = this.createChatBotMessage("2.When picking up a rabbit, it's important to support their body fully to avoid causing injury. Place one hand under their chest and the other under their hindquarters, with their back against your body. Hold them securely but gently.");
    const message4 = this.createChatBotMessage("3.Rabbits are prey animals and may feel threatened if they feel like their space is being invaded. Allow them to come to you and don't force interaction if they seem uncomfortable. If they're hiding, it's best to leave them alone and try again later.");
    const message5 = this.createChatBotMessage("4.Rabbits enjoy being petted but it's important to do so gently and in a way that they enjoy. Some rabbits prefer to be petted on the head, while others prefer their back or chin. Observe your rabbit's body language to see what they enjoy and what makes them uncomfortable. Avoid petting their feet or tail, as this can be uncomfortable for them.");
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  handleSolution = () => {
    const message = this.createChatBotMessage(
      "Are you happy with the solution?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  handleYes = () => {
    const message = this.createChatBotMessage(
      "Thanks, Write another animal name for help"
    );
    this.addMessageToState(message);
  };

  handleNo = () => {
    const message = this.createChatBotMessage(
      "Please register a complaint with us for help"
    );
    this.addMessageToState(message);
  };

  handleAny = () => {
    const message = this.createChatBotMessage("Sorry! didn't found the animal");
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
