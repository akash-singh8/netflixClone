function action1(){
    let count = 1;
    for (let i=0; i<1000000000; i++){
        count = count * count * count;
    }
    console.log("this is action 1");
}

// so as we can see that action 1 will take some time to execute till then the whole process will be stopped as javascript is an single threaded language and that's known as synchronous
// but instead of calculation such tasks if we have use function such as setInterval or setTimeout that the processes wouldn't be stopped as those are asynchronous function, but there's some problem with asynchronous functions for example if we are fetching data from a server which may take some time to process so with async function it'll go to next task or process and if that task needed the response data, then we'll get an error as we haven't received that data and we're continuing to other operations and to solve such problems we can either use callbacks or promises

function action2(){
    console.log("This is Action 2");
}

function action3(){
    console.log("This is Action 3");
}

// action1();
// action2();
// action3();

// let response = fetch("https://restcountries.com/v3.1/name/bhutan");
// response.then(function(response){
//     return response.json();
// }).then(function(json){
//     console.log(json[0].name.common);
// }).catch(function(err){
//     console.log("Errors : " + err.message);
// })


async function print(){
    return "I have been printed";
}
console.log(print());
print().then(response => console.log(response));

// await pauses the codeflow at that line until the promises is fulfilled, it works only inside async function
async function getData(){
    const response = await fetch("https://restcountries.com/v3.1/name/bhutan");
    const data = await response.json();
    return data[0].name;
}

getData().then(response => console.log(response.common)).catch(err => console.log("Error : ", err));

