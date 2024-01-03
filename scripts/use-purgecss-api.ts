import { PurgeCSS, ResultPurge } from "purgecss";

async function run() {
  const purgeCSSResult : ResultPurge[] = await new PurgeCSS().purge({
    content: ['./index.html'],
    css : ['./styles.css'],
  });

  console.log(purgeCSSResult);
}

run();
