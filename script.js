const apiKey = '0d4f92fe58ba4783b2be03b780d69ef3'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('news-container');

async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.status === 'ok') {
            const articles = data.articles;
            articles.forEach(article => {
                createNewsCard(article);
                console.log(article);
            });
        } else {
            newsContainer.innerHTML = 'Failed to fetch news.';
        }
    } catch (error) {
        console.error(error);
    }
}

function createNewsCard(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    articleElement.innerHTML = `
        <img src=${article.urlToImage} alt="" class="newsImage" />
        <h2>${article.title}</h2>
        <p>${article.description ? article.description : "There's No Description"}</p>
        <a href="${article.url}" target="_blank" class="button">Read more</a>
    `;

    newsContainer.appendChild(articleElement);
}

getNews();
