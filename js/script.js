async function get_visitor_count() {
  console.log('Calling API to get visitor count');
  const response = await fetch('https://64xw7np7gjiywzieq4td5477640abwzg.lambda-url.ap-south-1.on.aws/');
  console.log(response)
  if (response.ok) {
    const visitor_count = await response.json(); //extract JSON from the http response
    console.log(visitor_count)
    console.log('Got API response');
    console.log("display_visitor_count");
    document.getElementById("visits").innerHTML = 'This site has been visited <span>' + visitor_count + '</span> times';
  }
  else {
    console.log('Error in getting visitor count')
  }
}