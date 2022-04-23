import sdk from "./index.js";
import { readFileSync } from "fs";

console.log(` address: ${process.env.ADDRESS}`);
const editionDrop = sdk.getEditionDrop(process.env.ADDRESS);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Abstract art",
        description: "This NFT will give you access to NumeraiCloudDAO!",
        image: readFileSync("assets/a-revolta-a-revolta-das-bonecas-1916.jpg!PinterestSmall.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();