//constant
const status = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"]
const currency = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}


function checkCashRegister(price, cash, cid) {
  let change = [];
  let difference = (cash - price)
  
  let cidCopy = cid.map((arr) => arr.slice())

  for (let i=cid.length-1; i>=0; i--){
      let dif = (cid[i][1] - difference)
      if (dif < 0 && cid[i][1] != 0
        || dif >= 0 && (dif % currency[cid[i][0]] % 1 === 0)){
        let value = ((dif < 0) ? cid[i][1] : cid[i][1] - dif);
        change.push([cid[i][0], value]);
        difference -= value;
        cid[i][1] = cid[i][1] - value
      }
      else if (dif > currency[cid[i][0]]){
          let nextDif = cid[i][1] - dif
          let value = currency[cid[i][0]] 
                * Math.trunc(difference / currency[cid[i][0]]+ 0.000001)
          if (value!=0) 
            change.push([cid[i][0], value])
          difference -= value
          cid[i][1] = cid[i][1] - dif
      }
      if (difference <= 0) break
  }

  if (difference>0) return {'status': status[0], 'change':[]}
  return {'status':status[(cid.every(c => c[1]==0) ? 1 : 2)], 
            'change': (cid.every(c => c[1]==0) ? cidCopy : change)};
}
