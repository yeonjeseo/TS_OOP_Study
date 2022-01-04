{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Page와 PageInfo를 묶어주는 역할을 함
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
