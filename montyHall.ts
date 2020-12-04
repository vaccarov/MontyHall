// echanger la carte ou non
const switchNumber: boolean = false
const iterations: number = 1000

let good: number = 0;
let bad: number = 0;

for (let i = 0; i < iterations; i++) {

    // choisir la porte ou la voiture est
    const door: number = Math.floor(Math.random() * 3) + 1
    
    // la porte que le joueur choisi
    let player: number = Math.floor(Math.random() * 3) + 1

    // la porte que le presentateur choisi
    const prez = player === door ?
        [1,2,3].filter((d: number) => d !== door)[Math.floor(Math.random())]
        :
        [1,2,3].find((d: number) => d !== player && d !== door) as number

    // changement de porte
    if (switchNumber)
        player = [1,2,3].find((i: number) => i !== prez && i !== player) as number
    
    // resultat
    player === door ?
        good++
        :
        bad++
}

const pourcent = (nb: number): number => nb/iterations * 100

console.log('good: ', pourcent(good), '(%), bad:', pourcent(bad), '(%)')