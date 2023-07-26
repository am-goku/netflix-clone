
let array = [1,2,3,4,5]


async function abc(){
    for (const obj of array){
        await new Promise((resolve)=>{
            setTimeout(resolve,1000)
            console.log(obj);
        })
    }
}


abc()