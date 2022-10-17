
  // set html attribut with language
  document.documentElement.setAttribute("lang", $.cookie("lang"));
  // Set language
  const changeLang = (languageCode) => {
    //set cookie language
    document.cookie = "lang="+languageCode;
    //reload to take into account the new langage in the cookie
    location.reload();

  };
