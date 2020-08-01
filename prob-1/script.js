const anagrams = (stringA, stringB) =>{

    stringA = stringA.replace(/[^\w]/ig, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/ig, '').toLowerCase()
  
    return sorts(stringA) === sorts(stringB)
  }
  
  
  const sorts = string => {
    return string.split('').sort().join('');
  }
  console.log(anagrams('Sakib', 'BisaK'));