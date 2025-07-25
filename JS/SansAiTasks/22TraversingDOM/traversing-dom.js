const list1 = document.getElementById("list1");
let currentItem = list1.firstElementChild;
console.log("(Forward traversal):");
while (currentItem){
    console.log(currentItem.textContent);
    currentItem = currentItem.nextElementSibling;
}

const list2 = document.getElementById("list2");
let reverseItem = list2.lastElementChild;
console.log("(Reverse Traversal):");
while(reverseItem){
    console.log(reverseItem.textContent);
    reverseItem = reverseItem.previousElementSibling;
}

const list3 = document.getElementById("list3");
let listItem = list3.children;
console.log("List 3 (Using Children):");
for(let i = 0; i < listItem.length; i++){
    console.log(listItem[i].textContent);
}
        /*
            let listItem = list3.children;
                list3.children returns an HTMLCollection of only the element child nodes inside list3.

            In this case, it gives:
                [<li>India</li>, <li>Japan</li>, <li>Russia</li>, <li>Korea</li>]
            Note: .children excludes things like text nodes, comments, or whitespace between elements. It only includes HTML elements (<li> in this case).
        */

        /*
        Concept of Children in DOM
            | Property             | Description                                                                               |
            | -------------------- | ----------------------------------------------------------------------------------------- |
            | `element.children`   | Returns an **HTMLCollection** of only **element nodes** (e.g., `<li>`)                    |
            | `element.childNodes` | Returns a **NodeList** of **all child nodes** (including text, comment, whitespace nodes) |
        */
        
            /*
        .nextElementSibling vs .nextSibling
            | Property              | Returns                                                                  | Includes non-element nodes? |
            | --------------------- | ------------------------------------------------------------------------ | --------------------------- |
            | `.nextElementSibling` | The **next HTML element**                                                |  No                         |
            | `.nextSibling`        | The **next node**, even if it's a text node (like whitespace or comment) |  Yes                        |
        Same for:
            .previousElementSibling (element-only)
            .previousSibling (all node types)
        Example:
            <ul>
            <li>Apple</li>
            <!-- Comment -->
            <li>Banana</li>
            </ul>
            Now, if you're at <li>Apple</li>:
                li.nextElementSibling → <li>Banana</li>
                li.nextSibling → Comment Node → You may get unexpected behavior if you blindly use .nextSibling.
            In 90% cases while dealing with DOM elements (like HTML tags), you should prefer:
                .children over .childNodes
                .nextElementSibling over .nextSibling
                Because they avoid invisible whitespace or comment issues.
            */