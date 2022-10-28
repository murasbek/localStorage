let userList = ["muras", "munar","Akdan"];
let getUserList;
let nameListDom = document.querySelector("#nameList");



function Read() {
    nameListDom.innerHTML = "";
    getUserList = JSON.parse(localStorage.getItem("userList"));
    if(getUserList != null)  {
        if(getUserList.length === 0){
            nameListDom.innerHTML = "There are no any users!";
        }else{
            for (let i = 0; i < getUserList.length; i++) {
                nameListDom.innerHTML += `
                    <div class="user-item">
                            <p>
                                <i class="fas fa-user"></i>
                                <span>user :</span>${getUserList[i]}
                            </p>
                        <div class="button">
                                <button class="primary" onclick="Edit(${i})">
                                    <i class="fas fa-edit"></i>
                                    Edit
                                </button>
                                <button class="danger" onclick="Delete(${i})">
                                    <i class="fas fa-trash"></i>
                                    Delete
                                </button>
                        </div>
                    </div>      
                        `;
                
            }
        }
    }

}

function Create() {
    const storage = JSON.parse(localStorage.getItem("userList"));
    let inputText = document.querySelector("#name").value;

    if(inputText == "") {
        alert("Write a name");
    }else{
        if(storage === null) {
            userList.push(inputText);
            localStorage.setItem("userList", JSON.stringify(userList));
        }else{
            userList = JSON.parse(localStorage.getItem("userList"));
            userList.push(inputText);
            localStorage.setItem("userList", JSON.stringify(userList));
        }
    }


   
}


function Delete(item){
    let deleteUsers = JSON.parse(localStorage.getItem("userList"));
    deleteUsers.splice(item, 1);
    localStorage.setItem("userList", JSON.stringify(deleteUsers));
    Read();
}



function Edit(item){
    let editUsers = JSON.parse(localStorage.getItem("userList"));
    nameListDom.innerHTML = "";
    for (let i = 0; i < editUsers.length; i++) {
        if(i == item){
            nameListDom.innerHTML +=`
                <div class="user-item">
                   <div>
                        <p>
                            <i class="fas fa-user"></i>
                            <span>user :</span> ${editUsers[i]}
                        </p>
                        <input type="text" id="newName" placeholder="${editUsers[i]}"/>
                   </div>
                    <div class="button">
                    <button class="primary" onclick="Update(${i})">
                        <i class="fas fa-edit"></i>
                        Update
                    </button>
                    <button class="warning" onclick="Read()">
                        <i class="fas fa-trash"></i>
                        Cancel
                    </button>
                    </div>
                </div>
                    `
        }else{
            nameListDom.innerHTML += `
            <div class="user-item">
                    <p>
                        <i class="fas fa-user"></i>
                        <span>user :</span>${getUserList[i]}
                    </p>
                <div class="button">
                        <button class="primary" onclick="Edit(${i})">
                            <i class="fas fa-edit"></i>
                            Edit
                        </button>
                        <button class="danger" onclick="Delete(${i})">
                            <i class="fas fa-trash"></i>
                            Delete
                        </button>
                </div>
            </div>      
                `;
        }
        
    }
}


function Update(item){
    const updateUsers = JSON.parse(localStorage.getItem("userList"));
    updateUsers[item] = document.getElementById("newName").value;
    if(updateUsers[item] == "") {
        alert("Write a name!");
    }else{
        localStorage.setItem("userList", JSON.stringify(updateUsers));
        Read();
    }
}


document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
})



document.addEventListener("DOMContentLoaded", () => {
    Read;
});
