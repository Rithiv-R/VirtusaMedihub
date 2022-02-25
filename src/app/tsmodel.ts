export interface Hospital{
    hosp_name:String;
    hosp_address:String;
    hosp_photo:String;
    tag:string;
    hosp_details:String;
    hosp_phone:String;
    hosp_mail:String;
    hosp_latitude:number;
    hosp_longitude:number;
    doctors:Array<string>;
}