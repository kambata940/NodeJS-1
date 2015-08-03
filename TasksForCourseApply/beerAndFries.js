function beerAndFries(data) {
  beers = devideData(data);

  return beers;
}

function devideData(data) {
  var beers = []
  var fries = []

  data.forEach(function (item) {
    if ( item.type === 'beer') {
      beers.push(item)
    }
    else if (item.type === 'fries') {
      fries.push(item)
    }
  }

  return beers;
}

beerAndFries([{'type': 'beer'})
