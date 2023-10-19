const users = [{username : "User1", password : "User1", role: "user"},
            {username :'umkm', password: 'umkm', role: "umkm"}];

const roles = {
    role : "umkm",
    get getRole(){
        return this.role;
    },
    set setRole(theRole){
        this.role = theRole;
    }
};

function authLogin() {
    let username = document.getElementById("EmailUser").value;
    let password = document.getElementById("PasswordUser").value; 
    for (let i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
          roles.setRole = users[i].role;
          window.location.href = 'SudahLogin.html';
        }
      }
   alert('You are trying to break in!');
}

function authRole(umkm,user){
    if (roles.getRole == "umkm") {
        window.location.href = umkm;
    } else {
        window.location.href = user;
    }
}

document.getElementById('addImageLink').addEventListener('click', function (event) {
    event.preventDefault();
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; 
    fileInput.addEventListener('change', function () {
        var file = fileInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var newImage = document.createElement('img');
                newImage.src = e.target.result;
                document.querySelector('.image-container').appendChild(newImage);
            };
            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
});