const app = document.getElementById('root') //displaying the data on the front end using DOM

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container) //append the container div to root

var request = new XMLHttpRequest() //creating the built-in javascript object to make http requests.
request.open('GET', 'https://www.scorebat.com/video-api/v1/', true) //open a new connection with open method and retrieve the resource by http GET method.  
request.onload = function () { //completing the request and accessing inside onload function
    // Begin accessing JSON data here
    var data = JSON.parse(this.response) //parsing the response and create a variable data containing JSON as array of objects
    if (request.status >= 200 && request.status < 400) { //to show the error in case wrong URL is used or broken url.
        data.forEach(sports => { //creating a 
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h2')
            h1.textContent = sports.title
            h1.style.textAlign = 'center';
            //      h1.style.marginRight = 'auto';

            //            document.style.marginLeft


            const h2 = document.createElement('div')
            h2.innerHTML = sports.embed

            h2.style.boxShadow = '5px 5px 5px #ff7100';
            h2.style.marginTop = '20px';
            h2.style.marginBottom = '15px';

            container.appendChild(card)   //append cards to container element
            card.appendChild(h1)   //append heading to card
            card.appendChild(h2)   //append videos to card
            //            card.appendChild(p)

        })

    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `It's not working!`
        app.appendChild(errorMessage)
    }
};


request.send();
