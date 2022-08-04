document.querySelector("#new-blog").addEventListener("submit",e=>{
    e.preventDefault();
    const blogObj = {
        name:document.querySelector("#name").value,
        description:document.querySelector("#description").value,
    }
    console.log(blogObj)
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

