let mass1 = 1
let velocity1 = 10
let mass2 = 1
let velocity2 = 10

function Collision(m1,v1,m2,v2) {
    vF = ((m1 * v1) + (m2 * v2)) / (m1 + m2)
    return vF
}
 console.log(Collision())



