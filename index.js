function takeANumber(katzDeliLine, name) {
  katzDeliLine.push[name];
  return `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return katzDeliLine.shift();
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var status = "";
  for (int i = 0; i < katzDeliLine.length; ++i) {
    
  }
}