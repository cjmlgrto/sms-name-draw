const Hat = require('../src/hat.js');
const members = require('../src/members.js');

function assign(members) {
    let tokens = [];
    let hat = new Hat(members);
    hat.shuffle();
    for (let i = 0; i < hat.size; i++) {
        tokens.push({
            from: members[i],
            to: hat.draw()
        });
    }
    return tokens
}

function hasUniquePairs(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].from.ID == tokens[i].to.ID) {
            return false
        }
    }
    return true
}

function testDraw() {
    let tokens = assign(members);
    while (!hasUniquePairs(tokens)) {
        tokens = assign(members);
    }
    console.log(tokens);
}

testDraw();
