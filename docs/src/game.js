const gameCanvas = document.getElementById("gameCanvas");
const gameScore = document.getElementById("gameScore");
const gameLevel = document.getElementById("gameLevel");
const startGameBtn = document.getElementById("startGameBtn");

const ctx = gameCanvas.getContext("2d");
let gameActive = false;
let scoreValue = 0;
let levelValue = 1;
let ship = {
  x: gameCanvas.width / 2 - 20,
  y: gameCanvas.height - 60,
  width: 40,
  height: 60,
  speed: 5,
};

let asteroids = [];
let crystals = [];
let keys = {};
const asteroidSpeed = 3;
let gameLoop;

function drawShip() {
  ctx.fillStyle = "#7b2cbf";
  ctx.beginPath();
  ctx.moveTo(ship.x + ship.width / 2, ship.y);
  ctx.lineTo(ship.x, ship.y + ship.height);
  ctx.lineTo(ship.x + ship.width, ship.y + ship.height);
  ctx.closePath();
  ctx.fill();

  // Add thruster flame
  ctx.fillStyle = "#ff9e00";
  ctx.beginPath();
  ctx.moveTo(ship.x + ship.width / 2 - 10, ship.y + ship.height);
  ctx.lineTo(ship.x + ship.width / 2, ship.y + ship.height + 15);
  ctx.lineTo(ship.x + ship.width / 2 + 10, ship.y + ship.height);
  ctx.closePath();
  ctx.fill();
}

function createAsteroid() {
  return {
    x: Math.random() * (gameCanvas.width - 30),
    y: -30,
    width: 20 + Math.random() * 15,
    height: 20 + Math.random() * 15,
    speed: 2 + Math.random() * (levelValue * 0.8),
  };
}

function createCrystal() {
  return {
    x: Math.random() * (gameCanvas.width - 20),
    y: -20,
    width: 20,
    height: 20,
    speed: 3 + Math.random() * 2,
  };
}

function drawAsteroids() {
  asteroids.forEach((asteroid) => {
    ctx.fillStyle = "#bbb";
    ctx.beginPath();
    ctx.arc(
      asteroid.x + asteroid.width / 2,
      asteroid.y + asteroid.height / 2,
      asteroid.width / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Add crater details
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(
      asteroid.x + asteroid.width / 3,
      asteroid.y + asteroid.height / 3,
      asteroid.width / 6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function drawCrystals() {
  crystals.forEach((crystal) => {
    ctx.fillStyle = "#00ffcc";
    ctx.beginPath();
    ctx.moveTo(crystal.x, crystal.y);
    ctx.lineTo(crystal.x + crystal.width / 2, crystal.y + crystal.height);
    ctx.lineTo(crystal.x + crystal.width, crystal.y);
    ctx.lineTo(crystal.x + crystal.width / 2, crystal.y - crystal.height / 2);
    ctx.closePath();
    ctx.fill();

    // Add glow effect
    ctx.strokeStyle = "#ff00ff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function updateGame() {
  // Update ship position
  if (keys["ArrowLeft"] && ship.x > 0) {
    ship.x -= ship.speed;
  }
  if (keys["ArrowRight"] && ship.x < gameCanvas.width - ship.width) {
    ship.x += ship.speed;
  }
  if (keys["ArrowUp"] && ship.y > 0) {
    ship.y -= ship.speed;
  }
  if (keys["ArrowDown"] && ship.y < gameCanvas.height - ship.height) {
    ship.y += ship.speed;
  }

  // Update asteroids
  for (let i = asteroids.length - 1; i >= 0; i--) {
    const asteroid = asteroids[i];
    asteroid.y += asteroid.speed;

    // Check for collisions with ship
    if (
      ship.x < asteroid.x + asteroid.width &&
      ship.x + ship.width > asteroid.x &&
      ship.y < asteroid.y + asteroid.height &&
      ship.y + ship.height > asteroid.y
    ) {
      console.log("COLLISION!", { ship, asteroid });
      gameOver();
      return;
    }

    // Remove asteroids that go off screen
    if (asteroid.y > gameCanvas.height) {
      asteroids.splice(i, 1);
      scoreValue += 5;
    }
  }

  // Update crystals
  crystals.forEach((crystal, index) => {
    crystal.y += crystal.speed;

    // Remove crystals that go off screen
    if (crystal.y > gameCanvas.height) {
      crystals.splice(index, 1);
    }

    // Check for collisions with ship
    if (
      ship.x < crystal.x + crystal.width &&
      ship.x + ship.width > crystal.x &&
      ship.y < crystal.y + crystal.height &&
      ship.y + ship.height > crystal.y
    ) {
      crystals.splice(index, 1);
      scoreValue += 50;

      // Show score animation
      const scoreAnim = document.createElement("div");
      scoreAnim.textContent = "+50";
      scoreAnim.style.position = "absolute";
      scoreAnim.style.left = `${crystal.x}px`;
      scoreAnim.style.top = `${crystal.y}px`;
      scoreAnim.style.color = "#00ffcc";
      scoreAnim.style.fontSize = "20px";
      scoreAnim.style.fontWeight = "bold";
      scoreAnim.style.opacity = "1";
      scoreAnim.style.transition = "all 1s ease";
      document.body.appendChild(scoreAnim);

      setTimeout(() => {
        scoreAnim.style.opacity = "0";
        scoreAnim.style.transform = "translateY(-30px)";
      }, 50);

      setTimeout(() => {
        document.body.removeChild(scoreAnim);
      }, 1000);
    }
  });

  // Add new asteroids randomly
  if (Math.random() < 0.02 * levelValue) {
    asteroids.push(createAsteroid());
  }

  // Add new crystals less frequently
  if (Math.random() < 0.005) {
    crystals.push(createCrystal());
  }

  // Update score and level
  gameScore.textContent = scoreValue;

  // Level up every 500 points
  const newLevel = Math.floor(scoreValue / 500) + 1;
  if (newLevel > levelValue) {
    levelValue = newLevel;
    gameLevel.textContent = levelValue;
    ship.speed += 0.5; // Increase ship speed with level

    // Show level up message
    const levelUpMsg = document.createElement("div");
    levelUpMsg.textContent = `Рівень ${levelValue}!`;
    levelUpMsg.style.position = "absolute";
    levelUpMsg.style.left = "50%";
    levelUpMsg.style.top = "50%";
    levelUpMsg.style.transform = "translate(-50%, -50%)";
    levelUpMsg.style.color = "#ff0000";
    levelUpMsg.style.fontSize = "36px";
    levelUpMsg.style.fontWeight = "bold";
    levelUpMsg.style.zIndex = "100";
    levelUpMsg.style.opacity = "1";
    levelUpMsg.style.transition = "all 1s ease";
    document.body.appendChild(levelUpMsg);

    setTimeout(() => {
      levelUpMsg.style.opacity = "0";
      levelUpMsg.style.transform = "translate(-50%, -100%)";
    }, 800);

    setTimeout(() => {
      document.body.removeChild(levelUpMsg);
    }, 1800);
  }
}

function renderGame() {
  // Clear canvas
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Draw game objects
  drawShip();
  drawAsteroids();
  drawCrystals();
}

function startGame() {
  if (!gameActive) {
    gameActive = true;
    scoreValue = 0;
    levelValue = 1;
    gameScore.textContent = scoreValue;
    gameLevel.textContent = levelValue;
    asteroids = [];
    crystals = [];
    ship = {
      x: gameCanvas.width / 2,
      y: gameCanvas.height - 60,
      width: 40,
      height: 60,
      speed: 5,
    };

    startGameBtn.textContent = "Гра розпочата";
    startGameBtn.disabled = true;

    gameLoop = setInterval(() => {
      updateGame();
      renderGame();
    }, 1000 / 60); // 60 FPS
  }
}

function gameOver() {
  clearInterval(gameLoop);
  gameActive = false;

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  ctx.fillStyle = "white";
  ctx.font = "36px Space Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", gameCanvas.width / 2, gameCanvas.height / 2 - 40);

  ctx.font = "24px Montserrat, sans-serif";
  ctx.fillText(
    `Ваш рахунок: ${scoreValue}`,
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 10
  );
  ctx.fillText(
    `Рівень: ${levelValue}`,
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 50
  );

  startGameBtn.textContent = "Спробувати знову";
  startGameBtn.disabled = false;
}

// Game event listeners
startGameBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (e) => {
  // Prevent page scrolling when arrow keys are pressed during gameplay
  if (gameActive && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
  }
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Init function
function init() {
  // Draw initial game screen
  ctx.fillStyle = "#0c1445";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Draw title
  ctx.fillStyle = "white";
  ctx.font = "36px Space Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText(
    "КОСМІЧНА АРКАДА",
    gameCanvas.width / 2,
    gameCanvas.height / 2 - 40
  );

  ctx.font = "18px Montserrat, sans-serif";
  ctx.fillText(
    'Натисніть "Розпочати гру", щоб почати',
    gameCanvas.width / 2,
    gameCanvas.height / 2 + 20
  );
}

// Make sure canvas is the right size
function resizeCanvas() {
  if (window.innerWidth < 800) {
    gameCanvas.width = Math.min(window.innerWidth - 40, 800);
    gameCanvas.height = gameCanvas.width * 0.75; // Keep aspect ratio
  } else {
    gameCanvas.width = 800;
    gameCanvas.height = 600;
  }
  init();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();