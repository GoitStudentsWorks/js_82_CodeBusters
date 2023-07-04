import { getBooksByCategory } from "../api";

export function getBookcard(categories, titles, authors, images, ids) {
    
        let category = categories[0].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (let i = 0; i < 5; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                   
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[1].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (let i = 5; i < 10; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[2].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (let i = 10; i < 15; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[3].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (let i = 15; i < 20; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
}


export function seemore(cat, imagess, titless, authorss, idss) {
    let category = cat;
          getBooksByCategory(category)
              .then(response => {
                  const arr = response.data.map(info => info)
                  
              for (let i = 0; i < 15; i++) {
                  

                    imagess[i].src = arr[i].book_image
                    titless[i].textContent = arr[i].title
                    authorss[i].textContent = arr[i].author
                    idss[i].id = arr[i]._id

                }

            })
            .catch(error => {
                console.log(error);
            });

}