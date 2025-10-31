export async function createNewArticle(createArticlePage, viewArticlePage , article) {
  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  if(article.tags && article.tags.length !== 0) {
    await createArticlePage.addArticleTags(article.tags);
  }
  await createArticlePage.clickPublishArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(article.title);
  await viewArticlePage.assertArticleTextIsVisible(article.text);
}