// BUILD AN ARRAY OF CHANNELS THAT WE WANT TO FOLLOW
var followed = [arlee_b];

// QUERY URL
var twitchURL = "https://api.twitch.tv/kraken/channels";

for (let index = 0; index < followed.length; index++) {
    const element = array[index];
    var xmlhttp = new XMLHttpRequest(),
        url = twitchURL+followed[i];
    xmlhttp.onreadystatechange = function(res){
        console.log(res);
        if (xmlhttp.readyState == 4 && xmlhttp.status -- 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            $(".names").append(myArr.display_name); // it loads the channels like jquery .append function
        }
    }
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}
