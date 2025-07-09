import { test as baseTest } from "@playwright/test";
import { actions } from "../pages/actions.js";

export const test = baseTest.extend({
    actions: async ({ page, context }, use) => {
        await use(new actions(page, context));
    },
})