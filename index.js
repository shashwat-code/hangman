const words = ["Array","String","LinkedList","Queue","Stack","Hashmap","Tree"]
const dashWord = document.getElementById("guessedDash")
const guessWord = document.getElementById("guessWord")
let correctAnswer = []
let correctFound=[]
let wrongfound=[]
let index=0
let wordLength=0
const loadspace = ()=>{
    index = Math.ceil(Math.random()*(words.length-1))
   wordLength = words[index].length
    dashWord.textContent=""
    let dash=""
    for(let i=0;i<wordLength;i++){
        dash+="_"

    }
    dashWord.textContent=dash
    correctAnswer = [...words[index].toLowerCase()]
    console.log(words[index])
}


loadspace()

window.addEventListener("keydown",(e)=>{
    if(e.key>='a' && e.key<='z'){
        checkword(e.key)
    }
})

const allParts = ["head","mainBody","leftHand","rightHand","leftLeg","rightLeg"]
let currPart=0

function checkword(letter){
    if(correctAnswer.includes(letter)){
        putword(letter)
    }else{
        const e = document.getElementById(allParts[currPart++])
        e.style.display="block"
        if(wrongfound.includes(letter)){
            window.alert("You have already pressed ")
        }else{
            window.alert("You pressed wrong key")
            wrongfound.push(letter)
        }
        console.log(wrongfound)
    }
    console.log(currPart,allParts.length)
    if(currPart>=allParts.length){
        window.alert("OOPS!! you lost")
         startNew()
    }
}

function startNew(){
    correctAnswer=[]
    loadspace()
    for(let i=0;i<allParts.length;i++){
        const e = document.getElementById(allParts[i])
        e.style.display="none"
    }
    guessWord.textContent=""
    correctFound=[]
    wrongfound=[]
    currPart=0
}

function putword(letter){
    let value =0
    let s =""
    if(correctAnswer.includes(letter)){
        if(correctFound.includes(letter)){
            window.alert("Already entered")
        }
        correctFound.push(letter)
    }
    for(let i=0;i<correctAnswer.length;i++){
        if(correctFound.includes(correctAnswer[i])){
            value++
            s+=correctAnswer[i]
        }else{
            s+="-"
        }
    }
    
    guessWord.textContent=""
    console.log("word is: ",s)
    guessWord.textContent=s
    console.log(wordLength,value)
    if(wordLength==value){
        window.alert("You Won !!")
        startNew()
    }
}