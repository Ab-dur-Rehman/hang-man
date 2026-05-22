const WORDS = [
  {
    word: "anchor",
    hint: "A device used to keep something steady against drift."
  },
  {
    word: "breeze",
    hint: "A light movement of air."
  },
  {
    word: "canvas",
    hint: "A sturdy surface often used by painters."
  },
  {
    word: "lantern",
    hint: "A portable light with a protective case."
  },
  {
    word: "orchard",
    hint: "A place where fruit trees are grown."
  },
  {
    word: "summit",
    hint: "The highest point of a hill or mountain."
  },
  {
    word: "voyage",
    hint: "A long journey, usually over water or through space."
  },
  {
    word: "whisper",
    hint: "A very quiet way of speaking."
  }
];

const MAX_MISSES = 7;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const elements = {
  hint: document.querySelector("#hint"),
  keyboard: document.querySelector("#keyboard"),
  misses: document.querySelector("#misses"),
  newGame: document.querySelector("[data-action='new-game']"),
  parts: Array.from(document.querySelectorAll(".part")),
  remaining: document.querySelector("#remaining"),
  status: document.querySelector("#status"),
  word: document.querySelector("#word")
};

let state = createInitialState();

function createInitialState() {
  return {
    answer: "",
    guessed: new Set(),
    hint: "Start a new game to reveal a clue.",
    misses: 0,
    status: "idle"
  };
}

function pickWord() {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
}

function startGame() {
  const next = pickWord();
  state = {
    answer: next.word.toLowerCase(),
    guessed: new Set(),
    hint: next.hint,
    misses: 0,
    status: "playing"
  };
  render();
}

function handleGuess(letter) {
  if (state.status !== "playing" || state.guessed.has(letter)) {
    return;
  }

  const guessed = new Set(state.guessed);
  guessed.add(letter);

  const misses = state.answer.includes(letter)
    ? state.misses
    : state.misses + 1;

  const hasWon = state.answer
    .split("")
    .every((character) => guessed.has(character));
  const hasLost = misses >= MAX_MISSES;

  state = {
    ...state,
    guessed,
    misses,
    status: hasWon ? "won" : hasLost ? "lost" : "playing"
  };

  render();
}

function render() {
  renderWord();
  renderKeyboard();
  renderDrawing();
  renderText();
}

function renderWord() {
  elements.word.replaceChildren(
    ...state.answer.split("").map((letter) => {
      const item = document.createElement("li");
      const shouldShow =
        state.status === "lost" || state.guessed.has(letter);

      item.textContent = letter;
      item.className = shouldShow ? "" : "hidden-letter";
      item.setAttribute("aria-label", shouldShow ? letter : "Hidden letter");

      return item;
    })
  );
}

function renderKeyboard() {
  elements.keyboard.replaceChildren(
    ...ALPHABET.map((letter) => {
      const button = document.createElement("button");
      const guessed = state.guessed.has(letter);
      const correct = guessed && state.answer.includes(letter);
      const incorrect = guessed && !state.answer.includes(letter);

      button.type = "button";
      button.className = [
        "letter",
        correct ? "correct" : "",
        incorrect ? "incorrect" : ""
      ]
        .filter(Boolean)
        .join(" ");
      button.textContent = letter;
      button.disabled = state.status !== "playing" || guessed;
      button.setAttribute("aria-label", `Guess ${letter.toUpperCase()}`);
      button.addEventListener("click", () => handleGuess(letter));

      return button;
    })
  );
}

function renderDrawing() {
  elements.parts.forEach((part, index) => {
    part.classList.toggle("visible", index < state.misses);
  });
}

function renderText() {
  const lettersLeft = ALPHABET.length - state.guessed.size;

  elements.hint.textContent = state.hint;
  elements.misses.textContent = `${state.misses} / ${MAX_MISSES}`;
  elements.remaining.textContent = `${lettersLeft}`;
  elements.status.className = `status ${state.status === "won" ? "win" : ""} ${
    state.status === "lost" ? "loss" : ""
  }`;

  if (state.status === "won") {
    elements.status.textContent = "You won. Nicely played.";
    elements.newGame.textContent = "Play Again";
  } else if (state.status === "lost") {
    elements.status.textContent = `You lost. The word was ${state.answer.toUpperCase()}.`;
    elements.newGame.textContent = "Try Again";
  } else if (state.status === "playing") {
    elements.status.textContent = "Choose a letter.";
    elements.newGame.textContent = "New Game";
  } else {
    elements.status.textContent = "Ready when you are.";
    elements.newGame.textContent = "New Game";
  }
}

elements.newGame.addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();

  if (/^[a-z]$/.test(letter)) {
    handleGuess(letter);
  }
});

render();
