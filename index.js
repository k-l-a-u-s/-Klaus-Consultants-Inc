/*


// const input = document.getElementById('comment-form');
// function addingEventListener() {
//     input.addEventListener("submit",addingEventListener)
// }

// function addingEventListener() {
//     const input = document.getElementById('comment-form');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);

// }

// function addingEventListener(){
//     const post =document.getElementsById("input")
//     function post(){
//         post('submit')
//     }

//     input.addEventListener('post',submitted)
// }

function renderTrainRow(train){
    console.log(train)
    let row =document.createElement('tr');
    row.innerHTML=`
    <td>${train.train_num}</td>
    <td>${train.name}</td>
    <td>${train.data.arriveTime}</td>
    <td>${train.data.departTime}</td>
    <td>${train.train_from}</td>
    <td>${train.train_to}</td>
    `;
    document.querySelector('.table').appendChild(row)
}

var counter = 0;
const likesCounter = document.querySelector("#like-count");
const likesButton = document.querySelector("#like-button");
likesButton.addEventListener("click", function () {
    counter += 1;
    likesCounter.innerHTML = counter + " likes";
});



function getAllTrains(){const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e1f2dbc0d7mshd0d7051c04779b7p1b61bbjsnec1444b0cac3',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: '{"search":"Rajdhani"}'
};

fetch('https://trains.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        response.forEach(train => renderTrainRow(train));
        console.log(response)
    })
	.catch(err => console.error(err));
}

function initialize(){
    getAllTrains()
}
initialize();
*/