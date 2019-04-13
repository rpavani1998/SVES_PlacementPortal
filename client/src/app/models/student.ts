import { EducationDetails } from './education-details';
import { ExperienceDetails } from './experience-details';
import { Achievement } from './achievement';

export class Student {
    roll_no: string
    first_name: string 
    last_name: string
    branch: string
    dob: string 
    backlogs: string
    aadhar_no: string
    education_details: Array<EducationDetails>
    experience_details: Array<ExperienceDetails>
    achievements: Array<Achievement>
    id_proof: any
    is_verfied: string = 'False'
}
