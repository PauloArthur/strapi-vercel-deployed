module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      // deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      // apiToken: "<vercel-api-token>",
      // appFilter: "your-app-name-on-vercel",
      // teamFilter: "your-team-id-on-vercel",
      // roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});