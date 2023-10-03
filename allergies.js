const allergyCalc = (score) => {
    const allergens = {
        1: 'EGGS',
        2: 'PEANUTS',
        4: 'SHELLFISH',
        8: 'STRAWBERRIES',
        16: 'TOMATOES',
        32: 'CHOCOLATE',
        64: 'POLLEN',
        128: 'CATS' 
    }

    const maxValue = 255;
    const minValue = 1;

/*     roundedValue = 2 ** Math.floor(Math.log2(score));
    rest = score - roundedValue;
    roundedRest = 2 ** Math.floor(Math.log2(rest));
    rest2 = rest - roundedRest;
    roundedRest2 = 2 ** Math.floor(Math.log2(rest2));
    rest3 = rest2 - roundedRest2;
    roundedRest3 = 2 ** Math.floor(Math.log2(rest3)); */
    
    for (let i = 0; i < 8; i++) {
        roundedValue = 2 ** Math.floor(Math.log2(score));
        rest = score - roundedValue;
        console.log(rest);
    }
}

allergyCalc(12);