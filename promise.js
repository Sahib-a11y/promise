const promiseone = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task done",promiseone)
        // reject("some error in promise")
        resolve("resolved !")  //jb tkk resolve nahi hoga promise to agee nahi jayee gaa , iskii vjaa se .then bhi nahi execute hoga.
    }, 2000);
})

promiseone.then(function(){
    console.log("that's promise method");
})

new Promise((resolve,reject)=> {
    setTimeout(() => {
        console.log("new promise also executed")
        resolve("resolved")
    },1000)
}).then(()=>{
    console.log("new promise done then")
})

const prom = new Promise(function(res,rej){
    setTimeout(() =>{
        console.log("promimg being done",prom)
        res({username:"shaib565" , email:"sahib@gmail.com"})
    },1000)
})

prom.then((user)=>{
    console.log(user)
})

const promised = new Promise((resolve, reject) => {
    setTimeout(() => {
       let error = false;
       if(!error){
        resolve({username : "anand" , email : "anand@gmail.com"})
       }else{
        reject('EROR , SOMETHING WENT WRONG')
       }
    }, 1000);
})

promised.then((user) => {
    console.log(user,promised)
    return user.username
}).then((username) =>{
    console.log(username)
}).catch((error)=> {
    console.log(error)
}).finally(() => console.log("your username is created in our database"));

const prosed  = new Promise((res ,rej) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            res({username:"hitesh" , email : "hitesh@gmail.com"})
        }else{
            rej('ERROR ,WENT IN JAVASCRIPT')
        }
    },4000)
})

async function secndmetd(){
    try {
    const secondway = await prosed   // await behind the scens (.then) hi usee krr rhaa yee perform krnee ke liyee, or pause krr rha hain res ,rej ke liye. 
    console.log(secondway)
    } catch (error) {
        console.log(error)    
    }
}

secndmetd()

// async function getallusers(){
//     try {
//         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//         const dataa = await response.json()  // issme yee ptaa lgtaa hain jis km mein tym lgta hain vaha pe await ke bina code wrk nhi kree ga (yaha pe convert krr rha hain isme bhi time lgg rhaa hain).
//         console.log(dataa)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))