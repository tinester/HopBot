var hopList = ["https://cdn.discordapp.com/attachments/297488526398849026/297488548335190018/image.jpg", 
"https://cdn.discordapp.com/attachments/297488526398849026/297488564738981888/image.gif", 
"https://cdn.discordapp.com/attachments/297488526398849026/297488577728872450/image.jpg", 
"https://cdn.discordapp.com/attachments/297488526398849026/297488592756932611/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297488605339975683/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297488675057696788/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297488691436191754/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297488708108550144/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297488728602050561/image.gif",
"https://cdn.discordapp.com/attachments/297488526398849026/297488942851424256/image.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297488960530153472/image.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297488987478556673/image.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297489010597822464/image.jpg",
"https://cdn.discordapp.com/attachments/297488526398849026/297588401086136320/15203300_10207604775892779_5854949985103994455_n.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297588745660530690/P4BzupWu.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297588792649449472/bunny-on-side.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297589307764375553/tumblr_on8u5aCptu1w0f0ywo1_540.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297589376018415626/tumblr_olfg1odhA61tovmb9o3_540.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297589528741281792/tumblr_ol9s2m9b2N1utahyao1_400.png",
"https://cdn.discordapp.com/attachments/297488526398849026/297589584836034560/tumblr_om1n12kjmN1rfaiw6o1_540.png",
"https://cdn.discordapp.com/attachments/297488526398849026/298319556852711435/14370369_10207040874075586_570292887256273807_n.png",
"https://cdn.discordapp.com/attachments/297501984548716544/298320388146855936/peter-cottontail.jpg",
"https://cdn.discordapp.com/attachments/297501984548716544/298321231898345472/rabbit.png",
"https://cdn.discordapp.com/attachments/297501984548716544/298321890349678593/d_va_logo_by_dekodere-da6q2on.png",
"https://cdn.discordapp.com/attachments/297501984548716544/298322026953965568/Cream_3.png",
"https://cdn.discordapp.com/attachments/297501984548716544/298322199494787082/Untitled.png",
"https://cdn.discordapp.com/attachments/297501984548716544/303704916730445825/latest.png",
"https://s-media-cache-ak0.pinimg.com/originals/f5/d7/84/f5d784aa1eabbde15ba5e2d90c3ba828.jpg",
"https://cdn.discordapp.com/attachments/294526315942641664/313892684651692032/tumblr_oq025ysrpx1t4v0dao2_400.gif",
"https://cdn.discordapp.com/attachments/294526315942641664/313893286702219264/16826279156_8c68282821_o.jpg",
"https://cdn.discordapp.com/attachments/294526315942641664/313893778656067584/tumblr_opfvcyQ46Q1ujktejo1_540.png",
"https://cdn.discordapp.com/attachments/294526315942641664/313894313908109313/tumblr_ooyfr5teeo1utahyao3_540.png",
"https://cdn.discordapp.com/attachments/294526315942641664/313894422855024640/tumblr_op6gxgNgGT1vxef1xo1_540.png",
"https://cdn.discordapp.com/attachments/294526315942641664/313895138105753631/tumblr_oq0njnYwtn1w1owhqo1_400.png",
"https://cdn.discordapp.com/attachments/294526315942641664/313925196417597440/tumblr_mq6wqbFn0U1su5or6o1_500.png"];
var Discord = require("discord.js");
const fs = require('fs');
var bot = new Discord.Client();
var hopMin = 0;

var hopMax = hopList.length;
var randomPos;
var file = "customPics.txt";

bot.on("message", msg => {
    // TODO: Fix prefix and make a truly random number generator
    

    // Set the prefix
    let prefix = "~";
    // Exit and stop if prefix not there
    if (!msg.content.startsWith(prefix)) return;
    // Checks if the one who posted the messsage is a bot
    if (msg.author.bot) return;

    if (msg.content.startsWith(prefix + "ping")) {
        msg.channel.sendMessage("pong!");
    }
    else if (msg.content.startsWith(prefix + "foo")) {
        msg.channel.sendMessage("bar!");
    }
    // sends a random bunny pic based on the hopList array at the
    // top of this program
    else if(msg.content.startsWith(prefix + "hop")){
        randomPos = Math.floor(Math.random() * (hopMax - hopMin)) + hopMin;
        msg.channel.sendMessage(hopList[randomPos]);
    }
    // Adds a custom image link to the customPics file
    else if(msg.content.startsWith(prefix + "random add")){
        var myfd = fs.openSync(file, 'a');

        var tmpArr = msg.content.split(' ');

        // Make sure the given message is the correct length
        if(tmpArr.length == 3){
            fs.appendFileSync(file, tmpArr[2]);
            // Adds a windows newline
            fs.appendFileSync(file, '\r\n');

            // For testing
            //msg.channel.sendMessage("The contents of the file is " + fs.readFileSync(file, 'utf8'));
            // Confirmation of added
            msg.channel.sendMessage(tmpArr[2] + " was successfully added! *successful hop*")

        }
        else{
            msg.channel.sendMessage("You need only enter a single URL after add. Type ~help for more information. *informative hop*" );
        }
        // For testing appendFileSync
        //fs.appendFileSync(file, "nonsense");

        fs.closeSync(myfd);
    }
    // Print a random watnot pic
    else if(msg.content.startsWith(prefix + "random")){   
        var fileContents;
        var imageArray;
        var counter = 0;

        var myfd = fs.openSync(file, 'r');

        fileContents = fs.readFileSync(file, 'utf8');

        /*msg.channel.sendMessage("test");
        msg.channel.sendMessage(fileContents);*/

        imageArray = fileContents.split('\n');

        // array length is 1 if customPics.txt is empty
        if(imageArray.length > 1){
            randomPos = Math.floor(Math.random() * imageArray.length);
            //console.log("imageArray.length is : " + imageArray.length);
            //console.log("random pos is : " + randomPos);
            msg.channel.sendMessage(imageArray[randomPos]);

            // testing imageArray
            /*while(counter < imageArray.length){
                console.log(imageArray[counter]);
                counter++;
            }*/
        }
        else{
            msg.channel.sendMessage("No images have been added yet! *nonexistent hop*")
        }
        fs.closeSync(myfd);
    }
    else if(msg.content.startsWith(prefix + "help")){
        msg.channel.sendMessage("BunnyBot currently has the following commands: \n~hop : posts a random bunny pic \n~random : posts a random pic that has been added to the random command \n~random add : adds a URL to a picture to the random command; used like \"~random add URLHERE\" \n*helpful hop*");
    }
    

})

bot.on('ready', () => {
    var botChannelSize = bot.channels.size;
    var botGuildSize = bot.guilds.size;
    var botUserSize = bot.users.size;

    console.log('Ready to serve in ' + botChannelSize + ' channels on ' + botGuildSize + ' servers, for a total of ' + botUserSize + ' users.');
});

bot.on("guildMemberAdd", (member) => {
    console.log('New User ' + member.user.username + ' has joined ' + member.guild.name);
    member.guild.defaultChannel.sendMessage(member.user.username + ' has joined this server!');
});

bot.login("MjU4MDYzNzg1NDE0MjMwMDE2.CzstVg.rdCa_W1rQWppuKCuWNYMkxDIrxU");
