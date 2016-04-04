"use strict";

let famousPeople = [
  {
	 title: "Musician", name: "Elvis Presley", bio: "lived sang died", image: "http://ecx.images-amazon.com/images/I/41Yd38-SfuL._SY300_.jpg", 
    lifespan: {
    	birth: "1935",
    	death: "1977"
    }
},
  {
	 title: "Musician", name: "Elvis Presley", bio: "lived sang died", image: "",
    lifespan: {
    	birth: "1935",
    	death: "1977"
        }
    },
  {
	 title: "Musician", name: "Elvis Presley", bio: "lived sang died", image: "",
    lifespan: {
    	birth: "1935",
    	death: "1977"
        }
    },
  {
	 title: "Musician", name: "Elvis Presley", bio: "lived sang died", image: "",
    lifespan: {
    	birth: "1935",
    	death: "1977"
        }
    }
  ]

  let container = document.getElementById("container");
  let input = document.getElementById("input");
  let card = document.getElementsByClassName("card");

    for(let i = 0; i < famousPeople.length; i++) {
        let person = famousPeople[i];
    buildCard(person);
    }

    function buildCard(person) {
       container.innerHTML += `<person class="card"><header>${person.title} ${person.name}</header>
             <section> ${person.bio}<img src="${person.image}"></section>
               <footer> ${person.lifespan.birth}${person.lifespan.death}</footer></person>`
           }










    /*Create an array of objects that represents famous people (see structure below).
Create a text input in your DOM.
Beneath that, create a container, block element in your DOM.
Create a DOM element for each of the objects inside the container. Style your person elements however you like.
For every even numbered element, have a light yellow background.
For every odd numbered element, have a light blue background.
Each element's DOM structure should be as shown below.
When you click on one of the person elements, a dotted border should appear around it.
When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank */
