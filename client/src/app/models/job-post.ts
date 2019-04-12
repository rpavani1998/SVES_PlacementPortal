import { Company } from './company';

export class JobPost {
    id : number;
    job_type: number;
    job_profile: string;
    job_description : string;
    job_location : string;
    last_date_for_application : Date;
    salary_lpa : number;
    is_active : number;
    drive_location : string;
    ppt_talk : Date;
    company_id : string;
    company : Company;
    degree:string;
    overall_aggregate : number
    backlogs: string
    inter_aggregate: number
    tenth_aggregate:number

}
