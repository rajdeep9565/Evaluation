
async function news() {
    let res = await fetch("https://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=ca01bbf224de4a28995b2ab81eb472a8")
    let data = await res.json()
    console.log(data.articles);
    show(data.articles)
}
news();

var parent = document.getElementById("parent")

function show(news) {
    news.forEach(function (news) {
        let div = document.createElement("div");
        let div_img = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = news.title
        title.onclick = function () {
            localStorage.setItem("title", JSON.stringify(news.title))
            window.location.href = "news.html"
        }

        let img = document.createElement("img");
        img.src = news.urlToImage

        div_img.append(img)
        div.append(div_img,title)
        parent.append(div)
    })
}