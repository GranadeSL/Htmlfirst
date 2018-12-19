function calculate() {
	var m1 = parseFloat(document.getElementsByClassName("m1")[0].value);
	var m2 = parseFloat(document.getElementsByClassName("m2")[0].value);
	var m3 = parseFloat(document.getElementsByClassName("m3")[0].value);
	var m1c = parseFloat(document.getElementsByClassName("m1c")[0].value);
	var m2c = parseFloat(document.getElementsByClassName("m2c")[0].value);
	var m3c = parseFloat(document.getElementsByClassName("m3c")[0].value);
	var mathcoef = m1c+m2c+m3c;
	var mathgrade = (m1*m1c+m2*m2c+m3*m3c)/(m1c+m2c+m3c);
	document.getElementById("mathanswer").innerHTML = mathgrade;  

	var w1 = parseFloat(document.getElementsByClassName("w1")[0].value);
	var w2 = parseFloat(document.getElementsByClassName("w2")[0].value);
	var w1c = parseFloat(document.getElementsByClassName("w1c")[0].value);
	var w2c = parseFloat(document.getElementsByClassName("w2c")[0].value);
	var wavescoef = w1c + w2c;
	var wavesgrade = (w1*w1c+w2*w2c)/(w1c+w2c);
	document.getElementById("wavesanswer").innerHTML = wavesgrade;  

	var mg1 = parseFloat(document.getElementsByClassName("mg1")[0].value);
	var mg2 = parseFloat(document.getElementsByClassName("mg2")[0].value);
	var mg1c = parseFloat(document.getElementsByClassName("mg1c")[0].value);
	var mg2c = parseFloat(document.getElementsByClassName("mg2c")[0].value);
	var managcoef = mg1c+mg2c;
	var managgrade = (mg1*mg1c+mg2*mg2c)/(mg1c+mg2c);
	document.getElementById("managanswer").innerHTML = managgrade;  

	var cst1 = parseFloat(document.getElementsByClassName("cst1")[0].value);
	var cst2 = parseFloat(document.getElementsByClassName("cst2")[0].value);
	var cst1c = parseFloat(document.getElementsByClassName("cst1c")[0].value);
	var cst2c = parseFloat(document.getElementsByClassName("cst2c")[0].value);
	var cstcoef = cst1c + cst2c;
	var constgrade = (cst1*cst1c+cst2*cst2c)/(cst1c+cst2c);
	document.getElementById("constanswer").innerHTML = constgrade;  

	var web1 = parseFloat(document.getElementsByClassName("web1")[0].value);
	var web2 = parseFloat(document.getElementsByClassName("web2")[0].value);
	var web3 = parseFloat(document.getElementsByClassName("web3")[0].value);
	var web1c = parseFloat(document.getElementsByClassName("web1c")[0].value);
	var web2c = parseFloat(document.getElementsByClassName("web2c")[0].value);
	var web3c = parseFloat(document.getElementsByClassName("web3c")[0].value);
	var webgrade = (web1*web1c+web2*web2c+web3*web3c)/(web1c+web2c+web3c);
	var webcoef = web1c + web2c+ web3c;
	document.getElementById("webanswer").innerHTML = webgrade;  


	var th1 = parseFloat(document.getElementsByClassName("th1")[0].value);
	var th2 = parseFloat(document.getElementsByClassName("th2")[0].value);
	var th1c = parseFloat(document.getElementsByClassName("th1c")[0].value);
	var th2c = parseFloat(document.getElementsByClassName("th2c")[0].value);
	var thermocoef = th1c + th2c;
	var thermograde = (th1*th1c+th2*th2c)/(th1c+th2c);
	document.getElementById("thermoanswer").innerHTML = thermograde;  

	var cr1 = parseFloat(document.getElementsByClassName("cr1")[0].value);
	var cr2 = parseFloat(document.getElementsByClassName("cr2")[0].value);
	var cr1c = parseFloat(document.getElementsByClassName("cr1c")[0].value);
	var cr2c = parseFloat(document.getElementsByClassName("cr2c")[0].value);
	var creativitycoef = cr1c + cr2c;
	var creativitygrade = (cr1*cr1c+cr2*cr2c)/(cr1c+cr2c);
	document.getElementById("creativityanswer").innerHTML = creativitygrade;  
	
	var chemcoef = thermocoef + creativitycoef;
	var chemgrade = (creativitygrade * ( cr1c + cr2c) + thermograde * (th1c + th2c ) ) / (cr1c + cr2c + th1c + th2c);
	document.getElementById("chemanswer").innerHTML = (creativitygrade * ( cr1c + cr2c) + thermograde * (th1c + th2c ) ) / (cr1c + cr2c + th1c + th2c); 

	var fr1 = parseFloat(document.getElementsByClassName("fr1")[0].value);
	var fr2 = parseFloat(document.getElementsByClassName("fr2")[0].value);
	var fr3 = parseFloat(document.getElementsByClassName("fr3")[0].value);
	var fr1c = parseFloat(document.getElementsByClassName("fr1c")[0].value);
	var fr2c = parseFloat(document.getElementsByClassName("fr2c")[0].value);
	var fr3c = parseFloat(document.getElementsByClassName("fr3c")[0].value);
	var frcoef = fr1c + fr2c + fr3c;
	var frgrade = (fr1*fr1c+fr2*fr2c+fr3*fr3c)/(fr1c+fr2c+fr3c);
	document.getElementById("franswer").innerHTML = frgrade;  

	var d1 = parseFloat(document.getElementsByClassName("d1")[0].value);
	var d1c = parseFloat(document.getElementsByClassName("d1c")[0].value);
	var distcoef = d1c;
	var distgrade = (d1*d1c)/(d1c);
	document.getElementById("distanswer").innerHTML = distgrade;  

	var oos1 = parseFloat(document.getElementsByClassName("oos1")[0].value);
	var oos2 = parseFloat(document.getElementsByClassName("oos2")[0].value);
	var oos1c = parseFloat(document.getElementsByClassName("oos1c")[0].value);
	var oos2c = parseFloat(document.getElementsByClassName("oos2c")[0].value);
	var ooscoef = oos1c + oos2c;
	var oosgrade = (oos1*oos1c+oos2*oos2c)/(oos1c+oos2c);
	document.getElementById("oosanswer").innerHTML = oosgrade;  
 	
	var chemengcoef = ooscoef + distcoef;
 	var chemenggrade = (oosgrade * ( oos1c + oos2c) + distgrade * (d1c ) ) / (oos1c + oos2c + d1c); 
	document.getElementById("chemenganswer").innerHTML = (oosgrade * ( oos1c + oos2c) + distgrade * (d1c ) ) / (oos1c + oos2c + d1c); 

	document.getElementById("total").innerHTML = (mathgrade*mathcoef + wavesgrade*wavescoef + webgrade*webcoef + chemenggrade*chemengcoef + frgrade*frcoef + chemgrade*chemcoef + constgrade*cstcoef + managgrade*managcoef)/(managcoef + mathcoef + webcoef + wavescoef + chemcoef + chemengcoef + cstcoef + frcoef);

	console.log(managcoef + mathcoef + webcoef + wavescoef + chemcoef + chemengcoef + cstcoef + frcoef);
}