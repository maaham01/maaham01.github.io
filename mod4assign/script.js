var id=new Array();
id[0]="Yaakov";
id[1]="John";
id[2]="Jen";
id[3]="Jason";
id[4]="Paul";
id[5]="Frank";
id[6]="Larry";
id[7]="Paula";
id[8]="Laura";
id[9]="Jim";

for (var i = 0; i < id.length; i++) {
	if(id[i].charAt(0)==='J'|| id[i].charAt(0)==='j'){
        console.log("Good Bye "+ id[i])
	}
	else{
		console.log("Hello "+ id[i])
	}

}