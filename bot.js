const needle = require('needle');
const this_token = ('35e2d4fda49f8b2696fe5f7e8436ca7833b2e1e28d92ca53232e5a393a21cbe1255fee648c64540fb466b');
const messages = ["ЫЫы", "Приятного аппетита", "АаАААААаАААААаааААААААААА---- пчхи!!!"];
const prikrep_media = ("");
const group_for_get_users = ("73260851");

var str = prikrep_media;
var n = str.lastIndexOf('/');
var result_media = str.substring(n + 1);

setInterval(function() {

  function randomInteger(min, max) {
    var rand_offset = min - 0.5 + Math.random() * (max - min + 1)
    rand_offset = Math.round(rand_offset);
	var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=groups.getMembers&group_id="+group_for_get_users+"&fields=bdate,sex,online,can_write_private_message&offset="+rand_offset+"&count=50&v=5.67&access_token="+this_token);
	needle.get(url, function(err, resp){
	  if (!err && resp.statusCode == 200)
		var re = (resp.body['response']);
		var items = (re.items);
  //console.log(items[0].id + ' - отправил сообщение');
  		//console.log(items[0])
  		
var i = 0;


for (var i = 0; i < 50; i++) {
	//console.log(items[i])
if ( items[i].online == 1 && items[i].sex == 2 && items[i].bdate < "12.12.2000"){
	console.log(items[i])
	mesend(items[i].id)
}
}

	function mesend(id){

		function newrand(len) {
		    var radid = "";
		    var symbols = "0123456789";
			    for (var i = 0; i < len; i++){
			        radid += symbols.charAt(Math.floor(Math.random() * symbols.length));     
			    }
			    gogo(radid)
		}

		newrand(32)
		function gogo(radid){

			var rand = messages[Math.floor(Math.random() * messages.length)];
			var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=messages.send&user_id="+id+"&random_id="+radid+"&message="+rand+"&v=5.95&access_token="+this_token);
			needle.get(url, function(err, resp){
			  	if (!err && resp.statusCode == 200);
			 		console.log(id + " --------id");
			})
		} 
	}
})
}
var roffset = ( randomInteger(500, 5000));
}, 3000);









//98af498159b7f454201334cbfb8215a5ec421882160739d9b6e5d1c315a45a3f403700334e21fd1ff0ced