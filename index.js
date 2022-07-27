class Avatar {
    constructor(_life, _dmg){
        this.life = _life;
        this.dmg = _dmg;
    }
    attack(){
        if(this.life > 0){
            return this.dmg
        }
        else {
            return "Avatar cannot attack as it is dead"
        }
    }
    receivedAttack(dmgAttack){
        if(this.life > 0){
            this.life = this.life - dmgAttack
            return this.life
        }
        else{
            return "Avatar cannot take damage because it is dead"
        }
    }
}

const infosAvatar = new Avatar (10, 1)

//Action examples:
console.log(infosAvatar)
console.log(`The avatar attacked for ${infosAvatar.attack()} damage.`)
console.log(`The avatar received a 2 damage attack, new life: ${infosAvatar.receivedAttack(2)}.`)
console.log(`Avatar received another 11 damage attack, new life: ${infosAvatar.receivedAttack(11)}.`)
console.log(`Avatar tries to attack but is dead: ${infosAvatar.attack()}.`)

class Cowboy extends Avatar{
    constructor(_life, _dmg, _ammunition){
        super(_life,_dmg)
        this.ammunition = _ammunition
    }
    attack(){
        if(this.life > 0){
            this.ammunition = this.ammunition - 1
            return this.dmg
        }
    }
    addAmmunition(find){
        if(this.life > 0){
            this.ammunition = this.ammunition + find
            return this.ammunition
        }
    }
}

//Action examples:
infosCowboy = new Cowboy (10, 2, 10)
console.log(infosCowboy)
console.log(`Cowboy attacked and was decremented 1 ammo, demage done: ${infosCowboy.attack()}.`)
console.log(`The cowboy found 3 ammo, new ammo: ${infosCowboy.addAmmunition(3)}.`)
console.log(`Cowboy received 2 damage, new life: ${infosCowboy.receivedAttack(2)}.`)


class Mage extends Avatar{
    constructor(_life, _dmg, _spells){
        super(_life,_dmg)
        this.spells = _spells
    }
    attack(){
        if(this.life > 0){
            this.spells = this.spells - 1
            return this.dmg
        }
    }
    addSpells(find){
        if(this.spells <= 0){
            setTimeout(recharge, 10000)
            function recharge(){
                this.spells = 10;
                console.log(`The mage recharged his spells, new spells: ${this.spells}`)
            }
            return this.spells
        }
    }
    spells(){
        return this.spells
    }
}

//Action examples:
infosMage = new Mage (10, 3, 10)
console.log(infosMage)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Mage attacked and was decremented 1 spells, demage done: ${infosMage.attack()}, new spells = ${infosMage.spells}.`)
console.log(`Wait 10 seconds to reload, amount of current spells: ${infosMage.addSpells()}.`)