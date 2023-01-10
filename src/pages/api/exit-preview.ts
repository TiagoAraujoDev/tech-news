import { exitPreview } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";

const exit = async (req: NextApiRequest, res: NextApiResponse) => {
  exitPreview({ req, res });
};

export default exit;
