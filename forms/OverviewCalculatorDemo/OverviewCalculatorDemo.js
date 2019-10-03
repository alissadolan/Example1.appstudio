/*
Do this with your partner. 
 Calculator program (use this form).
 Scenario: gets 2 numbers, and outputs the sum. User 
 can also clear the input boxes. Put answer on a second 
 form. So create a form named calculatorDemoAnswer.
 Requirement - must use a global function 

 1) Algorithm:
    get two numbers from user
    when user clicks the Add button, add the numbers 
    and show the answer in a control.
      ? show it in a label? in a Bootstrap Alert? NSBMsg()? 
    if user clicks the reset button, clear the content 
    of the two controls that hold the numbers and the answer display.
 2) sketch GUI, id controls needed:
    - need two input controls  (for 2 numbers) with labels
    - need Add button
    - need Reset button
    - need control to display answer - bootstrap4 Alert? label? NSBMsg? 

 3) build first part of interface with 1-2 controls and properties:
    > add controls one input, one button
    > clear out input, put 'Add' on button
    > add onclick for the button - event listener
    > in the event listener function, write your event 
      handler code - add and display answer
  
   Here is the code for a function that adds two numbers
   - where should it go in the code behind of this form? 

        function addTwo(n1,n2) {
           return n1 + n2   
        }

 4) Now for the code for button onclick event handler. 
    It is close to this (this code needs some tweaking). 

        var answer = 0
       
        
 5) Then add an event and event handler code for the Reset button. 

*/

 btnAdd.onclick=function(){      
            lblAnswer.value = Number(inputNum1.value) + Number(inputNum2.value)
        }





btnReset.onclick=function(){
  lblAnswer.value = ''
  inputNum1.value = ''
  inputNum2.value = ''
  
}
