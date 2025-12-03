const reels = [
  {
    username: "travel_with_arya",
    likeCount: 12800,
    commentCount: 340,
    shareCount: 220,
    isLiked: false,
    isFollowed: true,
    caption: "Sunsets hit different when you're at peace 🌅✨",
    video: "./videos/vdo1.mp4",
  },
  {
    username: "coding_champ",
    likeCount: 5400,
    commentCount: 190,
    shareCount: 87,
    isLiked: true,
    isFollowed: false,
    caption: "When your code works on first try… rare moment 🤣🔥",
    video: "./videos/vdo2.mp4",
  },
  {
    username: "foodielane",
    likeCount: 22800,
    commentCount: 1300,
    shareCount: 430,
    isLiked: false,
    isFollowed: true,
    caption: "This chocolate lava cake is CRAZY good 🍫🤤",
    video: "./videos/vdo3.mp4",
  },
  {
    username: "fitwithmaya",
    likeCount: 9300,
    commentCount: 410,
    shareCount: 300,
    isLiked: true,
    isFollowed: true,
    caption: "5 min abs workout that actually burns 🔥",
    video: "./videos/vdo4.mp4",
  },
  {
    username: "petlover_sam",
    likeCount: 17800,
    commentCount: 780,
    shareCount: 500,
    isLiked: false,
    isFollowed: false,
    caption: "My dog after getting a haircut 😂🐶",
    video: "./videos/vdo5.mp4",
  },
  {
    username: "dailyhustle",
    likeCount: 4200,
    commentCount: 120,
    shareCount: 60,
    isLiked: false,
    isFollowed: true,
    caption: "Small progress is still progress. Keep going 💪",
    video: "./videos/vdo1.mp4",
  },
  {
    username: "fashion_arya",
    likeCount: 15400,
    commentCount: 600,
    shareCount: 290,
    isLiked: true,
    isFollowed: false,
    caption: "Outfit check? 🖤🔥",
    video: "./videos/vdo2.mp4",
  },
  {
    username: "beats_by_kavi",
    likeCount: 8700,
    commentCount: 240,
    shareCount: 180,
    isLiked: true,
    isFollowed: true,
    caption: "Made this beat in 10 minutes 🎧🎶",
    video: "./videos/vdo3.mp4",
  },
  {
    username: "wanderlust_rio",
    likeCount: 31000,
    commentCount: 1600,
    shareCount: 700,
    isLiked: false,
    isFollowed: false,
    caption: "Paris at night… pure magic ✨🗼",
    video: "./videos/vdo4.mp4",
  },
  {
    username: "craftyhands",
    likeCount: 6800,
    commentCount: 260,
    shareCount: 145,
    isLiked: true,
    isFollowed: true,
    caption: "DIY room decor anyone can make 🧵✨",
    video: "./videos/vdo5.mp4",
  },
];

let sum = 0;
reels.forEach((elem) => {
  sum =
    sum +
    ` <div class="reel">
            <video autoplay loop muted src=${elem.video}></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1514654306380-538bac0ed82c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button>${
                  elem.isFollowed === true ? "Unfollow" : "Follow"
                }</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon icon">${
                  elem.isLiked === true
                    ? '<i  class="ri-heart-fill love">'
                    : '<i class="ri-heart-line">'
                }</i></h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon">
                  <i class="ri-more-2-fill"></i>
                </h4>
              </div>
            </div>
          </div>`;
});

let allReels = document.querySelector(".allReels");
allReels.innerHTML = sum;
