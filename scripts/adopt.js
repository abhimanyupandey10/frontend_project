$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 7000) + 1000;
    setTimeout(function() {
        $('#loader').addClass('active');
        $(window).scrollTop(0);
    }, randomNumber);
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.section').each(function(i) {
        var sectionTop = $(this).offset().top;
        if (sectionTop <= scrollDistance + windowHeight) {
            $(this).addClass('visible');
        }
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var documentHeight = $(document).height() - $(window).height();
    var scrollPercentage = (scrollDistance / documentHeight) * 100;
    $('#progressbar').css('width', scrollPercentage + '%');
});

var particles = $('.particles');
var particleCount = 100;

for (var i = 0; i < particleCount; i++) {
    var particle = $('<span></span>');
    particle.css({
        left: Math.random() * 100 + 'vw',
        top: Math.random() * 100 + 'vh',
        width: Math.random() * 3 + 'px',
        height: Math.random() * 3 + 'px',
        animationDuration: Math.random() * 2 + 2 + 's',
        animationDelay: Math.random() * 4 + 's'
    });
    particles.append(particle);
}

var stars = $('.star-background');
var starCount = 100;

for (var i = 0; i < starCount; i++) {
    var star = $('<span></span>');
    star.css({
        left: Math.random() * 100 + 'vw',
        top: Math.random() * 100 + 'vh',
        width: Math.random() * 2 + 'px',
        height: Math.random() * 2 + 'px',
        animationDuration: Math.random() * 2 + 2 + 's',
        animationDelay: Math.random() * 4 + 's'
    });
    stars.append(star);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    getCityName(latitude, longitude);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function getCityName(lat, lon) {
    $.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, function(data) {
        var city = data.address.city || data.address.town || data.address.village;
        showPets(city);
    });
}

function showPets(userCity) {
    var petPromises = [];
    for (var i = 0; i < 10; i++) {
        petPromises.push(fetchRandomDogImage());
    }
    Promise.all(petPromises)
        .then(petImages => {
            var pets = [];
            for (var i = 0; i < petImages.length; i++) {
                var pet = {
                    name: getRandomName(),
                    type: getRandomType(),
                    img: petImages[i],
                    desc: getRandomDescription(),
                    location: userCity,
                    status: getRandomStatus()
                };
                pets.push(pet);
            }
            displayPets(pets);
        })
        .catch(error => console.error('Error fetching pet images:', error));
}

function fetchRandomDogImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => data.message)
        .catch(error => console.error('Error fetching dog image:', error));
}

function getRandomName() {
    var names = [
        "Buddy", "Whiskers", "Fluffy", "Bella", "Shadow", "Max", "Chloe", "Daisy", "Rocky", "Luna", 
        "Oreo", "Mittens", "Cotton", "Charlie", "Lucy", "Milo", "Simba", "Leo", "Sophie", "Lola", 
        "Jack", "Lily", "Tiger", "Oliver", "Molly", "Oscar", "Cleo", "Gizmo", "Jasper", "Felix", 
        "Peanut", "Sasha", "Ziggy", "Ruby", "Cooper", "Rosie", "Sammy", "Muffin", "Coco", "Sunny"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomType() {
    var types = ["Dog"];
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomDescription() {
    var descriptions = [
        "Friendly and playful, loves to fetch and is great with kids.",
        "Calm and loving, enjoys sunny spots and quiet afternoons.",
        "Cuddly and cute, perfect for cozy cuddles.",
        "Energetic and loyal, loves to play and is very protective.",
        "Quiet and affectionate, enjoys being close to you and purring softly.",
        "Loyal and friendly, loves outdoor adventures and is very obedient.",
        "Elegant and serene, enjoys lounging and being pampered.",
        "Playful and curious, loves to hop around and explore.",
        "Strong and brave, perfect for active families and great with kids.",
        "Mysterious and independent, enjoys exploring and hunting.",
        "Sweet-natured and gentle, gets along well with everyone.",
        "Mischievous and clever, always finding new ways to entertain.",
        "Affectionate and cuddly, loves being held and snuggled.",
        "Adventurous and daring, thrives on excitement and new experiences.",
        "Graceful and dignified, with a regal presence.",
        "Silly and fun-loving, keeps the atmosphere light and cheerful.",
        "Reserved and observant, takes time to warm up but loyal once bonded.",
        "Curious and inquisitive, investigates everything with enthusiasm.",
        "Charming and charismatic, easily wins hearts with a wag of the tail.",
        "Gentle and patient, great with children and other pets.",
        "Athletic and agile, enjoys games and staying active.",
        "Easygoing and relaxed, adapts well to different environments.",
        "Intelligent and trainable, picks up tricks and commands quickly.",
        "Sociable and outgoing, makes friends wherever they go.",
        "Bold and fearless, approaches challenges with confidence.",
        "Sensitive and empathetic, understands and responds to emotions.",
        "Cheerful and optimistic, brightens the mood with a wagging tail.",
        "Determined and persistent, never gives up on a challenge.",
        "Eager and enthusiastic, always ready for a new adventure.",
        "Gentle-hearted and kind, cares deeply for their human companions.",
        "Independent and self-sufficient, thrives with a bit of autonomy.",
        "Affectionate and loving, forms strong bonds with their family.",
        "Resilient and tough, overcomes obstacles with grace.",
        "Carefree and playful, brings joy with their joyful antics.",
        "Alert and watchful, keeps a keen eye on their surroundings.",
        "Inquisitive and curious, explores the world with wonder.",
        "Patient and understanding, listens attentively to their human friends.",
        "Stoic and steady, remains calm and composed in any situation.",
        "Energetic and spirited, brings excitement to every day.",
        "Gentle and compassionate, comforts those in need.",
        "Daring and bold, faces challenges head-on.",
        "Graceful and elegant, moves with effortless grace."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function getRandomStatus() {
    var randomNumber = Math.random();
    if (randomNumber < 0.8) {
        return "available";
    } else {
        var numberOfUsers = Math.floor(Math.random() * 7) + 1;
        return `selected by ${numberOfUsers} users`;
    }
}

function displayPets(pets) {
    pets.forEach(function(pet) {
        $('#petsContainer').append(`
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">${pet.desc}</p>
                        <p class="card-text"><small class="text-muted">${pet.location}</small></p>
                        <p class="card-text"><small class="text-muted">${pet.status}</small></p>
                        <a href="#" class="btn btn-primary">Adopt</a>
                    </div>
                </div>
            </div>
        `);
    });
    $('#locationPrompt').hide();
    $('#petsContainer').removeClass('d-none');
}
