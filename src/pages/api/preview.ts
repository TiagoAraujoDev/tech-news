import { redirectToPreviewURL, setPreviewData } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../../prismicio";

const enablePreview = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ req });

  setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
};

export default enablePreview;
