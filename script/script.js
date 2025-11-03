function createtoaster() {
    return function(stre) {
        let toasterdiv = document.createElement("div");
        toasterdiv.textContent = stre;
        toasterdiv.className = "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transation-opticity duration-300";
        document.querySelector(".parent").appendChild(toasterdiv);
        
    }
};
let toaster = createtoaster( {
    postiionx: "right-4",
    postiiony: "top-4",
    theme: "dark",
});
toaster("This is a notification");