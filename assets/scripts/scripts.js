var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Layout direction
  document.getElementById("content_wrapper").classList.add("ltr_wrapper");

  // ---------- Remove language toggle completely (optional cleanup)
  // If your HTML still has elements with IDs "languageIcon" and "languageText",
  // you can hide them like this:
  const langIcon = document.getElementById("languageIcon");
  const langText = document.getElementById("languageText");
  if (langIcon) langIcon.style.display = "none";
  if (langText) langText.style.display = "none";

  // ---------- Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: !!globalData.email,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.whatsapp,
        active: !!globalData.whatsapp,
        img: "../assets/images/icons/whatsapp.png",
      },
      {
        name: globalData.twitter,
        active: !!globalData.twitter,
        img: "../assets/images/icons/twitter.png",
      },
      {
        name: globalData.linkedin,
        active: !!globalData.linkedin,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: !!globalData.github,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: !!globalData.resume,
        url: "/",
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    const home = enHomePageData;

    document.getElementById("page_title").innerText = home.name;
    document.getElementById("home_image").src = home_data.image || "";
    document.getElementById("home_name").innerText = home.name;
    document.getElementById("home_job_title").innerText = home.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) => `
          <li>
            <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /></a>
          </li>`
      )
      .join("");
    document.getElementById("home_title").innerText = home.home_title;
    document.getElementById("home_content").innerHTML = home.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // TODO: Apply same logic to other pages (e.g. publicationsData, researchData, etc.) if needed.
});
