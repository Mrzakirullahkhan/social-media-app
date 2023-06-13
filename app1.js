const loginUser = JSON.parse(localStorage.getItem('loginUser'));
// console.log(loginUser);

if(!loginUser){
    window.location.href = `../index.html`;
}


const myProfile = document.querySelector('.myProfileIcon');
const profileDropdown = document.querySelector('.profileDropdown');

myProfile.addEventListener("click", () => {
    profileDropdown.classList.toggle('hidden');
})

// For Logout
const logOutBtn = document.querySelector('.logOut');
// console.log(logOutBtn);

logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('loginUser');
    window.location.href = './index.html';
})



const userName = document.querySelector('#username');
const userEmail = document.querySelector('#useremail');
const userDescription = document.querySelector('#userdetail');

userName.innerHTML = `${loginUser.firstName} ${loginUser.lastName}`;
userEmail.innerHTML = `${loginUser.fullEmail}`;

if(loginUser.description){
    userDescription.innerHTML = loginUser.description;
} else {
    userDescription.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum expedita at illo placeat ipsam.`
}


const userPosts = JSON.parse(localStorage.getItem('User-Posts')) || [];
const myPostArea = document.querySelector('.mypostarea');

userPosts.forEach((post) => {

    let myPost = document.createElement('div');
    myPost.setAttribute('class', 'post col-12');

    let postContent = `<div class="postUpparPart">
    <div class="myImage">
        <img src="admin.png" alt="" width="40px">
    </div>
    <div class="name-time">
        <p id="myName">${post.authorName}</p>
        <p>${post.postTime}</p>
    </div>
</div>

<div>
    <p class="discription">${post.postText}</p>
    <img src="flower.jpg" alt="" class="img-fluid">
</div>
<hr>

<div class="overview">

    <div class="like-section">
        <i class="fa-solid fa-thumbs-up"></i>
        <p class="like">like</p>
    </div>

    <div class="comment-cection">
        <i class="fa-regular fa-comment"></i>
        <p class="comment">comment</p>
    </div>
    <div class="share-section">
        <i class="fa-solid fa-share"></i>
        <p class="share">share</p>
    </div>
</div>`

    // console.log(post);
    
    myPost.innerHTML = postContent;
    myPostArea.prepend(myPost);
})




const createPost = () => {
    const postInput = document.querySelector('#input-text');

    if(!postInput.value){
        alert("Sorry! Your Post is empty"); 
    }
    else {

        const postData = {
            authorName: `${loginUser.firstName} ${loginUser.lastName}`,
            authorEmail: loginUser.emailAddress,
            postText: postInput.value,
            postTime: new Date().toLocaleTimeString(),
        };

        let post = document.createElement('div');
        post.setAttribute('class', 'col-md-5 col-lg-5 mt-3 postSectonArea ');

        let postContent = `<div class="postUpparPart">
                            <div class="myImage">
                                <img src="admin.png" alt="" width="40px">
                            </div>
                            <div class="name-time">
                                <p id="myName">${postData.authorName}</p>
                                <p>${postData.postTime}</p>
                            </div>
                        </div>
                        
                        <div>
                            <p class="discription">${postData.postText}</p>
                            <img src="flower.jpg" alt="" class="img-fluid">
                        </div>
                        <hr>

                        <div class="overview">

                            <div class="like-section">
                                <i class="fa-solid fa-thumbs-up"></i>
                                <p class="like">like</p>
                            </div>

                            <div class="comment-cection">
                                <i class="fa-regular fa-comment"></i>
                                <p class="comment">comment</p>
                            </div>
                            <div class="share-section">
                                <i class="fa-solid fa-share"></i>
                                <p class="share">share</p>
                            </div>
                        </div>`;

        post.innerHTML = postContent;
        myPostArea.prepend(post);

        userPosts.push(postData);
        localStorage.setItem('User-Posts', JSON.stringify(userPosts));
        postInput.value = '';
    }
}