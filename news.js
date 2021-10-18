 // https://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=ca01bbf224de4a28995b2ab81eb472a8


 async function news() {
    let input = localStorage.getItem("title")
    console.log(input);

    let res = await fetch(`https://newsapi.org/v2/everything?qInTitle=${input}&apiKey=ca01bbf224de4a28995b2ab81eb472a8`)
    let data = await res.json()
    show(data.articles[0]);
}

news()

var parent = document.getElementById("parent");

function show(news) {
    console.log(news);

        let div = document.createElement("div");
        let div_img = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = "Title - " + news.title 
        let content = document.createElement("p");
        content.innerText = news.content
        let description = document.createElement("p");
        description.innerText = news.description
        let publishedAt = document.createElement("p");
        publishedAt.innerText = "At. " + news.publishedAt
        
        let author = document.createElement("p");
        author.innerText = news.author
        let img = document.createElement("img");
        img.src = news.urlToImage

        div_img.append(img)
        div.append(title,content,description,publishedAt,author)
        parent.append(div_img,div) 
}