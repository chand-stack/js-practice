function commentLoad(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => allComments(data))
}

function allComments(comments){
  const commentContainer = document.getElementById('comment-container')
  for(const comment of comments){
    console.log(comment)
    const commentDiv = document.createElement('div')
    commentDiv.classList.add('body')
    commentDiv.innerHTML=`
    <h1>id: ${comment.id}</h1>
    <p>Name: ${comment.name}</p>
    <p>Email: ${comment.email}</p>
    <p>${comment.body}</p>
    `
    commentContainer.appendChild(commentDiv)
  }

}


commentLoad()