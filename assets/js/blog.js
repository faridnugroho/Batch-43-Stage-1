let blogs = [];

function getData(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);

  let addBlog = {
    title,
    content,
    image,
    author: "Farid Nugroho",
    postedAt: new Date(),
  };

  blogs.push(addBlog);

  // console.log(blogs);
  showData();
}

function showData() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="">
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
          </div>
          <p>${blogs[i].content}</p>
          <div class="time">
            <p>${getDistanceTime(blogs[i].postedAt)}</p>
          </div>
        </div>
      </div>
    `;
  }
}

// manipulation date time
function getFullTime(time) {
  // declaration variable
  let years = time.getFullYear();
  let monthIndex = time.getMonth();
  let date = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${date} ${month[monthIndex]} ${years} ${hour}:${minute} WIB`;
}

function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost;

  let distanceDay = Math.floor(distance / (1000 * 60 * 60 * 24)); //day
  let distanceHours = Math.floor(distance / (1000 * 60 * 60)); //hours
  let distanceMinute = Math.floor(distance / (1000 * 60)); // minute
  let distanceSecond = Math.floor(distance / 1000); // second

  if (distanceDay > 0) {
    return `${distanceDay} Days Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinute > 0) {
    return `${distanceMinute} minutes Ago`;
  } else if (distanceSecond > 0) {
    return `${distanceSecond} seconds Ago`;
  }
}

setInterval(() => {
  showData();
}, 1000);
