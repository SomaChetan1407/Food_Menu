
// const btw = document.getElementsByClassName("add-btw");
// const label= document.getElementsByClassName("number");

// let count = 0; 
// btw.onclick = function (){
//     count ++;
//             label.textContent = count;
// }


// 1. Select all add buttons using querySelectorAll
const buttons = document.querySelectorAll(".add-btn");

// 2. Loop through each button to attach the click event listener
buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Find the card-footer containing this specific button
        const footer = button.closest(".card-footer");
        if (footer) {
            // Find the specific counter label for this food card
            let label = footer.querySelector(".number");

            if (label) {
                // 3. Get the current count for this specific card, increment it, and display it
                let count = parseInt(label.textContent) || 0;
                count++;
                label.textContent = count;
            }
        }
    });
});
