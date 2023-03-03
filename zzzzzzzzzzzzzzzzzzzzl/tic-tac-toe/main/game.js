var table = document.getElementsByTagName('td')

for (let i=0;i<table.length;i++) {
    table[i].addEventListener('click',function(){select(table[i],table)});
}

var turn=true
var game=true
var winner
var subtitle=document.getElementById('subtitle')

console.log(subtitle)
console.log('helkp')
function select(x,table){
    
    if(game){
        if(x.innerHTML==''){
            subtitle.innerHTML=''
            var piece
            if (turn){piece='x'}
            else{piece='o'}
            x.innerHTML =piece
        
            turn=!turn
            check_for_winner(table)
        }
    }
    else{
        reset(table)
    }
    
    
function reset(table){
    game=true
    winner=null
    for (let i in table){
        table[i].innerHTML = ''
    }

}
}

function check_for_winner(board){
    function getsquare(square){
        return square.innerHTML
    }
    arr=[]
    for(i in board){
        arr.push(getsquare(board[i]))
    }
    function check(a,b,c){
        if (a==''){
            return false
        }
        if (a==b&&b==c){
            winner=a
            game=false
            subtitle.innerHTML = `winner is ${winner} , click to reset`
        }
    }
    function full_board(arr){
        game=false
        for (let i in arr){
            if (arr[i]==''){
                game=true
                
            }
        }
    }
    full_board(arr)
    check(arr[0],arr[1],arr[2])
    check(arr[3],arr[4],arr[5])
    check(arr[6],arr[7],arr[8])

    check(arr[0],arr[3],arr[6])
    check(arr[1],arr[4],arr[7])
    check(arr[2],arr[5],arr[8])

    check(arr[0],arr[4],arr[8])
    check(arr[2],arr[4],arr[6])
    console.log('winner',winner)
    

}




