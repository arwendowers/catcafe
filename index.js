const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const storyText = document.getElementById("story-text");
const actionButtons = document.getElementById("action-buttons");
const sceneImage = document.getElementById("scene-image");
const startBtn = document.getElementById("start-btn");

const gameState = {
    completed: {
        play: false,
        sit: false,
        food: false
    },
    catsMet: []
};

const scenes = {
    opening: {
        text: `Today, you head to the local cat cafe to try to find a new best friend. :) You enter the cafe and see cats everywhere you look. Some are lounging on cat trees, some are playing with toys. There’s a small counter in the corner where a barista is serving coffee and pastries. The cafe has a nice variety of seating, with tables and chairs by the counter and couches by the cat trees. You contemplate where you want to go first.`,
        actions: [
            { text: "Pick up a cat toy and attempt to lure in some cats", next: "play1" },
            { text: "Sit on a couch and wait for the cats to come to you", next: "sit1" },
            { text: "Get a pastry from the cafe counter", next: "food1" }
        ]
    },

    play1: {
        text: `You pick up a feather wand toy that resembles a fishing rod with feathers and a bell as the lure. You shake it around gently in an attempt to get some cats to come your way. A playful, chaotic orange cat quickly runs over, jumping up in the air to catch the feathers. It catches you by surprise, but its big personality puts a smile on your face. It tries to hide behind a scratching post, wiggles its butt, and then pounces once again on the toy.`,
        actions: [
            { text: "So cute!", next: "play2" }
        ],
        image: "orangecat.png",
        imageAlt: "Orange cat"
    },

    play2: {
        text: `As you continue shaking the toy around, another cat approaches. It’s a tuxedo cat, with a bright black and white coat resembling a fluffy penguin. It stands on its hind legs and bats at the feathers, making you giggle. It walks over to you and rubs against your legs, and then quickly returns to pouncing on the feather toy.\n\nDecide what you want to do next at the cat cafe.`,
        actions: [
            { text: "Sit on a couch and wait for the cats to come to you", next: "sit1" },
            { text: "Get a pastry from the cafe counter", next: "food1" },
            { text: "I know which cat I want to take home", next: "home" }
        ],
        image: "tuxedocat.png",
        imageAlt: "Tuxedo cat"
    },

    sit1: {
        text: `You sit on one of the couches next to the cat trees and relax, watching the cats and hoping one comes over to you. As you’re cat watching, you notice a beautiful tortoiseshell cat stroll your way. It jumps up on the couch next to you and rubs against your arm as if it wants pets. You pet its head and it begins to purr.`,
        actions: [
            { text: "So sweet!", next: "sit2" }
        ],
        image: "tortoiseshellcat.png",
        imageAlt: "Tortoiseshell cat"
    },

    sit2: {
        text: `The tortoiseshell cat lays down and settles next to you. As you chill for a bit, another cat jumps up on the couch on the other side of you. It’s a white cat, with perfect snow white fur. It immediately steps onto your lap, and you begin to pet it. It purrs loudly, and settles on your lap in a loaf formation. You feel at peace.\n\nDecide what you want to do next at the cat cafe.`,
        actions: [
            { text: "Pick up a cat toy and attempt to lure in some cats", next: "play1" },
            { text: "Get a pastry from the cafe counter", next: "food1" },
            { text: "I know which cat I want to take home", next: "home" }
        ],
        image: "whitecat.png",
        imageAlt: "White cat"
    },

    food1: {
        text: `You head to the cafe counter in the corner to order a pastry. You get a chocolate croissant from the barista and take a seat at one of the tables to eat your sweet treat. As you’re eating, a black cat suddenly jumps up on your table. It has a cute face and soft dark fur. It invades your personal space, sniffing your croissant as if it wants to eat it. You gently nudge it away from the croissant, but smile at the forwardness of the cat. It starts to purr even though you pushed it away, happy to have your attention.`,
        actions: [
            { text: "Aww!", next: "food2" }
        ],
        image: "blackcat.png",
        imageAlt: "Black cat"
    },

    food2: {
        text: `The black cat eventually jumps down from the table. As you continue eating your croissant, you feel paws on your thigh. You look down and see a gray cat standing up on your leg, seeking attention or maybe some of your croissant. You give it a pet, and it starts walking under the table and rubbing up against your legs. You smile while finishing your croissant, happy to have a friendly cat by your side.\n\nDecide what you want to do next at the cat cafe.`,
        actions: [
            { text: "Pick up a cat toy and attempt to lure in some cats", next: "play1" },
            { text: "Sit on a couch and wait for the cats to come to you", next: "sit1" },
            { text: "I know which cat I want to take home", next: "home" }
        ],
        image: "graycat.png",
        imageAlt: "Gray cat"
    },

    home: {
        text: `You’ve felt a connection to one of the cats! One of them felt like the one, which one was it?`
    },

    orange: {
        text: `You’ve chosen the orange cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "orangecat.png",
        imageAlt: "Orange cat"
    },

    tuxedo: {
        text: `You’ve chosen the tuxedo cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "tuxedocat.png",
        imageAlt: "Tuxedo cat"
    },

    tortoiseshell: {
        text: `You’ve chosen the tortoiseshell cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "tortoiseshellcat.png",
        imageAlt: "Tortoiseshell cat"
    },

    white: {
        text: `You’ve chosen the white cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "whitecat.png",
        imageAlt: "White cat"
    },

    black: {
        text: `You’ve chosen the black cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "blackcat.png",
        imageAlt: "Black cat"
    },

    gray: {
        text: `You’ve chosen the gray cat! You talk to a cafe employee, sign the paperwork, and take your new best friend home. You and your kitty live happily ever after. :3`,
        actions: [
            { text: "Play again?", next: "opening" }
        ],
        image: "graycat.png",
        imageAlt: "Gray cat"
    },
};

startBtn.addEventListener("click", () => {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
    showScene("opening");
});

function showScene(sceneName) {
    const scene = scenes[sceneName];
    if (!scene) return;

    // resets game state if user plays the game again
    if (sceneName === "opening") {
        gameState.completed = { play: false, sit: false, food: false };
        gameState.catsMet = [];
    }

    // marks activities as completed if user goes through those scenes
    if (sceneName === "play2") markActivity("play");
    if (sceneName === "sit2") markActivity("sit");
    if (sceneName === "food2") markActivity("food");

    gameScreen.className = "screen-box scene-" + sceneName;
    storyText.textContent = scene.text;
    if (scene.image) {
        sceneImage.src = scene.image;
        sceneImage.alt = scene.imageAlt;
        sceneImage.style.display = "block";
    } else {
        sceneImage.style.display = "none";
    }
    actionButtons.innerHTML = "";

    let actionsToShow = scene.actions;
    // checks if an activity has already been completed
    if (["play2", "sit2", "food2"].includes(sceneName)) {
        actionsToShow = getRemainingChoices();
    }

    if (sceneName === "home") {
        const allHomeActions = [
            { text: "The orange cat", next: "orange", image: "orangecat.png" },
            { text: "The tuxedo cat", next: "tuxedo", image: "tuxedocat.png" },
            { text: "The tortoiseshell cat", next: "tortoiseshell", image: "tortoiseshellcat.png" },
            { text: "The white cat", next: "white", image: "whitecat.png" },
            { text: "The black cat", next: "black", image: "blackcat.png" },
            { text: "The gray cat", next: "gray", image: "graycat.png" }
        ];

        // only shows cats the user has met so far
        actionsToShow = allHomeActions.filter(action =>
            gameState.catsMet.includes(action.next)
        );
    }

    actionsToShow.forEach(action => {
        if (sceneName === "home") {
            const row = document.createElement("div");
            row.classList.add("action-row");

            if (action.image) {
                const img = document.createElement("img");
                img.src = action.image;
                img.alt = action.text;
                img.classList.add("btn-icon");
                row.appendChild(img);
            }

            const button = document.createElement("button");
            button.textContent = action.text;
            button.classList.add("action-btn");

            button.addEventListener("click", () => {
                showScene(action.next);
            });
            row.appendChild(button);

            actionButtons.appendChild(row);
        } else {
            const button = document.createElement("button");
            button.textContent = action.text;
            button.classList.add("action-btn");
            button.addEventListener("click", () => {
                showScene(action.next);
            });
            actionButtons.appendChild(button);
        }
    });
};

function markActivity(activity) {
    if (activity === "play") {
        gameState.completed.play = true;
        if (!gameState.catsMet.includes("orange")) gameState.catsMet.push("orange");
        if (!gameState.catsMet.includes("tuxedo")) gameState.catsMet.push("tuxedo");
    }
    if (activity === "sit") {
        gameState.completed.sit = true;
        if (!gameState.catsMet.includes("tortoiseshell")) gameState.catsMet.push("tortoiseshell");
        if (!gameState.catsMet.includes("white")) gameState.catsMet.push("white");
    }
    if (activity === "food") {
        gameState.completed.food = true;
        if (!gameState.catsMet.includes("black")) gameState.catsMet.push("black");
        if (!gameState.catsMet.includes("gray")) gameState.catsMet.push("gray");
    }
}

function getRemainingChoices() {
    const choices = [];

    if (!gameState.completed.play) {
        choices.push({ text: "Pick up a cat toy and attempt to lure in some cats", next: "play1" });
    }
    if (!gameState.completed.sit) {
        choices.push({ text: "Sit on a couch and wait for the cats to come to you", next: "sit1" });
    }
    if (!gameState.completed.food) {
        choices.push({ text: "Get a pastry from the cafe counter", next: "food1" });
    }

    if (gameState.catsMet.length > 0) {
        choices.push({ text: "I know which cat I want to take home", next: "home" });
    }

    return choices;
}