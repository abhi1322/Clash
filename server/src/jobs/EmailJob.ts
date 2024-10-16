import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/mail.js";

export const emailQueueName = "emailQueue";

// defining types for job

interface EmailJobDataType {
  to: string;
  subject: string;
  body: string;
}

export const emailQueue = new Queue(emailQueueName, {
  connection: redisConnection,
  defaultJobOptions: defaultQueueOptions,
});

// email worker
export const workerQueue = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data: EmailJobDataType = job.data;
    await sendEmail(data.to, data.subject, data.body);
  },
  {
    connection: redisConnection,
  }
);
