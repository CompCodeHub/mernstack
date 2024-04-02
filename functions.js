session = "Mern stack";

// 1) Named function - function with return type
function somefunc() {
  session = "Node js";
  console.log(this.session);
}

// 2) Function expression - function is assigned to a variable
var someFunc = function () {
  session = "React js";
  console.log(this.session);
};

// 3) IIFE - Executes only once and immediately
(function () {
  session = "Angular js";
  console.log(this.session);
})();
