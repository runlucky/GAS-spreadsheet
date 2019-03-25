function setContent(content) {
  SitesApp.getPageByUrl(getUrl())
          .setHtmlContent(content);
}
