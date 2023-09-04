const incrementButton = document.querySelector('.increment');
const DisplayElement = document.querySelector('.js-count');
const SaveButton = document.querySelector('.js-Save');
const ContentElement = document.querySelector('.js-Content');
const TotalButton = document.querySelector('.js-Total');
const StotalElement = document.querySelector('.js-Stotal');
const RefreshButton = document.querySelector('.js-Refresh');

let count = 0;
let total = 0;
 
incrementButton.addEventListener('click',() => {
    increment();
});
SaveButton.addEventListener('click',()=>{
    save();
});
TotalButton.addEventListener('click',()=>{
    StotalElement.textContent = `${total}`;
});
function increment(){
    count = count + 1;
    DisplayElement.textContent = count;
}
function save(){
    if(count !=  0){
        ContentElement.textContent += `${count}-`;
    }
    total = total + count; 
    count = 0;
    DisplayElement.textContent = count;
}
RefreshButton.addEventListener('click',()=>{
    location.reload();
})



