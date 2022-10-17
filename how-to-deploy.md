// from https://hrishikeshpathak.com/blog/svelte-gh-pages/

To build your svelte app, go to the svelte homepage. Start a new project by following the commands. In your terminal, run

npm init vite my-app --template svelte
cd my-app
npm install
npm run dev
Now you have a svelte app in the my-app directory. You can also give some other names to your project.

Open your browser and go to localhost:3000. There you can find your newly created svelte app.

Now create a Github repository. Let’s named your repository as my-app. Now upload your project to the newly created Github repo.

If you don’t know how to upload your project to the Github repository, then follow these commands.

git add .
git commit -m"First commit"
git branch -M main
git remote add origin https://www.github.com/<username>/<reponame>.git
git push -u origin main
In the above command replace <username> and <reponame> with your original username and repository name.

deploy it in Github pages
Before deploying our project, we have to install a dev-dependency called gh-pages in our project.

This gh-pages package takes our build directory. Then make a new remote branch called gh-pages in the remote GitHub repository. Then it pushes the build directory to the newly created remote gh-pages branch.

In your project root, run

npm install --save-dev gh-pages
Now open your vite.config.js file present in your project root. Add a new field called base and enter your repository name as a value with trailing /.

For example, if your repository name is my-app, then you should add base: "/my-app/" inside your vite config file. The example looks like this.

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-app/",
  plugins: [svelte()],
});
Now add a new script called deploy inside your package.json file for gh-pages package.

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npx gh-pages -d dist"
},
When you run the deploy script, gh-pages automatically take out dist/ directory and deploy it in Github pages.

Now after all this setup, building and deploying is become very easy. Go to your project root and simply run these two commands.

npm run build
npm run deploy
After some minutes, when the github build of your project is completed, just visit this https://<username>.github.io/<repository name> URL. Don’t forget to change the username and repository name to your personal Github username and repository.