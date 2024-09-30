
const gameState = {
currentQuestion: 'initial',
questions: {
   initial: {
       text: 'Who i am?',
       answers: [
           { text: 'What defines my identity?', next: 'identity' },
           { text: 'What is the essence of my being?', next: 'essence' },
           { text: 'How do I perceive my existence in the universe?', next: 'universe' },
           { text: 'What are my fundamental beliefs about personal identity?', next: 'beliefs' }
       ]
   },

   // Identity Branch
   identity: {
       text: 'What defines your identity?',
       answers: [
           { text: 'Inner self vs outer persona', next: 'identity-1' },
           { text: 'Actions, thoughts, or perceptions', next: 'identity-2' },
           { text: 'Core self and changes', next: 'identity-3' },
           { text: 'Significance in the cosmos', next: 'identity-4' },
           { text: 'Free will and identity', next: 'identity-5' }
       ]
   },
   'identity-1': {
       text: 'How do you differentiate between your inner self and outer persona?',
       answers: [
           { text: 'Is there a distinction?', next: 'identity-1-1' },
           { text: 'How do they influence each other?', next: 'identity-1-2' },
           { text: 'Consistency vs change', next: 'identity-1-3' },
           { text: 'Personal vs societal expectations', next: 'identity-1-4' },
           { text: 'Authenticity vs performance', next: 'identity-1-5' }
       ]
   },
   // Continue branching out similarly for 'identity-2', 'identity-3', etc.

   // Essence Branch
   essence: {
       text: 'What is the essence of your being?',
       answers: [
           { text: 'Core self', next: 'essence-1' },
           { text: 'Nature vs nurture', next: 'essence-2' },
           { text: 'Existential vs essential nature', next: 'essence-3' },
           { text: 'Identity across time', next: 'essence-4' },
           { text: 'Transcendence and self', next: 'essence-5' }
       ]
   },
   // Continue branching out similarly for 'essence-1', 'essence-2', etc.

   // Universe Branch
   universe: {
       text: 'How do you perceive your existence in the context of the universe?',
       answers: [
           { text: 'Significance or insignificance', next: 'universe-1' },
           { text: 'Role in the cosmos', next: 'universe-2' },
           { text: 'Cosmic perspective on self', next: 'universe-3' },
           { text: 'Impact of the universe on identity', next: 'universe-4' },
           { text: 'Free will in a vast universe', next: 'universe-5' }
       ]
   },
   // Continue branching out similarly for 'universe-1', 'universe-2', etc.

   // Beliefs Branch
   beliefs: {
       text: 'What are your fundamental beliefs about personal identity?',
       answers: [
           { text: 'Existentialism vs essentialism', next: 'beliefs-1' },
           { text: 'Personal choices and essence', next: 'beliefs-2' },
           { text: 'Nature of personal beliefs', next: 'beliefs-3' },
           { text: 'Philosophical views on self', next: 'beliefs-4' },
           { text: 'Essence of being in context', next: 'beliefs-5' }
       ]
   },
   // Continue branching out similarly for 'beliefs-1', 'beliefs-2', etc.

   // What ought I to do? (Ethics Branch)
   ethics: {
       text: 'What ought I to do?',
       answers: [
           { text: 'Principles guiding actions', next: 'ethics-1' },
           { text: 'Determining right and wrong', next: 'ethics-2' },
           { text: 'Responsibilities to others', next: 'ethics-3' },
           { text: 'Responding to moral dilemmas', next: 'ethics-4' },
           { text: 'Moral frameworks and beliefs', next: 'ethics-5' }
       ]
   },

   // Continue expanding for each sub-question similarly.

   // What may I hope? (Hope Branch)
   hope: {
       text: 'For what may I hope?',
       answers: [
           { text: 'Ultimate goals in life', next: 'hope-1' },
           { text: 'Coping with uncertainty', next: 'hope-2' },
           { text: 'Role of optimism', next: 'hope-3' },
           { text: 'Existential hope', next: 'hope-4' },
           { text: 'Finding meaning in hope', next: 'hope-5' }
       ]
   },

   // Continue expanding for each sub-question similarly.

   // What is the human being? (Human Nature Branch)
   human: {
       text: 'What is the human being?',
       answers: [
           { text: 'Distinction from other animals', next: 'human-1' },
           { text: 'Nature of consciousness', next: 'human-2' },
           { text: 'Culture and identity', next: 'human-3' },
           { text: 'Existential vs essential views', next: 'human-4' },
           { text: 'Human uniqueness', next: 'human-5' }
       ]
   },

   // Continue expanding for each sub-question similarly.
}
};

   function renderQuestion(questionKey) {
   //    console.log(typeof gameState.questions) 
       const question = gameState.questions[questionKey];
       const questionElement = document.getElementById('question');
       const answersElement = document.getElementById('answers');
       questionElement.textContent = question.text;
       answersElement.innerHTML = '';

       console.log(question.answers)
       
       question.answers.forEach(answer => {
           const button = document.createElement('button');
           button.textContent = answer.text;
           button.className = 'answer';
           button.addEventListener('click', () => renderQuestion(answer.next));
           answersElement.appendChild(button);
       });
   }

   // Start the game
   renderQuestion('initial');