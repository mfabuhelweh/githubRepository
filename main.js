let theInput = document.querySelector(".get-repos input");
let theButton = document.querySelector(".get-button");
let reopsData = document.querySelector(".show-data");

theButton.onclick = function () {
  getRepos();
};

function getRepos() {
  if (theInput.value == "") {
    reopsData.innerHTML = "<span>Please Write Github UserName.</span>";
  } else {
    fetch("https://api.github.com/users/" + theInput.value + "/repos")
      .then((res) => res.json())
      .then((data) => {
        reopsData.innerHTML = "";

        data.forEach((repo) => {
          let maineDiv = document.createElement("div");
          let repoName = document.createTextNode("           "+ repo.name+"          ");
          maineDiv.appendChild(repoName);
          let url = document.createElement("a");
          let repoURL = document.createTextNode("Visite");
          //  url.setAttribute("href", repo.html_url);
          url.href = `https://github.com/${theInput.value}/${repo.name}`;
          url.target = "blank";
          url.appendChild(repoURL);
          maineDiv.appendChild(url);

          let  StarsSpan=document.createElement("span");
          let  countStars=document.createTextNode("Stars "+repo.stargazers_count+"")
            StarsSpan.appendChild(countStars);
            maineDiv.appendChild(StarsSpan);

maineDiv.className="repo-box";
          reopsData.appendChild(maineDiv);
        });
      });
  }
}
