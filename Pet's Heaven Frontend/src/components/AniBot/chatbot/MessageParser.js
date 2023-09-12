class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hi")) {
      this.actionProvider.greet();
      return;
    }

    if (lowercase.includes("dog") || lowercase.includes("dogs")) {
      this.actionProvider.handleDogs();
      this.actionProvider.handleSolution();
      return;
    }

    if (lowercase.includes("cat") || lowercase.includes("cats")) {
      this.actionProvider.handleCats();
      this.actionProvider.handleSolution();
      return;
    }

    if (lowercase.includes("cow") || lowercase.includes("cow")) {
      this.actionProvider.handleCows();
      this.actionProvider.handleSolution();
      return;
    }

    if (lowercase.includes("rabbit") || lowercase.includes("rabbits")) {
      this.actionProvider.handleRabbits();
      this.actionProvider.handleSolution();
      return;
    }

    if (!message) {
      this.actionProvider.initMessage();
    } else if (
      !new RegExp(/ [a-zA-Z0-9./<>?;:"'`!@#$%^&*()[]{}_+=|\\-]+ /).test(
        lowercase
      )
    ) {
      this.actionProvider.handleAny();
    }
  }
}

export default MessageParser;
