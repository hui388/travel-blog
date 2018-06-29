var images = {

    Stockholm: ['./images/sweden/1.png', './images/sweden/2.png', './images/sweden/3.png', './images/sweden/1.png', './images/sweden/2.png', './images/sweden/3.png'],
    NewYork: ['./images/new_york/1.png'],
    Paris: [],
    Chicago: [],
    SanDiego: [],

}

//add event listeners for each location link
for (var key in images) {

    document.getElementById(key).addEventListener('click', addDivRows.bind(this, key), true);
}

Array.from(document.getElementsByClassName('location')).forEach(tag => {

    tag.addEventListener('click', function () {
        document.getElementById('about').style.position = 'relative';
    }, true);

})

var modal = document.getElementById('modal');


function addDivRows(location) {
    //remove already loaded images from different location
    $('.imageBox').remove();

    //determine how many rows of images are necessary. There are 4 images per row
    var rowsRequired = Math.floor(images[location].length / 4);

    //determine how many images we have 'left over' that do not make a full row of images
    var individualImageBoxes = images[location].length % 4;

    var container = document.getElementById('container');

    //to determine we're going through the array of images
    var imageListIndex = 0;

    for (i = 0; i < rowsRequired; i++) {

        //create row for images
        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        //create the image 'boxes'
        for (j = 0; j < 4; j++) {

            if (i < images[location].length) {
                var box = document.createElement('img');
                box.setAttribute('class', 'col-md-3 imageBox');
                box.setAttribute('href', '#');
                box.setAttribute('src', images[location][imageListIndex]);
                box.style.opacity = '0';
                box.style.cursor = 'pointer';

                divNode.appendChild(box);

                //make sure we're going sequentially through the images
                imageListIndex++;
            }
        }
    }

    //creating images for non-full rows
    if (individualImageBoxes > 0) {

        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        for (i = images[location].length - individualImageBoxes; i < images[location].length; i++) {

            var box = document.createElement('img');
            box.setAttribute('class', 'col-md-3 imageBox');
            box.setAttribute('href', '#');
            box.setAttribute('src', images[location][i]);
            box.style.opacity = '0';
            box.style.cursor = 'pointer';

            divNode.appendChild(box);
        }

    }

    //select all images currently visible
    var imageBoxes = Array.from(document.getElementsByClassName('imageBox'));

    //nice sequential fade in effect for each image :D
    for (let i = 0; i < imageBoxes.length; i++) {
        setTimeout(function () {
            $(imageBoxes[i]).fadeTo('slow', .9)
        }, i * 110)

    }

    //create a modal for each image clicked. This will display a larger image along with a description
    imageBoxes.forEach(box => {
        box.addEventListener('click', function () {

        //remove modal content of previously clicked image
        $('.modalElement').remove();

        //nice fade in effect whoooosh
        $(modal).fadeIn('fast');

        var modalImage = document.createElement('img');
        modalImage.setAttribute('class', 'modalElement');
        console.log(box.style);
        modalImage.style.maxWidth = '100%';
        modalImage.setAttribute('src', box.src);
        document.getElementById("modal_content").appendChild(modalImage);


        var modalText = document.createElement('p');
        modalText.setAttribute('id', 'texting');
        modalText.setAttribute('class', 'modalElement text-center');


        modalText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor tincidunt massa at ullamcorper. Ut eget ante vel sapien ultrices consequat eget id urna. Mauris congue fermentum est, eget auctor est sodales eu. Etiam dapibus porta augue ac varius. Curabitur at purus vel enim mollis sodales. Aliquam malesuada nunc non orci auctor, in tincidunt mi lacinia. Vestibulum eget tincidunt turpis, at vulputate ipsum. Fusce vel venenatis lorem, at suscipit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
        document.getElementById("modal_content").appendChild(modalText);

    }, true)
})


    //hover animation + fade
    Array.from(document.getElementsByClassName('imageBox')).forEach(imageBox => {
        imageBox.addEventListener('mouseover', function () {
            $(this).fadeTo("fast", 1.0);
        }, true);
        imageBox.addEventListener('mouseout', function () {
            $(this).fadeTo("fast", 0.9);
        }, true);

    });

}

window.onclick = function (event) {
    if (event.target == modal) {
        $(modal).fadeOut('fast');
    }
}



