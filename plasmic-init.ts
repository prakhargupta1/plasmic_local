import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import { Button as MuiButton, ButtonGroup as MuiButtonGroup, } from "@material-ui/core";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "uNxv2NFifzUHnvGHuxCCRo",
      token: "qrqemEo3KmyJzk3xU18jhggpUX1Juh729FhjqY3OHKMhZBzqlhbOvUvu9OFcdFXiB6PnDnxBIFZtDTUZ8cA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});


PLASMIC.registerComponent(MuiButton, {
  name: "MuiButton",
  props: {
    children: "slot",
    disabled: "boolean",
    color: {
      type: "choice",
      options: ["primary", "secondary"],
    },
    variant: {
      type: "choice",
      options: ["contained", "outlined", "text"],
    },
    href: "string",
  },
  importName: "Button",
});

PLASMIC.registerComponent(MuiButtonGroup, {
  name: "MuiButtonGroup",
  props: {
    color: {
      type: "choice",
      options: ["primary", "secondary"],
    },
    variant: {
      type: "choice",
      options: ["contained", "outlined", "text"],
    },
    children: "slot",
  },
  importName: "ButtonGroup",
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);