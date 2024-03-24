// --------------------------------1--------------------------------
// --------------------------------2--------------------------------

// function createComment(author, content) {
//   const newComment = {};

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log('Hello');
//   },
// };

// --------------------------------3--------------------------------

// function createComment(author, content) {
//   const newComment = Object.create(commentStore);

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log('Hello');
//   },
// };

// --------------------------------4--------------------------------

// function createComment(author, content) {
//   const newComment = Object.create(commentStore);

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log(`${this.content} Author: ${this.author}`);
//   },
// };

// --------------------------------5--------------------------------

// function createComment(author, content) {
//   const newComment = Object.create(commentStore);

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log(`${this.content} Author: ${this.author}`);
//   },
// };

// const replyStore = {
//   logParentId() {
//     console.log(`Parent comment ID: ${this.commentId}`);
//   },
// };

// --------------------------------6--------------------------------

// function createComment(author, content) {
//   const newComment = Object.create(commentStore);

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log(`${this.content} Author: ${this.author}`);
//   },
// };

// function makeReply(author, content, commentId) {
//   const newReply = createComment(author, content);

//   Object.setPrototypeOf(newReply, replyStore);
//   newReply.commentId = commentId;

//   return newReply;
// }

// const replyStore = {
//   logParentId() {
//     console.log(`Parent comment ID: ${this.commentId}`);
//   },
// };

// --------------------------------7--------------------------------

// function createComment(author, content) {
//   const newComment = Object.create(commentStore);

//   newComment.author = author;
//   newComment.content = content;

//   return newComment;
// }

// const commentStore = {
//   log() {
//     console.log(`${this.content} Author: ${this.author}`);
//   },
// };

// function makeReply(author, content, commentId) {
//   const newReply = createComment(author, content);

//   Object.setPrototypeOf(newReply, replyStore);
//   newReply.commentId = commentId;

//   return newReply;
// }

// const replyStore = {
//   logParentId() {
//     console.log(`Parent comment ID: ${this.commentId}`);
//   },
// };

// Object.setPrototypeOf(replyStore, commentStore);

// --------------------------------8--------------------------------

// function createComment(author, content) {
//   this.author = author;
//   this.content = content;
// }

// createComment.prototype.log = function () {
//   console.log(`${this.content} Author: ${this.author}`);
// };

// function makeReply(author, content, commentId) {
//   createComment.call(this, author, content);
//   this.commentId = commentId;
// }

// makeReply.prototype.logParentId = function () {
//   console.log(`Parent comment ID: ${this.commentId}`);
// };

// Object.setPrototypeOf(makeReply.prototype, createComment.prototype);

// const comment = new createComment('John', ' lorem impsum sripsum');
// comment.log();
// const reply = new makeReply('Jack', 'Lol what that even mean?', '123232452435');

// console.log(reply);
// reply.logParentId();
// reply.log();

// --------------------------------9--------------------------------

// class createComment {
//   constructor(author, content) {
//     this.author = author;
//     this.content = content;
//   }

//   log() {
//     console.log(`${this.content} Author: ${this.author}`);
//   }
// }

// class makeReply extends createComment {
//   constructor(author, content, commentId) {
//     super(author, content);
//     this.commentId = commentId;
//   }

//   logParentId() {
//     console.log(`Parent comment ID: ${this.commentId}`);
//   }
// }
