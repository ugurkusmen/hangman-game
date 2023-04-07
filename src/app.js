class hangman {
    constructor(letter, count){
        this.name = letter.toLowerCase().split('')
        this.count = count
        this.guesses =[]
        this.status = 'playing'
    }
    makeGues(gues){
        gues = gues.toLowerCase()
        const isUnique = this.guesses.includes(gues)
        const isBadGues = !this.name.includes(gues)
        if(this.status !== 'playing'){
            return
        }
        if(!isUnique){
            this.guesses.push(gues)
            if(isBadGues){
                this.count-=1
        
            }
        }
   
    }
    get stop(){
        if(this.status === 'failed'){
            return `Failed -> Nice try! The word was "${this.name.join('')}"`
        }
        else if(this.status === 'finished'){
            return `Finished -> Great work! You guessed the word`
        }
        else{
            return `Playing -> Guesses left ${this.count}`
        }
    }
    get puzzle(){
        let final = ''
        this.name.forEach((letter) => {
            if(this.guesses.includes(letter) || letter === ' '){
                final += letter 
            }
            else{
                final+='*'
                }
            }
        )
     return (final)
    }
    statu(){
        const finished = this.name.every((letter)=>this.guesses.includes(letter) || letter ===' ')

        if(this.count === 0 ){
            this.status = 'failed'
        }
        else if(finished){
            this.status ='finished'
        }
        else{
            console.log(this.status)
        }
    }

    
    }

export {hangman as default}