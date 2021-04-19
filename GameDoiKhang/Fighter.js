class Fighter {
    constructor(_name) {
        this.name = _name;
        this.hp = 100;
        this.damage = 10;
    }

    attack(fighter){
        // fighter.hp -= this.damage;
        this.damage = Math.floor(Math.random()*30);
        fighter.takeHit(this.damage);
    }

    takeHit(damage){
        this.hp -= damage;
        if(this.hp <= 0 ){
            alert(this.name + ' lose!!!');
        }
    }
}
