import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();

const editionDrop = sdk.getEditionDrop(process.env.ADDRESS_1155);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bettor Gain Quest",
        description: "This NFT will give you access to BettorDAO!",
        image: readFileSync("scripts/assets/nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();