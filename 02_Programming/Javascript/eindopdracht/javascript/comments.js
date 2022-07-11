"use strict";

// const commentsDiv = document.querySelector(".comments");
const commentsList = document.querySelector(".comments__list");
const commentsInput = document.querySelector(".comments__txtinput");
const commentSender = document.querySelector(".comments__sender");
const commentForm = document.querySelector(".comments__form");
const replyContainer = document.querySelector(".comments__reply-container");
const replyInformation = document.querySelector(".comments__reply-paragraph");
const closeBtn = document.querySelector(".comments__close-btn");

let counter = 0;
let reply = false;

////////////////////////////////////
// Event handler op submit button //
////////////////////////////////////

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const sender = commentSender.value;
  const comment = commentsInput.value;
  const commentsNr = ++counter;

  // Fallback voor als er een lege comment wordt geplaatst.
  if (comment.trim() === "") {
    counter -= 1;
    return;
  }

  // Hieronder alle HTML elementen die op de pagina worden geplaatst zodra er op 'Submit' wordt geklikt.

  const commentsListItem = document.createElement("li");
  commentsListItem.classList.add("comments__list-item");
  commentsListItem.setAttribute("id", commentsNr);
  commentsList.appendChild(commentsListItem);

  // comments container
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");
  commentsListItem.append(commentsContainer);

  // comments avatar section with img, name and id number
  const commentsProfile = document.createElement("div");
  commentsProfile.classList.add("comments__profile");
  commentsContainer.appendChild(commentsProfile);

  const commentsAvatar = document.createElement("img");
  commentsAvatar.src = "../images/Pokemon-images/1.png";

  const commentsName = document.createElement("p");
  commentsName.classList.add("comments__name");
  commentsName.textContent = sender;

  const commentsId = document.createElement("p");
  commentsId.classList.add("comments__id");
  commentsId.textContent = `#${commentsNr}`;

  commentsProfile.append(commentsAvatar, commentsName, commentsId);

  // comments content section
  const commentsContent = document.createElement("div");
  commentsContent.classList.add("comments__content");
  commentsContainer.appendChild(commentsContent);

  // link
  const commentsLink = document.createElement("a");
  const textNode = document.createTextNode(
    `Replying to ${commentsName.textContent} ${commentsId.textContent}`
  );
  commentsLink.appendChild(textNode);
  commentsLink.href = `#${commentsNr}`;
  commentsLink.classList.add("comments__link");
  commentsContent.appendChild(commentsLink);

  // Laat de link zien in de reply comment en maakt de replycontainer weer onzichtbaar.

  if (reply) {
    commentsLink.classList.add("show-link");
    replyContainer.classList.remove("show");
    reply = false;
  }

  // Paragraph
  const commentsParagraph = document.createElement("p");
  commentsParagraph.classList.add("comments__paragraph");
  commentsParagraph.textContent = comment;
  commentsContent.appendChild(commentsParagraph);

  const commentsReplyBtn = document.createElement("button");
  commentsReplyBtn.classList.add("comments__reply-btn");
  commentsReplyBtn.textContent = "Reply";
  commentsContainer.appendChild(commentsReplyBtn);

  ///////////////////////////////////
  // Event handler op reply button //
  ///////////////////////////////////

  commentsContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".comments__reply-btn");
    if (!clicked) return;

    replyContainer.classList.add("show");
    replyInformation.textContent = `Replying to ${commentsName.textContent} ${commentsId.textContent}`;

    reply = true;
    return reply;
  });

  // code voor de het verbergen van de replycontainer
  closeBtn.addEventListener("click", () => {
    replyContainer.classList.remove("show");
  });
});

// voeg onzichtbare link toe naar comment nadat er op reply is geklikt

/* <a href="`#${commentsNr}`">
  `Replying to ${commentsName.textContent} ${commentsId.textContent}`
</a>; */

// const html = `
// <div class="comments__container">
//   <div class="comments__profile">
//     <img class="comments__avatar" src="../images/Pokemon-images/1.png" alt="commenter avatar"/>
//     <p class="comments__commenter">${sender}</p>
//     <p class="comments__number" id="${commentsNr}">#${commentsNr}</p>
//   </div>
//   <div class="comments__content">
//     <p>${comment}</p>
//   </div>
//   <button class="comments__reply-btn">Reply</button>
// </div>
// `;

// commentDiv.insertAdjacentHTML("afterbegin", html);

// const commentsContainer = document.querySelector(".comments__container");
// const commenter = document.querySelector(".comments__commenter");
// const commentsNumber = document.querySelector(".comments__number");

// add link to content which scrolls to specific comment using the specific ${commentId} as anchor

/* <a href="#${commentId}">link</a>; */
