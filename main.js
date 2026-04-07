// main.js
const canvas = document.getElementById('gameCanvas');
const scoreSpan = document.getElementById('scoreDisplay');
const idleSpan = document.getElementById('idleIncome');
const levelSpan = document.getElementById('levelDisplay');
const expSpan = document.getElementById('expDisplay');
let game;

function startGame() {
    game = new ArcadeShooter(
        canvas,
        (sc) => { scoreSpan.innerText = Math.floor(sc); },
        (inc) => { idleSpan.innerText = inc; },
        // Дополнительные колбэки для обновления уровня и опыта
        (level, currentExp, expToNext) => {
            if (levelSpan) levelSpan.innerText = level;
            if (expSpan) expSpan.innerText = `${currentExp} / ${expToNext}`;
        }
    );
    
    document.querySelector('[data-upgrade="damage"]').onclick = () => game.upgradeDamage();
    document.querySelector('[data-upgrade="fireRate"]').onclick = () => game.upgradeFireRate();
    document.querySelector('[data-upgrade="platformWidth"]').onclick = () => game.upgradePlatformWidth();
    document.querySelector('[data-upgrade="passiveIncome"]').onclick = () => game.upgradePassive();
    document.querySelector('[data-upgrade="autoShoot"]').onclick = () => game.upgradeAutoShoot();

    setInterval(() => {
        if (game) {
            document.getElementById('dmgCost').innerText = game.getDamageCost();
            document.getElementById('rateCost').innerText = game.getRateCost();
            document.getElementById('widthCost').innerText = game.getWidthCost();
            document.getElementById('passiveCost').innerText = game.getPassiveCost();
            document.getElementById('autoCost').innerText = game.autoShooter.getCost();
            document.getElementById('autoLevel').innerText = game.autoShooter.level;
        }
    }, 200);
}

startGame();