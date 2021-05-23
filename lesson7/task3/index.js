const flatArray = arr => arr.reduce((acc, el) => acc.concat(el), []).sort((a, b) => a - b);
