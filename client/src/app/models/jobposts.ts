import { Company } from './company_';
import { JobProcess } from './jobprocess';
import { JobType } from './jobtype';
import { JobPost } from './job-post';
import { JobPostActivity } from './job-post-activity';

export class JobPosts {
    id : number;
    job_type: number;
    job_profile: string;
    job_description : string;
    job_location : string;
    last_date_for_application : Date;
    salary_lpa : number;
    drive_location : string;
    ppt_talk : Date;
    is_active : number;
    company_name: string;
    company_id : number;
    profile_description: string;
    company_website_url : string;
    company_image : File;
    degree : string;
    overall_aggregate : string;
    backlogs : number;
    inter_aggregate : string;
    tenth_aggregate : string;
    company : Company;
    jobprocesses : JobProcess[];
    jobtype : JobType;
    jobpost : JobPost
    job_Post_actiivty : JobPostActivity
}
