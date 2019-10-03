/* *********************************************
 Lets talk about the mental model of what is going on 
 with this appStudio form/program and your part in it. 
 1. What are events? 
    Remember - they have three elements 
      > a named event for a control eg. onclick.
      > an event listener - function appStudio makes that 
         'listens' for a click on the control. 
      > an event handler - code you write that is run 
        when the event happens to the control. Goes in 
        the event listener function. So event listener 'hears'
        a click on the control, and it runs the code inside of 
        it in response. 

    Common control events we'll use a lot: onclick, mouseover, 
     onload, onchange, onfocusout.
     
   Good events descriptions with examples: 
    http://nptcstudents.co.uk/andrewg/jsweb/eventhandlers.html

 2. So in review, the process of developing apps using 
    controls and events is: 
    1) think about the problem - write a rough algorithm to use
    as a plan for your code
    2) rough sketch the interface - shows controls needed
    3) Interface: build part of interface with 1-2 controls, 
       setting properties, and run to test. Fix until it works.
    4) Events: add event(s) for the control(s), code handlers and test.
       Fix until it works.
    5) repeat

*/



/*  
    You did this app before class in appStudio (tutorial):  
    You created an app that gots the users' name,
    and when they clicked a button, it showed them a message using
    their name. 
    
    Open the form TutorialExample to see the results of doing the 
    tutorial. 
*/

/*
Now do together: 
    Now we'll do something similar but with more detail. 
    Scenario: get users name using a control. When they click 
    a button, display their name with a message in a control. 
    
    The process to use to do this:  
    1) Algorithm: 
       we need a control for user into which they 
       can type their name. Then need a button to click. 
       When user clicks a button, app needs to respond by: 
        - getting user name from the control they entered it into 
        - put the name and the message in the control that will
          display it
          
    2) sketch the interface with controls needed.
       Bootstrap4 button, input, and a label control
       
    3) Create a form named userInfo.Then build first part of 
        the GUI with 1-2 controls & properties set. 
        Lets use Bootstrap4 input and button controls.
           > name controls as add them. Name the button: 
               "btnGetMyMessage"
           > make button say "Submit"
           > name the input "inptName" and make it blank initially
    
    4) add event for the button control and event handler code.
           > right-click button and pick 'onclick' event 
             (events is also in Properties for button)
           > in the code-behind, go to onclick button listener
             function. 
                 
    5) repeat from 3): this time add label(s) and code 
       for displaying message 
          > set label property so it is blank initially
*/


/*   *******************************************************
 Do this with your Level partner:  
     Create a new form named UserAddress. Then create this app:  
     Scenario: get users' street address. User clicks button 
     to submit. Then the program adds Omaha, NE to the address,  
     and shows it to them as: 
       Your address is 112 F St
       Omaha, NE
       The input control should be labeled "Enter address: ".
       Hint: can't add a linebreak in code....

    1) create rough algorithm of how to write the program
    2) rough sketch interface, controls needed
    3) build part of interface 1-2 controls and properties
    4) add event(s) for control(s) and event handler code
    5) repeat from 3)

*/

/*
We'll do this together: 
    6) Now to make the message appear on a second form. 
       This is variable scope - when you need to use 
       a value obtained on one form on another form. 
       Create a second form named UserAddress2. That is the 
       form on which the message will appear when the button on 
       UserAddress form is clicked. 
       
      1. move variable declaration to outside of the
         event listener function
      2. add ChangeForm(new form)to UserAddress event handler code
         so when event handler run, it changes to display the new 
         form. 
      3. make a new form named UserAddress2 - add a 
         label to show the message.
      3. add 'onshow()' event to new form and add
         event handler code using 'address' variable 
         from the UserAddress form. 

*/





