const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // const seededFruits = document.querySelectorAll('.seed');
    // seededFruits.forEach(el => console.log(el));

    // 2. Get all seedless fruit elements
    // const seedlessFruits = document.querySelectorAll('.seedless');
    // seedlessFruits.forEach(el => console.log(el));

    // 3. Get first seedless fruit element
    // const firstSeedless = document.getElementsByClassName('seedless')[0];
    // console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // const allSpanElements = document.querySelectorAll('span');
    // allSpanElements.forEach(span => {
    //     if (span.innerText === 'you') {
    //         console.log(span);
    //     }
    // });

    // 5. Get all children of element "wrapper"
    // const wrappers = document.getElementById("wrapper");
    // const wrapperChildren = wrappers.children;
    // for (let i = 0; i < wrapperChildren.length; i++) {
    //     console.log(wrapperChildren[i]);
    // }


    // 6. Get all odd number list items in the list
    // const oddListItems = document.querySelectorAll('li.odd');
    // oddListItems.forEach(li => console.log(li));

    // 7. Get all even number list items in the list
    const orderedList = document.getElementsByTagName("ol");
    const olChildren = orderedList[0].children;
    for (let i = 0; i < olChildren.length; i++) {
        let child = olChildren[i];
        if (child.className !== 'odd') {
            console.log(child);
        }
    }



    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;
