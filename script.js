let form = document.getElementById("search-form")

form.addEventListener("submit", getCurrentImageOfTheDay)

function getCurrentImageOfTheDay(e){
    e.preventDefault()
    let date = document.getElementById("search-input").value
    // console.log(date)
   

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
    .then((response)=>response.json())
    .then(data=>{
        console.log(data)
        document.getElementById("image").src = data.url
        document.getElementById("heading").innerHTML = data.title
        document.getElementById("content").innerHTML = data.explanation

       getImageOfTheDay(date)
    })
}

let ul = document.getElementById("search-history")
function getImageOfTheDay(date){
          
            let li = document.createElement("li")
            let anchor = document.createElement("a")
            anchor.className = "link"
            anchor.href = "#"
            anchor.innerHTML = date
            ul.append(li)
            li.append(anchor)
            
}

// --------------------------------
// let check = Array.from(ul.querySelectorAll("a")).forEach((data)=>{
//     data.addEventListener("click",display)

// });
// function display(e){
//     e.preventDefault();
//     let newDate = e.target.innerHTML;
//     console.log(newDate)

//     fetch(`https://api.nasa.gov/planetary/apod?date=${newDate}&hd=true&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
//     .then((response)=>response.json())
//     .then(data=>{
//         console.log(data)
//         document.getElementById("image").src = data.url
//         document.getElementById("heading").innerHTML = data.title
//         document.getElementById("content").innerHTML = data.explanation

//     })
// }
// -----------------------------------