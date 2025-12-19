import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Benedikt Burger",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: [
      "Continuous Integration / Continuous Delivery",
      "Testing",
      "Building",
      "Pipeline",
      "Delivery",
      "Automation",
    ],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, Github Actions?",
    // What do you want to learn in this workshop?
    expectations: ["How Jenkins compares to GH Actions"],
  },
});
