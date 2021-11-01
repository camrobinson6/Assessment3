const restaurant = document.querySelector("#restaurant");

function foodJoint() {
const foodSpots = ["Mama's Oyster House", "Papa's Grill", "Lasyone's Meat Pie Kitchen", "Merci Beaucoup", "Crawfish Hole", "The Comissary"];

const randomRest = foodSpots[Math.floor(Math.random() * foodSpots.length)];
    alert(`I recommend: ${randomRest} !!!!`);
}

restaurant.addEventListener('click', foodJoint);


