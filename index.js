const app = "I don't do much."
kittens = [];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();  
  return kittens;
}

function appendKitten(name) {
  return ([...kittens, name]);
}

function prependKitten(name) {
  return ([name, ...kittens]);
}

function removeLastKitten() {
  return (kittens.slice(0, kittens.length - 1));
}

function removeFirstKitten() {
  kittens.slice(1);
  return kittens;
}

