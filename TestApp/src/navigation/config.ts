import { RouteNames } from "./routeNames";

export const config = {
    screens: {
        [RouteNames.transacrionDetails]: {
        path: 'transaction/:id?',
        parse: {
          id: (id: String) => `${id}`,
        },
      },
    },
  };