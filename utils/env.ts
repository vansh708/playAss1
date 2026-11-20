import dotenv from "dotenv";

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL!,
  assignment:process.env.ASSIGNMENT_TOKEN!,
  demoEmail:process.env.DEMO_EMAIL!,
  demoPass:process.env.DEMO_PASSWORD!
};
