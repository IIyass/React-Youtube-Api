
import Axios from 'axios';
const KEY = 'AIzaSyAErYYTxcQdH0IQnKDxQpQOicIEfWHvI7w';
export default Axios.create({

baseURL:'https://www.googleapis.com/youtube/v3',

params:{
    part:'snippet',
    maxResults:5,
    key:KEY
}

});