
const loadComment = () => {
    url = ('https://jsonplaceholder.typicode.com/comments')
    fetch(url)
        .then(res => res.json())
    .then(data=>displayComment (data.splice(480)))
}

const displayComment = (comments) => {
    const commentContaienr = document.getElementById('comment-container');
    comments.forEach(comment => {
        
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('list');
        commentDiv.innerHTML = `
       <div onclick="loadId(${comment.postId})">
       <a style="color:blue;"> ${comment.name}</a>
       <a style="color:blue;"> ${comment.postId}</a>


       <p>
       ${comment.body}
       </p></div>
        
        `
        commentContaienr.appendChild(commentDiv);

    })

}

const loadId = (postId  ) => {
    url = (`https://jsonplaceholder.typicode.com/posts/${postId}`)
    fetch(url)
    .then(res=>res.json())
    .then(date=>displayId(date))
}
const displayId = (ides) => {
    
    const idBox = document.getElementById('id');
   
        const idDiv = document.createElement('div');
        idDiv.innerHTML = `
        <p>${ides.id}
        </p>
       
        
        
        `
        idBox.appendChild(idDiv)



}
loadComment();