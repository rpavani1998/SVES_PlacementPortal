import { Student } from './student';
import { User } from './user';

export class EducationDetails {
    id: number;
    roll_no : string;
    certificate_degree_name: string = '';
    major: string = '';
    institute_university_name: string = '';
    board: string = '';
    passing_year: number;
    percentage : number;
    cgpa : number;
    backlogs : number;
    tenth_aggregate : number;
    inter_aggregate : number;
    first_name : string;
    last_name: string; 
    branch : string;
    dob : Date;
    aadhar_no : string;
    pan_no : string;
    studentdata : Student;
    user : User;
    user_type_id : string = '';
    college_id: string = '';
    email: string = '';
    password: string = '';
    contact_number: string = '';
    sms_notification_active: boolean = true;
    email_notification_active: boolean = true;
    user_image: string = '';
    branch_id : string ;
}