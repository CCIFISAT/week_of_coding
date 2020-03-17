# Welcome To Day 2 
**Today we will learn how to design a Website using CSS.**

# What is CSS
**CSS stands for Cascading Style Sheets.**         

**CSS describes how HTML elements are to be displayed on screen.**  

**CSS saves a lot of work. It can control the layout of multiple web pages all at once.**

# CSS Syntax

   ![selector](https://user-images.githubusercontent.com/47073691/76748038-1a2ff400-67a0-11ea-8117-e5bde4042890.gif)

# CSS can be added to HTML elements in 3 ways
             
                      Inline - by using the style attribute in HTML elements.
                      Internal - by using a <style> element in the <head> section.
                      External - by using an external CSS file.
                      
  **Inline CSS** :
  
       <h1 style="color:blue;">Welcome To day 2</h1> 
       
   **Internal CSS** :
   
           <head>
               <style>
                     h1 {color: blue;}
                      p {color: red;}
                </style>
           </head>
           
           <body>

                <h1>Day 2</h1>
                <p>Today we will learn how to design a Website using css.</p>
           </body>
           
  **External CSS** :
  
             <head>
                    <link rel="stylesheet" href="styles.css">
              </head>
              
               <body>

                     <h1>This is a heading</h1>
                     
                     <p>This is a paragraph.</p>

                </body>
                
   **how the "styles.css" looks:**
   >**:warning: Note: "style.css" should be implemented in a seperate file and it should be in the same folder of the HTML            file**
    
                h1 {
                     color: blue;
                   }
                   
                 p {
                     color: red;
                   }

>**:mega: Checkout (example 1)**

# CSS Styles

## :one: Fonts:

**The CSS font properties define the font family, boldness, size, and the style of a text.**

Generic family | Font family
------------ | -------------
Serif | Times New Roman, Georgia
Sans-serif |  	Arial, Verdana
Monospace |   	Courier New, Lucida Console

       <h1 style="font-family: Verdana, sans-serif;">Welcome to day 2</h1>
       
 
## :two: Colors:

**Background Color:**

      <h1 style="background-color:Blue;">Hello World</h1>
      
      background-color is used to specify the color of the background.
      
**Text Color:**
      
          <h1 style="color:Red;">Hello World</h1>
          
           You can set the color of text
           
**Border:**

              <h1 style="border:2px solid Violet;">Hello World</h1>
              
  Values | Description
  ------------ | -------------
   dotted | A dotted border
   dashed | A dashed border
   solid |  A solid border
   outset | A 3D outset border
              
## :three: Background-image:

   **Add background image in html page**

              <style>
                body {
                    background-image: url("test.jpg");
                    background-attachment: fixed;
                     }
              </style>                
                  </head>
                  
                    <body>
                        <h1>Hello World!</h1>
                     </body>
                     
   **To avoid repetition of image use in style-** ```background-repeat: no-repeat;```
   
  **The background-position property is used to specify the position of the background image-** ```background-position: right       top;```
  
  **The background-attachment property specifies whether the background image should scroll or be fixed-**```background-attachment: fixed / scroll;```(specify any one)
  
>**:mega: Check out (Example 2)**
  
  ## :four: Margins:
  
  **The CSS ```margin``` properties are used to create space around elements.**
  
  **CSS has properties for specifying the margin for each side of an element:**
            
                      margin-top
                      margin-right
                      margin-bottom
                      margin-left
                      
   **All the margin properties can have the following values:**

  >**"auto" - the browser calculates the margin**           
  >**"length" - specifies a margin in px, pt, cm, etc.**                 
  >**"%" - specifies a margin in % of the width of the containing element**                 
  >**"inherit" - specifies that the margin should be inherited from the parent element.**
    
         p {
             margin-top: 100px;
             margin-bottom: 100px;
             margin-right: 150px;
             margin-left: 80px;
             
             }
             
             or else you can use
             
              p {
                   margin: 25px 50px 75px 100px;
                 }
                  
             Here,
               
                 top margin is 25px, right and left margins are 50px, bottom margin is 75px
                 
                or
              
                margin: auto;
                
                //px=pixels
                
# :five: Padding :

**The CSS padding properties are used to generate space around an element's content.**

**With CSS, you have full control over the padding.**

**CSS has properties for specifying the padding for each side of an element:**
 
                           padding-top
                           padding-right
                           padding-bottom
                           padding-left
                           
                           div {
                                  padding-top: 50px;
                                  padding-right: 30px;
                                  padding-bottom: 50px;
                                  padding-left: 80px;
                                }
                                
                            div {
                                  padding: 25px;
                                }
                                
                    // If the padding property has one value all four paddings are 25px.
                    
# :six: Height/Width:
    
**The height and width properties are used to set the height and width of an element.**

**The height and width properties may have the following values:**

     
             auto - This is default. The browser calculates the height and width
             length - Defines the height/width in px, cm etc.
             % - Defines the height/width in percent of the containing block
             initial - Sets the height/width to its default value
             inherit - The height/width will be inherited from its parent value.
             
**Set the height and width of a ```<div>``` element:**

                          div {
                                 height: 200px;
                                 width: 50%;
                                 background-color: blue;
                               }
                              
 ## Setting max-width-
  
  **The max-width property is used to set the maximum width of an element.**
  
  **The max-width can be specified in length values, like px, cm, etc., or in percent (%)**
  
               div {
                     max-width: 500px;
                     height: 100px;
                     background-color: blue;
                    }
                    
>**:mega:Check out (Example 3)**

# :seven: Box Model :
   

![box](https://user-images.githubusercontent.com/47073691/76872739-d10c9c80-6892-11ea-8782-6ae0e949d976.png)
 
 **All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.**
 
 **The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.**
 
 
                  Content - The content of the box, where text and images appear.
                  Padding - Clears an area around the content. The padding is transparent.
                  Border - A border that goes around the padding and content.
                  Margin - Clears an area outside the border. The margin is transparent.
                  

# :eight: Text:

## Text Alignment-

  **The ```text-align``` property is used to set the horizontal alignment of a text.**
  
  **```text-align```can be ```center, left, right```**
  
          div {
               text-align: justify;
               }
               
          //justify is used so that every line has equal width, and the left and right margins are straight.
          
   ## Text Decoration-
   
   **The text-decoration property is used to set or remove decorations from text.**
   
                  p {
                      text-decoration: none;
                    }
                   
   >**The value ```text-decoration:none;``` is often used to remove underlines from links:**
   
   
                    h1 {
                         text-decoration: overline;
                        }

                     h2 {
                           text-decoration: line-through;
                        }

                     h3 {
                             text-decoration: underline;
                         }
                         
>**:mega:Check out (Example 4)**

# :nine: Navigation bars:
**A navigation bar needs standard HTML as a base.**
**It consists of an unordered html list**:



**This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.**

          ul 
          {
               list-style-type: none;
               overflow: hidden;
          }


**The float CSS property places an element on the left or right side of its container**


          li 
          {
               float: left;
          }


**The text-decoration shorthand CSS property sets the appearance of decorative lines on text**


            li a 
            {
                  display: block;
                  text-decoration: none;
            }
            
            
**The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor**


             li a:hover 
             {
                  background-color: #111;
             }
   >**:mega:Check out (Example 5)**
   
# :keycap_ten: Max-Width:
   
**The max-width property defines the maximum width of an element.**

            p 
            {
                  max-width: 50%;
            }

**sets the maximum width of p-tab to 50%**


# Create a Image Gallery

  **```target="_blank"``` is used to navigate to next page.**
  
  **The```hover``` selector is used to select elements when you mouse over them. The :hover selector can be used on all     elements**
  
 >**:mega:Checkout (Example 6)**
   
   
   


                            
                            

                 
 

      
