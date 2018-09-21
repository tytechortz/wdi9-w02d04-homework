/*
class Ship {
    constructor(hull, firePower, accuracy){
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
    }
    attack(enemy){
        if (Math.random() < this.accuracy){
            enemy.hull -= this.firePower;
        }
    }
}
const USSAssembly = new Ship(5, 5, .7);
const aliens = [];
const generateAlienShips = (num) =>{
    for (let i = 0; i < num; i++) {
        let hull = Math.floor(Math.random() * 4 + 3);
        let firePower = Math.floor(Math.random() * 3 + 2);
        let accuracy = (Math.floor(Math.random() * 3 + 6)/10);
        const alienShip = new Ship(hull, firePower, accuracy);
        aliens.push(alienShip);
    }
}
generateAlienShips(10);

// let choice = Window.prompt("retreat? answer y/n");

const randRBG = () => {
    return (Math.floor(Math.random() * 256));
};


function battle (fighter1, fighter2) {
    while(fighter1.hull > 0 && fighter2.hull > 0){
        let round = 1;

        fighter1.attack(fighter2);
        
        
        //$('body').html('<h1>enemy hull is:' + fighter2.hull + '</h1>');
        console.log(`enemy hull is: ${fighter2.hull}`);
        

        if(fighter2.hull > 0){
            fighter2.attack(fighter1); 

    
        } 
        
        if (fighter1.hull < 0){
            //$('body').html('<h1>HA HA, YOU DIED</h1').css('color', `rgb(${randRBG()}, ${randRBG()}, ${randRBG()})`).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
            console.log('Haha, you died');
            return;
        }
    
  

      
        //$('body').html('<h1>Your hull is: ' + fighter1.hull +'</h1');
        console.log(`Your hull is: ${fighter1.hull}`);

        console.log(`round ${round} end`);  
        round ++; 
     
    }


    
    //$('h1').html('<h1>ENEMY KILLED-USS Assembly Wins!</h1').css('color', `rgb(${randRBG()}, ${randRBG()}, ${randRBG()})`).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    console.log(`ENEMY KILLED`);
    console.log('');



}
for (let i = 0; i < aliens.length; i++) {
    battle(USSAssembly, aliens[i]);
    // if (choice === 'y'){
    //     return;
    // }
}
*/
class Ship {
    constructor(hull, firePower, accuracy){
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
    }
    attack(enemy){
        if (Math.random() < this.accuracy){
            enemy.hull -= this.firePower;
        }
    }
}
const USSAssembly = new Ship(20, 5, .7);
const aliens = [];
const generateAlienShips = (num) =>{
    for (let i = 0; i < num; i++) {
        let hull = Math.floor(Math.random() * 4 + 3);
        let firePower = Math.floor(Math.random() * 3 + 2);
        let accuracy = (Math.floor(Math.random() * 3 + 6)/10);
        const alienShip = new Ship(hull, firePower, accuracy);
        aliens.push(alienShip);
    }
}
generateAlienShips(10);

const randRBG = () => {
    return (Math.floor(Math.random() * 256));
};

// let choice = Window.prompt("retreat? answer y/n");


const battle = (fighter1, fighter2) => {
    while(fighter1.hull > 0 && fighter2.hull > 0){
        let round = 1;
        fighter1.attack(fighter2);
        console.log(`enemy hull is: ${fighter2.hull}`);
        if(fighter2.hull > 0){
            fighter2.attack(fighter1); 
        } if (fighter1.hull < 0){
            console.log('Haha, you died');
            return;
        }
        
        console.log(`Your hull is: ${fighter1.hull}`);
        console.log(`round ${round} end`);  
        round ++; 
    }
    $('h1').html('<h1>ENEMY KILLED-USS Assembly Wins!</h1').css('color', `rgb(${randRBG()}, ${randRBG()}, ${randRBG()})`).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    console.log(`ENEMY KILLED`);
    console.log('');
}
for (let i = 0; i < aliens.length; i++) {
    battle(USSAssembly, aliens[i]);
    // if (choice === 'y'){
    //     return;
    // }
}
