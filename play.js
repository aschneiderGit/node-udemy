function testVar() {
  if (true) {
    var x = 0;
    var x = 10;
  }
  console.log(x);
}

function testLet() {
  if (true) {
    let y = 0;
    let y = 20; //can declare redeclare in same score
  }
  console.log(y); //can't access outside the scopre
}

testVar();
testLet();
