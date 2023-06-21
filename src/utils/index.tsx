export const cortarStrPorGuionOComa = (str) => {
    const indexGuion = str.indexOf("-");
    const indexComa = str.indexOf(",");
    const indexCorte = Math.min(indexGuion !== -1 ? indexGuion : Infinity, indexComa !== -1 ? indexComa : Infinity);
    
    return indexCorte !== Infinity ? str.slice(0, indexCorte) : str;
  }