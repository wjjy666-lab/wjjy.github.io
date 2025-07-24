$(document).ready(function () {
  // 强制设置语言为英语
  localStorage.setItem("lang", "en");

  // 只使用英语导航数据
  const navbar_data = {
    title: enNavbarData.title, // 直接使用英语标题
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: enNavbarData.Home, // 直接使用英语文本
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title: enNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.research ? true : false,
        title: enNavbarData.Research,
        url: "/research.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: enNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: enNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});