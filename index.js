const app = "I don't do much."
kittens = [];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens;
}

function appendKitten(name) {
  return ([...kittens, name]);
}

function prependKitten(name) {
  return ([name, ...kittens]);
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}

