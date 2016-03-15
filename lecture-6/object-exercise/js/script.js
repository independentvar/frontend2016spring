var app = app || {};

(function(){
    "use strict";

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function Actor() {
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.element = document.createElement("div");
        document.body.appendChild(this.element);
    }

    Actor.prototype.move = function(x, y){
        this.x += x;
        this.y += y;
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }

    Actor.prototype.didCollide = function(actor){
        if (this.x < actor.x + actor.width &&
            this.x + this.width > actor.x &&
            this.y < actor.y + actor.height &&
            this.height + this.y > actor.y)
        {
            console.log("Collided!");
            return true;
        }

        return false;
    }

    function Hero() {
        Actor.call(this);
        this.element.className = "actor hero";
    }

    Hero.prototype = Object.create(Actor.prototype);

    function Enemy() {
        Actor.call(this);
        this.element.className = "actor enemy";
        this.element.style.backgroundColor = getRandomColor();
    }

    Enemy.prototype = Object.create(Actor.prototype);
    
    app.hero = new Hero();
    app.hero.move(10, 10);

    var numberOfEnemies = getRandomInt(20, 50);
    app.enemies = new Array();

    for(var i =  0; i <= numberOfEnemies; i++){

        var enemy = new Enemy();
        var x = getRandomInt(0, 1400);
        var y = getRandomInt(0, 600);
        enemy.move(x, y);

        app.enemies.push(enemy);
    }
})();

document.onkeydown = function(e) {
    var distance = 5;
    switch (e.keyCode) {
        case 37: // left
            app.hero.move(-distance, 0);
            break;
        case 38: // up
            app.hero.move(0, -distance);
            break;
        case 39: // right
            app.hero.move(distance, 0);
            break;
        case 40: // down
            app.hero.move(0, distance);
            break;
    }

    var enemyKilled;

    for(var i = 0; i < app.enemies.length; i++){
        var currentEnemy = app.enemies[i];
        var didCollide = app.hero.didCollide(currentEnemy);

        if(didCollide){
            enemyKilled = currentEnemy;
        }
    }

    if(enemyKilled){
        // remove enemy
    }
};