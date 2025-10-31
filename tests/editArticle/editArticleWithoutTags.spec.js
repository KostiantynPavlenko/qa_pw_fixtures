import { test } from "../_fixtures/fixtures";
import { HomePage } from "../../src/ui/pages/HomePage";
import { CreateArticlePage } from "../../src/ui/pages/article/CreateArticlePage";
import { ViewArticlePage } from "../../src/ui/pages/article/ViewArticlePage";
import { signUpUser } from "../../src/ui/actions/auth/signUpUser";
import { generateNewUserData } from "../../src/common/testData/generateNewUserData";
import { generateNewArticleData } from "../../src/common/testData/generateNewArticleData";
import { createNewArticle } from "../../src/ui/actions/article/createNewArticle";

test.beforeEach(async ({ page, user, articleWithoutTags, homePage, createArticlePage, viewArticlePage }) => {
  await signUpUser(page, user);
  await homePage.clickNewArticleLink();
  await createNewArticle(createArticlePage, viewArticlePage, articleWithoutTags);
});
test('Add the tag for the existing article without tags', async ({createArticlePage, viewArticlePage, articleWithTwoTags }) => {
  await viewArticlePage.clickEditArticle();
  
  await createArticlePage.addArticleTags(articleWithTwoTags.tags);
  await createArticlePage.clickUpdateArticleButton();

  await viewArticlePage.clickEditArticle();
  await createArticlePage.assertTagsListContainsTags(articleWithTwoTags.tags);
});