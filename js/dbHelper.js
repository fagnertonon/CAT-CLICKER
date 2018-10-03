class dbHelper {


    static get DATABASE_URL() {
        const port = 8000 // Change this to your server port
        // return `http://localhost:${port}/data/dbCats.json`;
        return `data/dbCats.json`;
    }

    /**
* Fetch all restaurants.
*/
    static fetchCats(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', dbHelper.DATABASE_URL);
        xhr.onload = () => {
            if (xhr.status === 200) { // Got a success response from server!
                const json = JSON.parse(xhr.responseText);
                const cats = json.cats;
                callback(null, cats);
            } else { // Oops!. Got an error from server.
                const error = (`Request failed. Returned status of ${xhr.status}`);
                callback(error, null);
            }
        };
        xhr.send();
    }
    static imageUrlForCat(cat) {
        return (`/img/${cat.img}`);
      }

}