const checkName = (request, response, next) =>{
  if( request.body.name){
    console.log(`we've got a snack name here!`)
    next()
  }else{
    response.status(400).json({error: 'We need a sanck name ...'})
  }
}

const checkBooleen = (request, response, next)=>{
  const {is_healthy} = request.body
  if(is_healthy === true || is_healthy === false || is_healthy === undefined){
    console.log(is_healthy)
    next()
  }else{
    console.log(`booleen value not passed. Got ${request.body.is_healthy}`)
    response.status(400).json({error:`is_healthy should be an booleen`})
  }
}

// const validateImage = (request, response, next)=>{
//   if(request.body.image.substring(0, 7) === 'http://' || request.body.image.substring(0,8)=== 'https://'){
//     console.log('Url checks out! (Line21)')
//     next()
//   }else{
//     response.status(400).json({error: "URL doesnt match http:// or https://"})
//   }
// }

module.exports={checkName, checkBooleen}