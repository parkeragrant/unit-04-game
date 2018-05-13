// Define global variabes
// These are the 5 characters to select from and their attributes
// Each character has a name, attack points = ap, health points = hp, and counter attack point = cap set to zero
$( document ).ready(function() {

    
    var characters = {
        darthVader: {
            name: "Darth Vader",
            aP: 70,
            hP: 235,
            caP: 70,
            picture: "http://cdn.wallpapersafari.com/12/78/92VXpf.jpg",
        },
        lukeSkywalker: {
            name: "Luke Skywalker",
            aP: 40,
            hP: 220,
            caP: 40,
            picture: "http://www.next-stage.fr/wp-content/uploads/2015/10/22292366106_2a0cb12b07_z.jpg",
        },
        princessLeia: {
            name: "Princess Leia",
            aP: 4,
            hP: 400,
            caP: 4,
            picture: "https://vignette.wikia.nocookie.net/battlefront/images/3/39/Battlefront_Leia.jpg/revision/latest?cb=20151022170630",
        },
        hanSolo: {
            name: "Han Solo",
            aP: 50,
            hP: 175,
            caP: 50,
            picture: "https://vignette.wikia.nocookie.net/battlefront/images/7/7b/Star-wars-battlefront-reveals-emperor-palpatine-leia-and-has-solo-powers-494937-5.jpg/revision/latest?cb=20170722130006",
        },
        rey: {
            name: "Rey",
            aP: 60,
            hP: 200,
            caP: 60,
            picture: "https://vignette.wikia.nocookie.net/disney/images/4/46/Battlefront_II_-_Rey.png/revision/latest?cb=20170706151604",
        },
    }
    
    var userCharacter = {};
    
    var enemyCharacter = {};

    var choosingUserCharacter = true;

    var choosingUserEnemy = false;

    var fighting = false;

    var opponentsRemaining = 4;

    var defeatedOpponents = {};
    
    
    
    function startGame() {
    
    
        // Replacing the tub elements in HTML with updated image, name, and HP info
        document.getElementById("character-01").src = characters.darthVader.picture;
        document.getElementById("name-01").textContent = characters.darthVader.name;
        document.getElementById("health-points-01").innerHTML = ("Health:" + characters.darthVader.hP);
    
        document.getElementById("character-02").src = characters.lukeSkywalker.picture;
        document.getElementById("name-02").textContent = characters.lukeSkywalker.name;
        document.getElementById("health-points-02").innerHTML = ("Health:" + characters.lukeSkywalker.hP);
    
        document.getElementById("character-03").src = characters.princessLeia.picture;
        document.getElementById("name-03").textContent = characters.princessLeia.name;
        document.getElementById("health-points-03").innerHTML = ("Health:" + characters.princessLeia.hP);
    
        document.getElementById("character-04").src = characters.hanSolo.picture;
        document.getElementById("name-04").textContent = characters.hanSolo.name;
        document.getElementById("health-points-04").innerHTML = ("Health:" + characters.hanSolo.hP);
    
        document.getElementById("character-05").src = characters.rey.picture;
        document.getElementById("name-05").textContent = characters.rey.name;
        document.getElementById("health-points-05").innerHTML = ("Health:" + characters.rey.hP);
    
        
        // Testing
        // console.log(character.darthVader.picture);
    
    }
    startGame();
    
    function playerSelections(onclick) {
        
        // var elem = document.getElementById("character-01");
        // elem.onclick("character-01").remove;
        // elem.remove(onclick);
    
        
        $("#character-01").on("click", function() {

            if (choosingUserCharacter && !fighting) {

                userCharacter = Object.assign(characters.darthVader);
                    console.log(userCharacter);
        
                $("#selected-player-image").attr("src", characters.darthVader.picture);
                $("#selected-player-name").text(characters.darthVader.name);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);

                $("#character-01").remove();
                $("#name-01").remove();
                $("#health-points-01").remove();

                choosingUserCharacter = false;
                choosingUserEnemy = true;

                $("#main-instructions").text("CHOOSE YOUR OPPONENT!");

                
            } else if (choosingUserEnemy && !fighting) {

                enemyCharacter = Object.assign(characters.darthVader);
                    console.log(enemyCharacter);
        
                $("#selected-enemy-image").attr("src", characters.darthVader.picture);
                $("#selected-enemy-name").text(characters.darthVader.name);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                $("#character-01").remove();
                $("#name-01").remove();
                $("#health-points-01").remove();

                choosingUserEnemy = false;             
                fighting = true;
                
            }
    
        });

        $("#character-02").on("click", function() {

            if (choosingUserCharacter && !fighting) {

                userCharacter = Object.assign(characters.lukeSkywalker);
                    console.log(userCharacter);
        
                $("#selected-player-image").attr("src", characters.lukeSkywalker.picture);
                $("#selected-player-name").text(characters.lukeSkywalker.name);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);

                $("#character-02").remove();
                $("#name-02").remove();
                $("#health-points-02").remove();

                choosingUserCharacter = false;
                choosingUserEnemy = true;

                $("#main-instructions").text("CHOOSE YOUR OPPONENT!");

                
            } else if (choosingUserEnemy && !fighting) {

                enemyCharacter = Object.assign(characters.lukeSkywalker);
                    console.log(enemyCharacter);
        
                $("#selected-enemy-image").attr("src", characters.lukeSkywalker.picture);
                $("#selected-enemy-name").text(characters.lukeSkywalker.name);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                $("#character-02").remove();
                $("#name-02").remove();
                $("#health-points-02").remove();

                choosingUserEnemy = false;             
                fighting = true;
                
            }
    
        });
    
        
    
        $("#character-03").on("click", function() {

            if (choosingUserCharacter && !fighting) {

                userCharacter = Object.assign(characters.princessLeia);
                    console.log(userCharacter);
        
                $("#selected-player-image").attr("src", characters.princessLeia.picture);
                $("#selected-player-name").text(characters.princessLeia.name);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);

                $("#character-03").remove();
                $("#name-03").remove();
                $("#health-points-03").remove();

                choosingUserCharacter = false;
                choosingUserEnemy = true;

                $("#main-instructions").text("CHOOSE YOUR OPPONENT!");

                
            } else if (choosingUserEnemy && !fighting) {

                enemyCharacter = Object.assign(characters.princessLeia);
                    console.log(enemyCharacter);
        
                $("#selected-enemy-image").attr("src", characters.princessLeia.picture);
                $("#selected-enemy-name").text(characters.princessLeia.name);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                $("#character-03").remove();
                $("#name-03").remove();
                $("#health-points-03").remove();

                choosingUserEnemy = false;             
                fighting = true;
                
            }
    
        });
    
        $("#character-04").on("click", function() {

            if (choosingUserCharacter && !fighting) {

                userCharacter = Object.assign(characters.hanSolo);
                    console.log(userCharacter);
        
                $("#selected-player-image").attr("src", characters.hanSolo.picture);
                $("#selected-player-name").text(characters.hanSolo.name);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);

                $("#character-04").remove();
                $("#name-04").remove();
                $("#health-points-04").remove();

                choosingUserCharacter = false;
                choosingUserEnemy = true;

                $("#main-instructions").text("CHOOSE YOUR OPPONENT!");

                
            } else if (choosingUserEnemy && !fighting) {

                enemyCharacter = Object.assign(characters.hanSolo);
                    console.log(enemyCharacter);
        
                $("#selected-enemy-image").attr("src", characters.hanSolo.picture);
                $("#selected-enemy-name").text(characters.hanSolo.name);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                $("#character-04").remove();
                $("#name-04").remove();
                $("#health-points-04").remove();

                choosingUserEnemy = false;             
                fighting = true;
                
            }
    
        });
    
        $("#character-05").on("click", function() {

            if (choosingUserCharacter && !fighting) {

                userCharacter = Object.assign(characters.rey);
                    console.log(userCharacter);
        
                $("#selected-player-image").attr("src", characters.rey.picture);
                $("#selected-player-name").text(characters.rey.name);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);
                
                $("#character-05").remove();
                $("#name-05").remove();
                $("#health-points-05").remove();

                choosingUserCharacter = false;
                choosingUserEnemy = true;

                $("#main-instructions").text("CHOOSE YOUR OPPONENT!");

                
            } else if (choosingUserEnemy && !fighting) {

                enemyCharacter = Object.assign(characters.rey);
                    console.log(enemyCharacter);
        
                $("#selected-enemy-image").attr("src", characters.rey.picture);
                $("#selected-enemy-name").text(characters.rey.name);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                $("#character-05").remove();
                $("#name-05").remove();
                $("#health-points-05").remove();

                choosingUserEnemy = false;             
                fighting = true;
                
            }
    
        });
    
    }
    playerSelections(onclick);


    function fightBegin(onclick) {

        $("#attack-btn").on("click", function() {
            
            if (fighting) {

                enemyCharacter.hP = (enemyCharacter.hP - userCharacter.aP);
                $("#selected-enemy-health-points").text("Health:" + enemyCharacter.hP);

                userCharacter.aP = (userCharacter.aP + userCharacter.caP);

                userCharacter.hP = (userCharacter.hP - enemyCharacter.caP);
                $("#selected-player-health-points").text("Health:" + userCharacter.hP);

                if (userCharacter.hP <= 0) {
                    alert("you lose");
                } else if (enemyCharacter.hP <= 0) {
                    choosingUserEnemy = true;
                    fighting = false;

                    $("#main-instructions").text("CHOOSE YOUR NEXT OPPONENT!");
                    
                
                    // remove the image from the enemy spot
                    $("#selected-enemy-image").attr("src", "");
                    $("#selected-enemy-name").text("");
                    $("#selected-enemy-health-points").text("");

                    // add the image to the defeated spot
                    $("#defeated-enemies").prepend($('<img>',{id:"defeated-images", class:"img-responsive rounded", src:enemyCharacter.picture}));

                    // $("#defeated-image-01").attr("src", enemyCharacter.picture);
                    // $("#defeated-image-01").attr("src", enemyCharacter.picture);
                    // $("#defeated-name-01").text(enemyCharacter.name)

                    opponentsRemaining = (opponentsRemaining - 1)
                    console.log(opponentsRemaining);

                    enemyCharacter = {};
                }

            } else {
                // nothing
            }

            function gameComplete() {
                if (opponentsRemaining === 0) {
                    alert("You win the game!");
                }
            }
            gameComplete();

        })

    }
    fightBegin(onclick);



});    


// First character is clicked. The top element needs to change to "choose your enemy!"

// Remove the div

// When enemy is selected make it so you can't create new enemy. Make another variable called "choosing enemy" which toggles to true 

// Fight button will be contingent on fighting variable with if/else statements 

