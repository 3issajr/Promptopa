import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const profilePrompt = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(profilePrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to Fetch User's Prompt", { status: 500 });
  }
};
