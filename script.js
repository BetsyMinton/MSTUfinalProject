function tableShapes() {
  document.getElementById("table").innerHTML =
    "For the table shown, all of the shapes are rectangular prisms.";
}

function treeShapes() {
  document.getElementById("tree").innerHTML =
    "For the tree shown, leaves and branches could be made up from a cone and a semicircle.  The trunk could be a cylinder.";
  document.getElementById("animateTree").style.display = "inline";
}

function showGif() {
  document.getElementById("treeAnimation").style.display = "block";
}

function hideGif() {
  document.getElementById("tree").innerHTML = "";
  document.getElementById("treeAnimation").style.display = "none";
  document.getElementById("animateTree").style.display = "none";
}


var modal = document.getElementById("shapeModal");

var popUpImages = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3226760/chimney.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3226760/building.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3226760/roof.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3226760/stairs.png"
];

function roofShape() {
  modal.style.display = "block";
  document.getElementById("modalText").innerHTML =
    "The roof and top part of the building combine together to form a triangular prism";
  document.getElementById("modalImage").src = popUpImages[2];
}

function buildingShape() {
  modal.style.display = "block";
  document.getElementById("modalText").innerHTML =
    "The main part of the building is a rectangular prism";
  document.getElementById("modalImage").src = popUpImages[1];
}

function chimneyShape() {
  modal.style.display = "block";
  document.getElementById("modalText").innerHTML =
    "The chimney is a rectangular prism.";
  document.getElementById("modalImage").src = popUpImages[0];
}

function stairsShape() {
  modal.style.display = "block";
  document.getElementById("modalText").innerHTML =
    "The main shape of the stairs is a triangular prism.";
  document.getElementById("modalImage").src = popUpImages[3];
}

function modalClose() {
  modal.style.display = "none";
}


const questions = [
	{
    question: "What solid shape can a book be made out of?",
    radioName: "question1",
		answers: [{
			a: 'cube',
			b: 'rectangular prism',
			c: 'sphere'
    }],
		correctAnswer: 'b'
	},
	{
		question: "What does the 'D' in 3D stand for?",
    radioName: "question2",
		answers: [{
			a: 'Directions',
			b: 'Digits',
			c: 'Dimentions'
		}],
		correctAnswer: 'c'
	},
  	{
		question: "What shapes can you use to create a pencil?",
		 radioName: "question3",
      answers: [{
			a: 'a cylinder and a cone',
			b: 'a cone and a hexagonal prism',
			c: 'either a or b'
		}],
		correctAnswer: 'c'
	}
];


function makeQuiz(){
  document.getElementById("quizContent").style.display = "block"; 
  document.getElementById("q1").innerHTML = questions[0].question;
  document.getElementById("1a1").innerHTML = questions[0].answers[0].a;
}
