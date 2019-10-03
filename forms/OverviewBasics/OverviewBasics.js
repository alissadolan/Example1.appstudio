/* *********************************************
 Main Concepts for appStudio
 1. Resources - appStudio links in BL
 2. Controls (widgets) - graphical user interface (GUI)
    Comes with lots of additional functionality you can set
    in code or before it runs (Properties pane)

 3. Controls are third-party controls. Focus is on 
    Bootstrap4 and jqWidgets. Stay with those.

    Bootstrap4 is an HTML5/CSS framework. 
    Used to make webpages. Many of the controls 
    have been recently added to appStudio. 
    Differentiator: combines design and functionality. 
     eg. can combine text input box and a label. 
    - Bookstrap4 and JQWidgets have the best documentation. 

    > Goto Bootstrap4 documentation:
      https://wiki.nsbasic.com/Introduction_to_Bootstrap
      and scroll down to Controls.
         > pick a Bootstrap4 Button - look at its' 
         Properties and Methods ()
         > pick input - look at Properties and Methods - look 
         at 'inputTypes' - 
         Remember - ALL input.value's are strings. 
         
    > another resource: https://www.w3schools.com/bootstrap4/bootstrap_buttons.asp
      Go there - notice (in W3 documentation) we won't write the 
      extra code because we have appStudio to do that automatically. 
      
            <button type="button" class="btn">Basic</button>

 4. Sample Projects - Goto appStudio > File > Open Sample Project.
    Make sure you are looking at Javascript (not Basic) samples. 
    Goto the Controls > Bootstrap4 > Image Sample - open and test it.
    Look at Properties - see the rounded corners? (shape) Location 
    of the picture? (src)
    
 5. It may seem like the app isn't running (don't see anything) - 
    this is because  everything is coded out, and while the controls
    are being displayed, the program continues to run more comments, 
    and they are taken down. 
    Can see this if you set debugger to the end of the first form 
    around line 250ish, then run (I also set watch to inptAge.value).
    
    ** to get around this, set the firstform property of the project 
    to the form you want to run. Then the app will start with 
    that form. 
*/

/*  *******************************************************
Do this with your Level partner:  
   1. Outside of appStudio, make a folder in this project 
   folder named 'images'. Move the Vinny.jpg file 
   into that folder.
   2. Drag this images folder into the Project Explorer in 
   appStudio. That way it will be packaged up with the project. 
   3. Create a new form named VinnyPic. 
   4. Now put a Bootstrap4 image control on the design side 
   of the form. Then find the image control property that
   tells the control to use the 'Vinny_jpg' picture in the 
   control instead of the default. 
   5. In the Project, set the firstform property to this form 
   so the app will start with this form. 
   6. test it out!
 */
