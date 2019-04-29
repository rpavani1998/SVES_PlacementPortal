import { JobPost } from './job-post'
import { JobProcess } from './jobprocess';

export class JobPostActivity {
    job_post_id: number;
    apply_date: string;
    job_details: JobPost
    jobprocesses : JobProcess[]
}