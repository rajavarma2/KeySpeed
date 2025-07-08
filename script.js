const sentences = [
  "Time flies when you're having fun,",
"Knowledge is power in every form,",
"The sun rises in the east and sets in the west,",
"Keep moving forward no matter what,",
"Practice makes perfect with each try,",
"The quick brown fox jumps over the lazy dog,",
"Typing fast is a skill worth mastering,",
"Reading helps you write better sentences,",
"Patience and persistence beat talent,",
"Stay focused and finish what you start,",
"Create, learn, and grow each day,",
"Believe in your ability to improve,",
"Let your fingers fly across the keyboard,",
"A clear mind makes fewer errors,",
"Rainy days make cozy memories,",
"Wake up and chase your dreams,",
"Silence is sometimes the loudest answer,",
"Small steps lead to big results,",
"The ocean hides a million secrets,",
"Every word you type builds your skill,",
"Think before you press the keys,",
"Speed matters but accuracy wins,",
"Confidence comes with practice,",
"Music fuels creativity and energy,",
"Books are portals to other worlds,",
"Take a breath, then type with rhythm,",
"Failure is proof you are trying,",
"Keep your eyes on the screen, not the keys,",
"Nature speaks in quiet whispers,",
"Enjoy the journey of learning,",
"Perfection begins with progress,",
"Consistency is the key to mastery,",
"The stars shine brightest at night,",
"One sentence at a time, you'll improve,",
"Don't stop until you're proud,",
"Slow down to speed up later,",
"Challenge yourself every day,",
"Type like no one is watching,",
"Let your thoughts flow onto the screen,",
"The future belongs to the curious,",
"Good habits create great outcomes,",
"Errors are lessons in disguise,",
"Darkness can't drown a glowing heart,",
"Type with intent and purpose,",
"The clock ticks but you are in control,",
"Be fearless in your efforts,",
"Strong minds overcome tough tests,",
"Creativity begins with courage,",
"Your words have power and impact,",
"Every day is a fresh page,",
"Balance speed and accuracy always,",
"Write fast but think faster,",
"Imagination fuels innovation,",
"Eyes on the prize, fingers on the keys,",
"The world is changed by doers,",
"Learn from your mistakes and improve,",
"Confidence grows with every click,",
"Effort is never wasted,",
"A fast typist thinks ahead,",
"Success starts with a single step,",
"Push your limits and grow daily,",
"Skill is built over time,",
"The keyboard is your playground,",
"A calm mind leads to better results,",
"Precision is better than speed,",
"Practice is the secret ingredient,",
"Every word you type matters,",
"Stay calm and type on,",
"The best way to get better is to try,",
"Your potential is limitless,",
"Make your fingers dance,",
"Dream big, type bigger,",
"Control your breath, control your pace,",
"Never stop improving,",
"Greatness comes with grit,",
"Be steady, not hasty,",
"Typing well is a superpower,",
"The best typists are patient,",
"Focus on one word at a time,",
"Your speed is your strength,",
"Success is built, not given,",
"Keep your posture straight,",
"Stay relaxed and centered,",
"A true master never stops learning,",
"Precision creates perfection,",
"Never rush a masterpiece,",
"Smart work beats hard work,",
"Fast hands, sharp mind,",
"One key at a time,",
"Find your rhythm and flow,",
"The journey matters more than the speed,",
"Work hard in silence, type loud,",
"The challenge makes you stronger,",
"Errors teach better than success,",
"Focus fuels performance,",
"Always aim for better, not perfect,",
"Every second counts,",
"Type like a pro, think like a poet,",
"Make every stroke count,",
"Progress is the real prize,",
"Typing is a powerful skill that improves with every word you write,",
"Success in typing comes from consistency, focus, and daily practice,",
"Every error you make is a chance to learn and type better next time,",
"The faster you type the more your mind and fingers sync together,",
"Accuracy should always come before speed in every typing session,",
"Let your fingers flow freely and trust your muscle memory to guide you,",
"A calm mind and steady hands are the true secrets of fast typing,",
"Typing daily helps sharpen your focus and boosts your writing speed,",
"Every key press brings you closer to becoming a master typist,",
"Practice often and let your thoughts flow naturally through the keyboard,",
"Even small efforts in typing add up to big improvements over time,",
"The best way to learn typing is to keep going without overthinking,",
"A relaxed posture helps you type faster with fewer mistakes,",
"Typing is not just speed but also about rhythm and precision,",
"Don’t stop when you make a mistake just correct it and move on,",
"Focus your eyes on the screen and let your fingers do the work,",
"With every word you type you become a better and faster writer,",
"Confidence in typing comes with repetition and patience,",
"Type with purpose not panic and you’ll go farther each time,",
"Building your typing speed is a journey not a destination,",
"Let go of perfection and just keep moving forward with each line,",
"Smooth typing is all about balance between mind and movement,",
"The more you type the better your brain and fingers communicate,",
"Speed comes naturally when you focus on doing your best,",
"Don’t race the timer just type at your comfortable pace,",
"Typing skills improve when you stay calm and committed,",
"Every line you complete adds strength to your typing game,",
"Believe in your improvement and let the process work for you,",
"Each typing session builds momentum for better performance,",
"Stay focused on the words and let your hands take over,",
"Typing quickly doesn’t mean rushing but moving efficiently,",
"Make every keystroke count toward your progress and growth,",
"Your mind leads but your fingers bring the words to life,",
"Learning to type is a skill that benefits you forever,",
"Keep practicing until typing feels as natural as breathing,",
"Be patient and let your speed increase day by day,",
"Even five minutes of focused typing brings results,",
"Accuracy builds confidence and confidence builds speed,",
"Stay relaxed and your hands will type with ease,",
"Great typists are made through effort not shortcuts,",
"Your keyboard is a tool that reflects your focus,",
"Typing daily creates lasting muscle memory and flow,",
"Keep going even when it feels slow and tough,",
"Type like you talk with clarity and confidence,",
"Don’t worry about errors just keep typing forward,",
"One good line can change your whole typing session,",
"Typing well is about harmony between thought and action,",
"Success in typing is built by tiny consistent efforts,",
"Let your fingers move freely and trust the process,",
"Don’t look at the keys just feel the pattern,",
"Typing helps you think clearly and work faster,",
"Let each line be a step toward better skills,",
"The more you type the easier it becomes each day,",
"Be mindful of your typing posture and stay alert,",
"Typing trains both your brain and your body together,",
"Feel the flow of your typing and stay in rhythm,",
"Don’t stress over the time just type your best,",
"Typing faster is not magic it’s just practice,",
"Stay positive and believe in your typing journey,",
"Typing sharpens your focus like no other activity,",
"Every tap of the key is a step toward mastery,",
"Typing improves memory, attention, and confidence,",
"Keep challenging yourself with different words and lines,",
"Typing helps you work smarter and more efficiently,",
"Take a deep breath and let your fingers do the rest,",
"Make your keyboard your best productivity tool,",
"Push through the slow days and keep practicing,",
"Set small goals in typing and celebrate your wins,",
"Type with energy and let your passion show,",
"Don’t fear mistakes they’re part of the journey,",
"Your typing progress is built on patience and willpower,",
"Typing well requires practice just like any other skill,",
"The secret to great typing is consistent effort every day,",
"Let your hands follow the rhythm of your thoughts,",
"Typing is a form of expression just like speaking,",
"Focus on flow not just the finish line,",
"With each line you type you’re improving more and more,",
"Keep your eyes ahead and your fingers light and fast,",
"Typing brings clarity speed and focus to your work,",
"Your typing improves when you enjoy the process,",
"Practice with purpose and watch your skills grow,",
"Never give up even if you feel slow today,",
"Typing is a race you run with yourself alone,",
"Build good habits and your speed will increase naturally,",
"Use every typing session as a time to improve,",
"The power of typing lies in repetition and rhythm,",
"Small improvements add up to major progress over time,",
"Let go of hesitation and type with intention,",
"Make each word count as you develop your skills,",
"Typing is both an art and a science of focus,",
"Your hands know more than you think just trust them,",
"Be present while typing and results will follow,",
"Train your fingers daily to follow your thoughts faster,",
"Be proud of every word you type with effort and care,",
"Typing well helps you communicate with speed and clarity,",

];

const sentenceDisplay = document.getElementById("sentenceDisplay");
const inputArea = document.getElementById("inputArea");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restartBtn");
const stopBtn = document.getElementById("stopBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const countdownToggle = document.getElementById("countdownToggle");
const stopSound = document.getElementById("stopSound");

let startTime;
let interval;
let isStarted = false;
let currentSentence = "";

function loadNewSentence() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  renderSentence(currentSentence);
  inputArea.value = "";
  inputArea.readOnly = false;
  clearInterval(interval);
  isStarted = false;
  timerDisplay.textContent = "0.00";
  wpmDisplay.textContent = "0";
  accuracyDisplay.textContent = "0.00";
  inputArea.style.height = "auto";
}

function renderSentence(sentence) {
  sentenceDisplay.innerHTML = "";
  sentence.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    sentenceDisplay.appendChild(span);
  });
}

function startTimer() {
  startTime = Date.now();
  if (countdownToggle.checked) {
    let remaining = 60;
    timerDisplay.textContent = remaining.toFixed(2);
    interval = setInterval(() => {
      remaining -= 0.05;
      timerDisplay.textContent = remaining.toFixed(2);
      if (remaining <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "0.00";
        finishTest();
      }
    }, 50);
  } else {
    interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      timerDisplay.textContent = elapsed.toFixed(2);
    }, 50);
  }
}

function finishTest() {
  clearInterval(interval);
  inputArea.readOnly = true;
  stopSound.play();

  const input = inputArea.value.split("");
  const spans = sentenceDisplay.querySelectorAll("span");
  let correctCount = 0;

  spans.forEach((charSpan, index) => {
    const typedChar = input[index];
    if (typedChar === charSpan.innerText) {
      correctCount++;
    }
  });

  const accuracy = ((correctCount / input.length) * 100).toFixed(2) || "0.00";
  let timeElapsed = countdownToggle.checked ? 60 : (Date.now() - startTime) / 1000;
  const wordsTyped = inputArea.value.trim().split(/\s+/).filter(w => w).length;
  const wpm = Math.round((wordsTyped / timeElapsed) * 60) || 0;

  accuracyDisplay.textContent = accuracy;
  wpmDisplay.textContent = wpm;
}

inputArea.addEventListener("input", () => {
  if (!isStarted) {
    startTimer();
    isStarted = true;
  }

  const input = inputArea.value.split("");
  const spans = sentenceDisplay.querySelectorAll("span");
  let correctCount = 0;

  spans.forEach((charSpan, index) => {
    const typedChar = input[index];
    if (typedChar == null) {
      charSpan.classList.remove("correct", "incorrect");
    } else if (typedChar === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
      correctCount++;
    } else {
      charSpan.classList.add("incorrect");
      charSpan.classList.remove("correct");
    }
  });

  if (inputArea.value === currentSentence && !countdownToggle.checked) {
    finishTest();
  }

  inputArea.style.height = "auto";
  inputArea.style.height = inputArea.scrollHeight + "px";
});

stopBtn.addEventListener("click", finishTest);
restartBtn.addEventListener("click", loadNewSentence);

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkModeToggle.checked);
  localStorage.setItem("theme", darkModeToggle.checked ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    darkModeToggle.checked = true;
  }
  loadNewSentence();
});
