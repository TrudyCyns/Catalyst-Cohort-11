//Dynamic function
//money lendor scenario
function Bbalance(deposit)
{
    let Bbalance = deposit;
    return Bbalance;
}

function CalcInt(rate)
{
    const BInt = rate;
    let bal = Bbalance(1000000);
    let intpaid = (rate/100) * bal;
    let avbal = intpaid + bal;

    return avbal;
}

function netbalance()
{
    console.log("Your funds available are: " + CalcInt(20));
}
netbalance()