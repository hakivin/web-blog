/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}

function submit() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    let name = x.elements[0].value;
    let email = x.elements[1].value;
    var comment = x.elements[2].value;

    var passed = true;

    if (passed === true && name.length < 4) passed = 'Name require 4 character at minimum to input!';
    if (passed === true && comment.length < 6) passed = 'Comment require 6 character to input!';
    if (passed === true && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) passed = 'Please input a valid email!';

    if (passed === true) {
        for (i = 0; i < x.length ;i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML += text + "<hr>";
        document.getElementById("frm1").reset();
    } else {
        alert(passed); return false;
    }
  }
  
  var idleTime = 0;
        $(document).ready(function () {
            //Increment the idle time counter every sec.
            var idleInterval = setInterval(timerIncrement, 1000); // 1 sec
        
            //Zero the idle timer on mouse movement.
            $(this).mousemove(function (e) {
                idleTime = 0;
            });
            $(this).keydown(function (e) {
                idleTime = 0;
            });
        });

  function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 30) { // 30s
        window.alert("Hello there! Are you okay?");
        //window.location.reload();
    }
}
