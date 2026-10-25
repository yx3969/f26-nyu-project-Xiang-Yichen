// My data array
const reflectionSteps = [
  {
  step: "Step 1",
  question: "What is the main idea of this AI-generated answer?",
  answer: "Self-regulated learning means students take an active role in managing how they learn instead of only following instructions."
  },

  {
  step: "Step 2",
  question: "What part of the answer would you question?",
  answer: "I understand the general idea, but I want to know what “monitoring progress” actually looks like in a real learning situation."
  },

  {
  step: "Step 3",
  question: "How would you explain this idea in your own words?",
  answer: "I would explain it as being responsible for your own learning. You decide what you want to achieve, choose how to study, check whether your method is working, and change it if needed."
  },

  {
  step: "Step 4",
  question: "How does this AI-generated answer connect to something you already know or have learned before?",
  //User enter the answer
  answer: "This connects to what I learned about setting learning goals and checking my own progress. It reminds me that learning is not only about completing a task, but also about noticing whether my study strategy is actually working."
  },

  {
  step: "Step 5",
  question: "What part of this topic do you still not fully understand or want to explore further?",
  //User enter the answer
  answer: " "
  }

];

// Get the container
const container = document.getElementById("steps-container");

// Loop through data and create elements
reflectionSteps.forEach(function(step) {
  // Create elements
  const stepCard = document.createElement("article");
  const stepTitle = document.createElement("h3");
  const question = document.createElement("p");
  const answer = document.createElement("p");

  // Set content
  stepTitle.textContent = step.step;
  question.textContent = step.question;
  answer.textContent = step.answer;

  // Append to structure
  stepCard.appendChild(stepTitle);
  stepCard.appendChild(question);
  stepCard.appendChild(answer);
  container.appendChild(stepCard);

  answer.classList.add("reflection-answer");
});