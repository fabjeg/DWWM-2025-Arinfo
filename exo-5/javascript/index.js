// document.addEventListener("DOMContentLoaded", () => {
//     function typeEffect(element, speed) {
//         let text = element.innerHTML; 
//         element.innerHTML = ""; 

//         let i = 0;
//         let tempText = "";
//         let isTag = false;
//         function type() {
//             if (i < text.length) {
//                 let char = text[i];

//                 if (char === "<") isTag = true; 
//                 if (char === ">") isTag = false; 

//                 tempText += char; 
//                 element.innerHTML = tempText; 

//                 i++;
//                 setTimeout(type, isTag ? 0 : speed); 
//             } else {
//                 const bioWord = element.querySelector(".color_bio");
//                 const highlight = element.querySelector(".highlight");

//                 if (bioWord) {
//                     bioWord.style.color = "#02a437"; 
//                     bioWord.style.transition = "color 0.3s"; 
//                 }

//                 if (highlight) {
//                     highlight.style.borderBottom = "2px solid #02a437"; 
//                     highlight.style.transition = "border-bottom 0.3s"; 
//                 }
//             }
//         }

//         type();
//     }

//     const title = document.querySelector(".title_h2"); 
//     if (title) {
//         typeEffect(title, 60); 
//     }
// });
