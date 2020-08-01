const anagrams = (stringA, stringB) =>{

    stringA = stringA.replace(/[^\w]/ig, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/ig, '').toLowerCase()
  
    return stringA.split('').sort().join('') === stringB.split('').sort().join('')
}
  
  console.log(anagrams('Sakib', 'BisaK'));