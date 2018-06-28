//on page load, dynamically add pictures depending on the travel destination selected
//dynamically create div rows with picture info depending on how many pictures exist

var images = {

    Stockholm: ['./images/sweden/1.png', './images/sweden/2.png', './images/sweden/3.png', './images/sweden/1.png', './images/sweden/2.png', './images/sweden/3.png'],
    NewYork: ['./images/new_york/1.png'],
    Paris: [],
    Chicago: [],
    SanDiego: [],


}

//this is repetitive, try a loop
document.getElementById('NewYork').addEventListener('click', addDivRows.bind(this, 'NewYork'), true);
document.getElementById('Stockholm').addEventListener('click', addDivRows.bind(this, 'Stockholm'), true);
document.getElementById('Paris').addEventListener('click', addDivRows.bind(this, 'Paris'), true);
document.getElementById('Chicago').addEventListener('click', addDivRows.bind(this, 'Chicago'), true);
document.getElementById('SanDiego').addEventListener('click', addDivRows.bind(this, 'SanDiego'), true);


Array.from(document.getElementsByClassName('location')).forEach(tag => {

    tag.addEventListener('click', function() {document.getElementById('about').style.position = 'relative';}, true);
})

function addDivRows(location) {

    $('.imageBox').remove();

    var rowsRequired = Math.floor(images[location].length / 4);
    var individualImageBoxes = images[location].length % 4;
    var container = document.getElementById('container');

    var i =0;
    for (i =0; i < rowsRequired; i++) {
        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        for (j=0; j < 4; j++) {

            if (i < images[location].length) {
                var box = document.createElement('img');
                box.setAttribute('class', 'col-md-3 imageBox');
                //set a tags
                box.setAttribute('href', '#');
                box.setAttribute('src', images[location][i]);
                // box.style.backgroundImage = `url(${images[location][i]})`;
                box.style.opacity = '0';
                divNode.appendChild(box);


                i++;
            }

        }


    }



    if (individualImageBoxes > 0) {

        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        for (i = images[location].length - individualImageBoxes; i < images[location].length; i++){

            var box = document.createElement('img');
            box.setAttribute('class', 'col-md-3 imageBox');
            box.setAttribute('href', '#');
            box.setAttribute('src', images[location][i]);
            box.style.opacity = '0';
            divNode.appendChild(box);
        }

    }

    var imageBoxes = Array.from(document.getElementsByClassName('imageBox'));


    for (let i=0; i < imageBoxes.length; i++) {
        setTimeout(function () {$(imageBoxes[i]).fadeTo('slow', .9)}, i* 110)

    }

    imageBoxes.forEach(box => {
        box.addEventListener('click', function() {
        $('.try').remove();

        // modal.style.display = "block";
        $(modal).fadeIn('fast');

        var box1 = document.createElement('img');
        box1.setAttribute('class', 'try');
        console.log(box.style);
        box1.style.maxWidth = '100%';
        box1.setAttribute('src', box.src);
        document.getElementById("modal_content").appendChild(box1);


        var box2 = document.createElement('p');
        box2.setAttribute('id', 'texting');
        box2.setAttribute('class', 'try text-center');


        box2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor tincidunt massa at ullamcorper. Ut eget ante vel sapien ultrices consequat eget id urna. Mauris congue fermentum est, eget auctor est sodales eu. Etiam dapibus porta augue ac varius. Curabitur at purus vel enim mollis sodales. Aliquam malesuada nunc non orci auctor, in tincidunt mi lacinia. Vestibulum eget tincidunt turpis, at vulputate ipsum. Fusce vel venenatis lorem, at suscipit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
        document.getElementById("modal_content").appendChild(box2);

    }, true)})


    //hover animation + fade
    Array.from(document.getElementsByClassName('imageBox')).forEach(imageBox =>  {
        imageBox.addEventListener('mouseover', function() {$(this).fadeTo("fast", 1.0);}, true);
        imageBox.addEventListener('mouseout', function() {$(this).fadeTo("fast", 0.9);}, true);
    
    });

}


// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        $(modal).fadeOut('fast');
    }
}



