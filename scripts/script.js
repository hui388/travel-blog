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

//this is repetitive code, maybe we can shorten this?

Array.from(document.getElementsByClassName('location')).forEach(tag => {

    tag.addEventListener('click', function() {document.getElementById('about').style.position = 'relative';}, true);
})

// document.getElementById('hi').addEventListener('click', function() {$(document.getElementById('hi')).animate({left: '50px'})}, true);

// $('#hi').click(function() { $('#hi').animate({top: '-250px'})});

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
                var box = document.createElement('a');
                box.setAttribute('class', 'col-md-3 imageBox');
                box.setAttribute('href', '#');
                box.style.backgroundImage = `url(${images[location][i]})`;
                box.style.opacity = '0';
                divNode.appendChild(box);

                // $(box).fadeTo('fast', 1)

                // setTimeout(() => {let ii = box; $(ii).fadeTo('fast', 1)}, 1000);

                i++;
            }

        }


    }



    if (individualImageBoxes > 0) {

        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        for (i = images[location].length - individualImageBoxes; i < images[location].length; i++){

            var box = document.createElement('a');
            box.setAttribute('class', 'col-md-3 imageBox');
            box.setAttribute('href', '#');
            box.style.backgroundImage = `url(${images[location][i]})`;
            box.style.opacity = '0';
            divNode.appendChild(box);
        }

    }

    var imageBoxes = Array.from(document.getElementsByClassName('imageBox'));


    for (let i=0; i < imageBoxes.length; i++) {
        setTimeout(function () {$(imageBoxes[i]).fadeTo('slow', 1)}, i* 110)

    }








    // divNode.appendChild(box);
    // box.style.opacity = '0';
    // return $.when($(box).fadeTo('fast', 1)).done(() => {
    //
    //     divNode.appendChild(box2);
    //     box2.style.opacity = '0';
    //     $(box2).fadeTo('fast', 1);
    //
    // });






    // var rowsRequired = Math.floor(images[location].length / 4);
    // var individualImageBoxes = images[location].length % 4
    //
    // var container = document.getElementById('container');
    // for ( i =0; i < rowsRequired; i++) {
    //     var divNode = document.createElement('div');
    //     divNode.innerHTML = '<div class="row"><a href="#" class="col-md-3 imageBox"></a><a href="#" class="col-md-3 imageBox"></a><a href="#" class="col-md-3 imageBox"></a><a href="#" class="col-md-3 imageBox"></a></div>'
    //         container.appendChild(divNode);
    //
    //     }
    //
    // if (individualImageBoxes > 0) {
    //
    //     var divNode = document.createElement('div');
    //     divNode.setAttribute('class', 'row');
    //
    //     for (i = 0; i < individualImageBoxes; i++){
    //
    //         divNode.innerHTML += '<a href="#" class="col-md-3 imageBox"></a>';
    //
    //     }
    //
    //     container.appendChild(divNode);
    //
    // }
    //
    //
    // var imageBoxes = document.getElementsByClassName('imageBox');
    //
    // var i = 0;
    //
    // Array.from(imageBoxes).forEach(imageBox => {
    //     if(i < images[location].length){
    //         imageBox.style.backgroundImage = `url(${images[location][i]})`;
    //         imageBox.style.backgroundPosition = 'center';
    //         imageBox.style.opacity = '.8';
    //
    //     imageBox.innerHTML = '<a href=""></a>'
    //         i++;
    //     }
    // })


    //hover animation + fade
    Array.from(document.getElementsByClassName('imageBox')).forEach(imageBox =>  {
        imageBox.addEventListener('mouseover', function() {$(this).fadeTo("fast", 1.0);}, true);
        imageBox.addEventListener('mouseout', function() {$(this).fadeTo("fast", 0.8);}, true);


});
//
//
//
}



// addDivRows();