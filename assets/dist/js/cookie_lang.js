
// Check if cookie not initialised, we put en as defaut cookie (when first connection on website)
if (typeof $.cookie("lang") === 'undefined'){
    //myVariable is undefined
    console.log("Cookie Undefined");
    document.cookie = "lang="+"en";
    location.reload();
}
  // set html attribut with language
  document.documentElement.setAttribute("lang", $.cookie("lang"));
  // Set language
  const changeLang = (languageCode) => {
    //set cookie language
    document.cookie = "lang="+languageCode;
    //reload to take into account the new langage in the cookie
    location.reload();
  };
