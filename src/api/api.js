import * as axios from 'axios';

const API_KEY = 'AIzaSyDAZV5wpFAsImyTug9hKqS77HHt3MHRLhQ';

export const getBooks = (text, startIndex) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&inauthor:${text}&startIndex=${startIndex}&maxResults=20&key=${API_KEY}`)
        .then(data => data.data)
        .catch(error => console.log(error));
};

