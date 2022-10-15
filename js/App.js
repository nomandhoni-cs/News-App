function loadInitialNews() {
  fetch("https://openapi.programming-hero.com/api/news/category/08")
    .then((res) => res.json())
    .then((n) => {
      document.querySelector(".catagory").innerText = "All News";
      document.querySelector(".post-count").innerText = n.data.length;
      news = n.data.slice(0, 10);
      const newsContainer = document.querySelector(".news-container");
      for (item of news) {
        const element = item;
        let newsItem = document.createElement("div");
        newsItem.classList.add("post");
        console.log(element.title);
        // Check date null or not
        if (element.author.published_date !== null) {
          date = element.author.published_date;
        } else {
          date = "Jan 10, 2022 ";
        }
        // Check view count null or not
        if (element.total_view !== null) {
          viewCount = element.total_view;
        } else {
          viewCount = 234;
        }
        // Check author name null or not
        if (element.author.name !== null && element.author.name !== "system") {
          authorName = element.author.name;
        } else {
          element.author.name = "Jimmy Dane";
        }
        newsItem.innerHTML = `
                  <div class="row">
                    <div class="col-xl-3">
                      <div class="post-image">
                        <img
                        src="${element.thumbnail_url}"
                        alt=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-9">
                      <h3>${element.title}</h3>
                      <p>${element.details.slice(0, 500)}...</p>
                      <div class="post-info">
                        <div class="row">
                          <div class="col-xl-3">
                            <div class="author-info d-flex">
                            <div class="author-image">
                                <img
                                  src="${element.author.img}"
                                  alt=""
                                />
                              </div>
                              <div class="author-name">
                                <p>${authorName.slice(0, 15)}</p>
                                <p class="post-date">${date}</p>
                              </div>
                            </div>
                            </div>
                          <div class="col-xl-3">
                            <div class="viwer-count">
                              <img src="images/eye.png" alt="" /><span class="count"
                                >${viewCount}</span
                              >
                            </div>
                          </div>
                          <div class="col-xl-3">
                            <img src="images/review.png" alt="" class="review" />
                          </div>
                          <div class="col-xl-3">
                            <a href="#" class="post-link"
                              ><img src="images/arrow.png" alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>`;
        newsContainer.appendChild(newsItem);
      }
      if (n.data.length > 10) {
        document.querySelector(".load-more").style.display = "block";
      } else {
        document.querySelector(".load-more").style.display = "none";
      }
    });
}

// Click To Load Function
function clickToLoad(id, catagory) {
  document.querySelector(".news-container").innerHTML = "";
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((n) => {
      document.querySelector(".catagory").innerText = catagory;
      document.querySelector(".post-count").innerText = n.data.length;
      news = n.data.slice(0, 10);
      const newsContainer = document.querySelector(".news-container");
      for (item of news) {
        const element = item;
        let newsItem = document.createElement("div");
        newsItem.classList.add("post");
        console.log(element.title);
        // Check date null or not
        if (element.author.published_date !== null) {
          date = element.author.published_date;
        } else {
          date = "Jan 10, 2022 ";
        }
        // Check view count null or not
        if (element.total_view !== null) {
          viewCount = element.total_view;
        } else {
          viewCount = 234;
        }
        // Check author name null or not
        if (element.author.name !== null && element.author.name !== "system") {
          authorName = element.author.name;
        } else {
          element.author.name = "Jimmy Dane";
        }
        newsItem.innerHTML = `
                  <div class="row">
                    <div class="col-xl-3">
                      <div class="post-image">
                        <img
                          src="${element.thumbnail_url}"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-xl-9">
                      <h3>${element.title}</h3>
                      <p>${element.details.slice(0, 500)}...</p>
                      <div class="post-info">
                        <div class="row">
                        <div class="col-xl-3">
                        <div class="author-info d-flex">
                              <div class="author-image">
                              <img
                                  src="${element.author.img}"
                                  alt=""
                                />
                              </div>
                              <div class="author-name">
                                <p>${authorName.slice(0, 15)}</p>
                                <p class="post-date">${date}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-3">
                          <div class="viwer-count">
                          <img src="images/eye.png" alt="" /><span class="count"
                                >${viewCount}</span
                              >
                            </div>
                          </div>
                          <div class="col-xl-3">
                            <img src="images/review.png" alt="" class="review" />
                          </div>
                          <div class="col-xl-3">
                            <a href="#" class="post-link"
                              ><img src="images/arrow.png" alt=""
                            /></a>
                          </div>
                        </div>
                        </div>
                    </div>
                  </div>`;
        newsContainer.appendChild(newsItem);
        if (n.data.length > 10) {
          document.querySelector(".load-more").style.display = "block";
        } else {
          document.querySelector(".load-more").style.display = "none";
        }
      }
    });
}
loadInitialNews();
