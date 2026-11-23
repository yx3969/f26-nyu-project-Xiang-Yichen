// hintIsOpen: students need a reminder they can show or hide while reflecting on an AI answer
let hintIsOpen = false;

// completedSteps: students need to see which reflection steps they have finished
let completedSteps = [];

// userReflection: remembers the learner's own response for Step 5
let userReflection = "";

let reflectionMessage = "";

const hintButton = document.getElementById("hint-button");
const hintMessage = document.getElementById("hint-message");
const hintIcon = document.getElementById("hint-icon");
const progressMessage = document.getElementById("progress-message");

hintButton.addEventListener("click", () => {
  hintIsOpen = !hintIsOpen;
  render();
});

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

// Does the learner have a non-empty reflection response? Returns true or false.
function hasReflection(text) {
  return text.trim().length > 0;
}
  
// render: draws the reflection steps from their completion state and updates progress
function render() {

  container.innerHTML = "";

  let completedCount = 0;

  // Update hint from state
  if (hintIsOpen) {
      hintMessage.classList.remove("is-hidden");
      hintIcon.classList.add("is-on");
      hintButton.setAttribute("aria-label", "Hide hint");
    } else {
      hintMessage.classList.add("is-hidden");
      hintIcon.classList.remove("is-on");
      hintButton.setAttribute("aria-label", "Show hint");
    }
  
  // Loop through data and create elements
  reflectionSteps.forEach(function(step) {
    // Create elements
    const stepCard = document.createElement("article");
    const stepTitle = document.createElement("h3");
    const question = document.createElement("p");
    const answer = document.createElement("p");
    const completeButton = document.createElement("button");

    const stepHeader = document.createElement("div");
    stepHeader.classList.add("step-header");

    completeButton.textContent = "Mark Complete";

    if (completedSteps.includes(step.step)) {
      stepCard.classList.add("is-complete");
      completeButton.textContent = "Completed ✓";
      completeButton.disabled = true;
      completedCount = completedCount + 1;
    }

    completeButton.addEventListener("click", () => {
      completedSteps.push(step.step);
      render();
    });

    // Set content
    stepTitle.textContent = step.step;
    question.textContent = step.question;
    answer.textContent = step.answer;

    answer.classList.add("reflection-answer");

    // Append to structure
    stepHeader.appendChild(stepTitle);
    stepHeader.appendChild(completeButton);
    stepCard.appendChild(stepHeader);
    stepCard.appendChild(question);
    
    if (step.step === "Step 5") {
    
      if (hasReflection(userReflection)) {
        const savedReflection = document.createElement("p");

        savedReflection.textContent = userReflection;
        savedReflection.classList.add("reflection-answer");

        stepCard.appendChild(savedReflection);

      } else {
        const reflectionForm = document.createElement("form");
        const reflectionLabel = document.createElement("label");
        const reflectionInput = document.createElement("textarea");
        const submitButton = document.createElement("button");
        //const message = document.createElement("p");

        reflectionLabel.textContent = "Your reflection";
        reflectionLabel.classList.add("reflection-label");
        reflectionLabel.setAttribute("for", "reflection-input");

        reflectionInput.id = "reflection-input";
        reflectionInput.placeholder = "Type your response here...";

        submitButton.type = "submit";
        submitButton.textContent = "Save Response";

        //message.textContent = reflectionMessage;
        //message.classList.add("reflection-message");

        reflectionForm.appendChild(reflectionLabel);
        reflectionForm.appendChild(reflectionInput);
        reflectionForm.appendChild(submitButton);
        //reflectionForm.appendChild(message);

        //I removed the always-visible message element so it only appears when there is feedback
        if (reflectionMessage !== "") {
          const message = document.createElement("p");
          message.textContent = reflectionMessage;
          message.classList.add("reflection-message");
          reflectionForm.appendChild(message);
        }

        reflectionForm.addEventListener("submit", (event) => {
          event.preventDefault();

          if (hasReflection(reflectionInput.value)) {
            userReflection = reflectionInput.value;
            reflectionMessage = "";
          } else {
            reflectionMessage = "Please write a reflection before saving.";
          }

          render();
        });

        stepCard.appendChild(reflectionForm);
      } 

    }else {
      answer.textContent = step.answer;
      answer.classList.add("reflection-answer");
      stepCard.appendChild(answer);
    }

    container.appendChild(stepCard);

  });

  progressMessage.textContent = completedCount + " of " + reflectionSteps.length + " complete";

}

render();