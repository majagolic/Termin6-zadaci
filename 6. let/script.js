var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function () {
      console.log('Kliknuo sa na dugme #' + i);
   });
}

/* It will always display the value of i as the total number of buttons minus one. 
This is because the loop variable i retains its value when the callback function is executed, 
and by the time the callback is called, the loop has already finished.

To address this issue and display the correct button index, you can use a closure or the let keyword to create 
a new variable scope for each iteration of the loop. Here's how you can modify the code to achieve the desired behavior:*/

/*By using let to declare the loop variable i, a new variable scope is created for each iteration, 
and the value of i will be correctly captured by the click event listener. This way, when you click on a button, 
it will display the correct button index.*/
