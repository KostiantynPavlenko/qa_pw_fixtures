import { test as base } from "@playwright/test";
import { CreateArticlePage } from "../../src/ui/pages/article/CreateArticlePage";
import { ViewArticlePage } from "../../src/ui/pages/article/ViewArticlePage";
import { EditArticlePage } from "../../src/ui/pages/article/EditArticlePage";

export const test = base.extend<{
  createArticlePage: CreateArticlePage,
  viewArticlePage: ViewArticlePage,
  editArticlePage: EditArticlePage,
}>({
  createArticlePage: async ({page}, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  viewArticlePage: async ({page}, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },
  editArticlePage: async ({page}, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },
});