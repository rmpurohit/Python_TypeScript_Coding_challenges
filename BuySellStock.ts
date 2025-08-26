function BuySellStock(prices: number[]): number {
    let largestDiff:number = 0
    let minSoFar:number = Number.MAX_VALUE
    for (let i = 0; i < prices.length; i++){
        let min = prices[i]
        if (min < minSoFar){
            minSoFar = min
        } else {
            largestDiff = Math.max(largestDiff, min - minSoFar)
        }
    }
    return largestDiff
  }


  console.log(BuySellStock([7, 5, 1, 4, 3, 6, 2]))