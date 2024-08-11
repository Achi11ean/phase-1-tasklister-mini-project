document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//   }
/*
we need to select the form tag so we can listen for submissions then we can add teh data --> so we need to select the form because it has the data and we need to select the ul list so we can append to it submitted tasks
 --add an event listener that listens for a "submit" (need event name) 
 ...and appends a new task to the list
   create a new element -- li  -- -- modify it's text content
--select the list ul so we can append the data
-append the new and modified to the li mentioned above
--erase task description the user entered into the form to reset

 user story: things the user will expect from the solution | as a user we expect: enter a new task in a text input box --> submit the new task--> see new task added to the list 
*/
// select form so we can listen for submissions; prevent default event handling
document.querySelector("form").addEventListener("submit", (event) => {
// create a new li
  event.preventDefault();
  const task = document.createElement("li");
  // modify it's text content i.e. the value of input name = "task"
  // console.log(form.task.value)  --check if it's working!!!
  // alternate if you do have an id for your input -- document.querySelector("#tasks")
  task.textContent = form.task.value
// 'append 'task" mentioned above to the ul id- tasks -- [parent].append[child]
document.querySelector("#tasks").append(task)
// erase the task description the user entered into the form
//  event.target === the events target === where the submit event was fired === form
// option 1: change the value of each input to "" 
// option 2: call the reset method on the form
form.reset();

})
})