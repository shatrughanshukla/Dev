console.log("JS file connected")

const myDiv = document.getElementById("myDiv");
console.log("Fetch By Id", myDiv.textContent);

const classElements = document.getElementsByClassName("myClass");
console.log("Fetch By Class:");
for(let i = 0; i < classElements.length; i++){
    console.log(`Elements ${i + 1}:`, classElements[i].textContent);
}
        /*
        const classElements = document.getElementsByClassName("myClass");
            What does this do?
                document: refers to the HTML document (your webpage).
                .getElementsByClassName("myClass"): fetches all elements with the class name "myClass".
            -> It returns an HTMLCollection — which is like an array, but not exactly. 
                It's array-like (you can loop through it, access items using index),
                but doesn't have array methods like .map() or .forEach() unless you convert it(Array.from( classElements) ).
        */
       
const tagElemets = document.getElementsByTagName("p");
console.log("Fetch by Tag Name:");
for(let i = 0; i < tagElemets.length; i++){
    console.log(`Paragraph ${i+1}:`, tagElemets[i].textContent);
}

const highlights = document.querySelectorAll("span.highlight");
console.log("Fetch by Query Selector:");
highlights.forEach((el, index) => {
    console.log(`Highlight ${index + 1}:`, el.textContent);
});
        /*
        document.querySelectorAll summary:
            | Concept                        | Details                                                        |
            | ------------------------------ | -------------------------------------------------------------- |
            | `querySelectorAll("selector")` | Selects all matching elements using **CSS-style selector**     |
            | `"span.highlight"`             | Selects all `<span>` with class `"highlight"`                  |
            | Returns                        | A NodeList                                                     |
            | NodeList supports              | `.length`, indexed access, and `.forEach()` directly           |
            | For advanced methods           | Convert to array using `Array.from()`                          |
        
        Wait... What is a NodeList?
            A NodeList is very similar to an array, like HTMLCollection, but slightly better in some ways.
                NodeList Properties:
                    | Feature        | NodeList  | HTMLCollection |
                    | -------------- | --------  | -------------- |
                    | `.length`      |  Yes      |  Yes           |
                    | Indexed access |  Yes      |  Yes           |
                    | `.forEach()`   |  Yes      |  No            |
                    | Live update    |  No       |  Yes           |

        What other selectors can I use with querySelectorAll()?
            You can use any valid CSS selector.
                | Selector               | Meaning                                 | Example                              |
                | ---------------------- | --------------------------------------- | ------------------------------------ |
                | `"div"`                | All `<div>` elements                    | `document.querySelectorAll("div")`   |
                | `".className"`         | All elements with that class            | `".highlight"`                       |
                | `"#myId"`              | Element with that specific ID           | `"#mainHeader"`                      |
                | `"ul li"`              | All `<li>` inside `<ul>`                | `document.querySelectorAll("ul li")` |
                | `"input[type='text']"` | All input fields of type text           |                                      |
                | `"p.note, span.note"`  | All `<p>` or `<span>` with class `note` |                                      |
                | `"h1, h2"`             | All h1 and h2 elements                  |                                      |
            Basically, anything you can write in CSS, you can use inside querySelectorAll().
        */

const firstHighlight = document.querySelector("span.highlight");
console.log(`First Matching Element:`, firstHighlight.textContent);