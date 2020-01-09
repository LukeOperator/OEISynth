var d = new Dict ("primes");

inlets = 1
outlets = 2


function printdata () {
	data = d.get("body")
	data = JSON.parse(data)
	data =  JSON.stringify(data)
  outlet(0, "{ \"requested_information\" :" + data + "}")
}
