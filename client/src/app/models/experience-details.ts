import { Student } from '../models/student';

export class ExperienceDetails {
    id: number
    roll_no : string
    is_current_job: boolean = false
    start_date: Date = null
    end_date: Date =  null
    job_title: string = ''
    company_name: string = ''
    job_location_city: string = ''
    description: string = ''
    proof_document: any = null
    is_verfied: string = 'False'
    student : Student
}
