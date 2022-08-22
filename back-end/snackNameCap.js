

const snackNameCap = (name) => {
  const nameArray = name.split(' ')
  const updatedName = []
  for(let i = 0; i < nameArray.length; i++){
    if(nameArray[i].length >= 3){
      updatedName += nameArray[i].splice(0,1).toUpperCase() + nameArray[i].splice(1)
    }else{
      updatedName += nameArray[i]
    }
  }
  
}

module.exports = snackNameCap;