it('can check its the same as ', () => {
  checkIf(2 + 2).is(7)
})

it('can check its greater than', () => {
  checkIf(3 * 5).isGreaterThan(12)
})

function it(testSpec, runTest) {
  console.log((testSpec) + '   ') 
  runTest()
}

function checkIf(actual) {
  return new Comparator(actual)
}

function Comparator(actual) {
  this.actual = actual
  let self = this

  this.is = function(expected) {
    printResults(self.actual == expected) 
  }
 
  this.isGreaterThan = function(expected) {
    printResults(self.actual > expected) 
  }
}

function printResults(boolean) {
  boolean ? console.log('YAAAAS\n') : console.log('NOT YET\n')
}
