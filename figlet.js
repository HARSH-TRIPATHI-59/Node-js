var figlet = require("figlet");

figlet("Hello!!", function (err, data) {
  if (err) {
    console.log("Something went wrong");
    console.dir(err);
    return;
  } else console.log(data);
});
