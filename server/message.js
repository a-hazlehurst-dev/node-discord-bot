module.exports = {
    
    message: function (msg) {
        if(msg.content === "hello"){
            msg.channel.send("hello, " + msg.author);
        }
    }

};
    
