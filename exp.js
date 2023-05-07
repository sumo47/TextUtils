let text = "   f"

// console.log(text.split(''))
// console.log(text.split('').length)

let x = 5

// text = text.split('')
// for(let e of text){
//     console.log(text.length,text)
//     if(e === " "){
//         console.log("space")
//     }
// }

console.log(text.split('').filter((element)=>{return element !== " "}).length) //alternative / working fine

// no = text.split(' ')

// for(let e of no){
//    if(e.split("").length>1){
//     console.log(e)
//    }
// }

// console.log(no, no.length)

// let upperCaseElement = text.split(' ')[0].split('')[0].toUpperCase()
// let firstElement = text.split(' ')[0].split('')[0]

// let newText = text.replace(firstElement,upperCaseElement)

// console.log(upperCaseElement,firstElement,text,newText)


// let finalArray = []
// let arrayElement = array.map(word=>{
//     let newArray = word.split("")
//     let upperCaseElement =  newArray[0].toUpperCase()
//     newArray.splice(0,1,upperCaseElement)
//     let joined = newArray.join('')
//     finalArray.push(joined)
// })
// let mix = finalArray.join(' ')
// console.log(mix)

// let t = [ 't', 'h', 'i', 's' ]
// let x = t[0].toUpperCase()
// t.splice(0,1,x)
// let j = t.join("")
// console.log(j)
