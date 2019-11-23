module.exports = {
    heroGroup: [
        "Superman",
        "Batman",
        "Aquaman",
        "Cyborg",
        "Spider-Man"
    ],

    villainGroup: [
        "Magneto",
        "Bane",
        "Thanos",
        "Doomsday"
    ],

    hero: function (){
        return heroGroup[Math.floor(Math.random()*this.heroGroup.length)];
    },

    villain: function (){
        return villainGroup[Math.floor(Math.random()*this.villainGroup.length)];
    }

}