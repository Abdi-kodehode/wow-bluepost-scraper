// const fetchData = document.querySelector(".fetchData")
// const displayFeed = document.querySelector(".displayFeed")


// const getBluePost = async () => {
//     try {
//         const url = 'http://localhost:3500/'
//         const response = await fetch(url)
//         const data     = await response.json()
//         console.log(data)

//         data.forEach(post => {
//             const postItem = `
//                 <div>
//                     <h3>${post.subject}</h3
//                     <p>${post.blue_link_post}</p>
//                     <p>${post.author}</p>
//                     <p>${post.date}</p>
//                 </div>`
//             displayFeed.insertAdjacentHTML("beforeend", postItem)
//         });


//     } catch ( err ) {
//         console.error( err.message );
//     }
// }

// fetchData.addEventListener("click", getBluePost)
// getBluePost();

const fetchData = document.querySelector(".fetchData")
const displayFeed = document.querySelector(".displayFeed")

fetchData.addEventListener("click", () => {
    fetch("http://localhost:3500/")
        .then(response => {return response.json()})
        .then(data => {
            data.forEach(post => {
                const postItem = `
                    <div>
                        <h3>${post.subject}</h3
                        <p>By ${post.author}</p>
                        <p>${post.date}</p>
                    </div>`
                displayFeed.insertAdjacentHTML("beforeend", postItem)
            });
        })
        .catch ( err => console.log( err ))
   
})