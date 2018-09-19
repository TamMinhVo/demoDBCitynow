document.getElementById("form").addEventListener("click", function(){
    var json = JSON.stringify({
        id: parseInt(this.typeId),
        subject: this.datatype,
        points: parseInt(this.points),
        user: "H. Pauwelyn"
    });
});