function takeANumber(katzDeliLine, name) {
  katzDeliLine.push[name];
  return `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 
  }
  katzDeliLine.shift();
}