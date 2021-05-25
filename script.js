var likeCount = [0, 0, 0];
var postOneCounter = document.querySelector("#post1Counter");
var postTwoCounter = document.querySelector("#post2Counter");
var postThreeCounter = document.querySelector("#post3Counter");

function addLikes (elem) {
    if (elem.id == "button1")   {
        likeCount[0]++;
        postOneCounter.innerText = likeCount[0] + " like(s)";
    } else if (elem.id == "button2")    {
        likeCount[1]++;
        postTwoCounter.innerText = likeCount[1] + " like(s)";
    } else if (elem.id == "button3")    {
        likeCount[2]++;
        postThreeCounter.innerText = likeCount[2] + " like(s)";
    }
    console.log(elem.id);
}