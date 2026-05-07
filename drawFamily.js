function drawFamily(family) {
    let currentGen = 0;
    for (let i = 0; i < family.length; i++) {
        if (family[i].generation > currentGen) {
            currentGen = family[i].generation;
        }
        family[i].draw(70 * i, currentGen*100);
    }
}