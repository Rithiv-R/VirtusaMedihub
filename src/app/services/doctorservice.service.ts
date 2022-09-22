import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(public fs:AngularFirestore) { }

  finddoc(hosp:any)
  {
    var temp: any[] = []
    this.fs.collection("Hospitals").doc(hosp).get().toPromise().then((val)=>{
      var x = val?.get('doctors');
      var hosp_address=val?.get('address');
      var hosp_name=val?.get('name');
      var hosp_location=val?.get('tag');
      var hosp_mail= val?.get('mail'); 
      var hosp_photo=val?.get('photo');
      var hosp_phone=val?.get('phone');
      x.forEach((element: any) => {
        this.fs.collection('Doctors').doc(element).get().toPromise().then((doc)=>{
            var temp2  = {
              doc_regno:doc?.get('regno'),
              doc_name:doc?.get('name'),
              doc_qualification:doc?.get('qualification'),
              doc_experience:doc?.get('experience'),
              doc_photo: doc?.get('photo'),
              doc_overview:doc?.get('overview'),
              hosp_name:hosp_name,
              hosp_address:hosp_address,
              hosp_location:hosp_location,
              hosp_mail:hosp_mail,
              hosp_phone:hosp_phone,
              hosp_photo:hosp_photo,
          };
          temp.push(temp2);
        })
      });
    })
    return temp;
  }

  add_doc()
  {
    var x = [
        {
          doc_name: "Dr. Latha Lakshmi",
          doc_experience:  "Was an Assistant Professor for 3 years",
          doc_overview: "Dr. Latha, was an Assistant Professor at Christian Medical College and Hospital for 3 years, following which she has been a consultant at Indira Nursing Home. She is well experienced in the field of Obstetrics and Gynaecology and Laparoscopic and Hysteroscopic Surgeries.",
          doc_photo:"http://www.indirasuperspecialityhospital.com/jb-content/uploads/2021/03/dr-Latha.jpg",
          doc_qualification:  "D.G.O and MS",
          doc_regno: "65821",
          doc_address: "Lic Building Backside, Vellore",
          doc_email: "Latha.Lakshmi@icar.gov.in",
          doc_phone:"+91 99765 28798",
        },
        {
          doc_name: "Dr. PL.Saravanan",
          doc_experience:  "30 Years Experience Overall (10 has a specialist)",
          doc_overview: "Dr. PL Saravanan is a reputed Interventional Cardiologist in Chennai. His special interests are Interventional Cardiology, Cardiac Electrophysiology, Heart Failure, etc.",
          doc_photo:"https://imagesx.practo.com/providers/dr-pl-saravanan-cardiologist-chennai-c773ce68-1a8c-495c-bb1e-5ab8696a9e3d.jpg?i_type=t_100x100",
          doc_qualification:  "MBBS, MD, FRCP",
          doc_regno: "507502472",
          doc_address: "54, Katpadi Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006",
          doc_email: "plsaravanancardiologist@gmail.com",
          doc_phone:"91 96205 23513",
        },
        {
          doc_name: "Dr. Ashok Kumar M",
          doc_experience:  "13 Years Experience Overall (7 years as specialist)",
          doc_overview: "A passionate Surgeon, focusing on complete resolution of patient's ailments.",
          doc_photo:"https://imagesx.practo.com/providers/dr-ashok-kumar-m-spine-surgeon-ortho-chennai-7f7e48af-eae6-48a1-b1c8-a29a4efaa88e.jpg?i_type=t_100x100",
          doc_qualification:  " MS - Orthopaedics, MBBS, DNB - Orthopedics/Orthopedic Surgery Spine Surgeon (Ortho), Orthopedist",
          doc_regno: "90466",
          doc_address: "Sri Narayani Hospital & Research Centre Thirumalaikodi, Thirumalaikodi, Vellore, Tamil Nadu 632055",
          doc_email: "ashok.kumar@gmail.com",
          doc_phone:"044 24729 89354",
        },
        {
          doc_name: "Dr. George Joseph",
          doc_experience:  "5 years of experience",
          doc_overview: "George Joseph currently works at theCMC EYE HOSPITAL, Vellore. His current project is ' Improving accuracy of fenestrated endograft deployment in the aortic arch",
          doc_photo:"https://krishnahospital.in/wp-content/uploads/2020/03/3.jpg",
          doc_qualification:  "MD, DM (Card.). FCSI",
          doc_regno: "1315",
          doc_address: "S/2 Tulsi Mahal Navghar Cross Talav Road Bhayander ,Vellore,401105,India",
          doc_email: "george.joesph@gmail.com",
          doc_phone:"91+ 855 533 7822",
        },
        {
          doc_name: "Viji Samuel Thomson",
          doc_experience:  "3 years of experience ",
          doc_overview: "A professor of cardiology at CMC EYE HOSPITAL, Vellore, Tamil Nadu, India. Features in 1 video on Wondr Medical. Viji Samuel Thompson generally speaks on Fractional Flow Reserve",
          doc_photo:"https://themissionhospital.com/upload/doctor/t1572675823.jpg",
          doc_qualification:  "MD, DNB, DM (Card) FIC (Aus)",
          doc_regno: "5342",
          doc_address: "Kandarpada Bhakti Complex Link Rd Opp Hotel Chef Dahisar,Vellore,400068,India",
          doc_email: "viji.s.thomson@gmail.com",
          doc_phone:"91+ 935 535 7842",
        },
        {
          doc_name: "Sujith Thomas Chacko",
          doc_experience:  "5 years of experience ",
          doc_overview: "Dr Sujith Chacko is an Interventional Cardiologist and specialises in complex coronary and structural intervention",
          doc_photo:"https://windsorheart.com.au/wp-content/uploads/2021/07/Sujith-1.jpg",
          doc_qualification:  "MD, DM (Card), FRACP (Cardio)",
          doc_regno: "8743",
          doc_address: "32  C Nanddham Indl Estate Marol Maroshi Road Andheri,Vellore,400059,India",
          doc_email: "S.T.Chanko@gmail.com",
          doc_phone:"91+ 996 436 7742",
        },
        {
          doc_name: "Rabin Chacko",
          doc_experience:  "10 years of experience ",
          doc_overview: "Dr.Rabin trained in GDC, Mumbai where he did his BDS and MDS in maxillofacial surgery. He went on to do his fellowship in UK where he further trained in General Dentistry.",
          doc_photo:"https://shilohcmcorg.files.wordpress.com/2017/09/rabin-pic.jpg",
          doc_qualification:  "MDS, FDS RCPS",
          doc_regno: "9932",
          doc_address: "Ghantali Rd Nr Saibaba Mandir Thane,Vellore,400602,India",
          doc_email: "Rabin.Chacko@gmail.com",
          doc_phone:"91+ 923 726 6842",
        },
        {
          doc_name: "Santosh Koshy",
          doc_experience:  "7 years of experience ",
          doc_overview: "Dr. Santosh Koshy has been part Arun’s team as the Specialist Pediatrician and Neonatologist since its incorporation and is Founder and Consultant at Little Flower Hospital.",
          doc_photo:"https://imagesx.practo.com/providers/dr-santhosh-koshy-pediatrician-bangalore-f0e95459-8cd8-4efc-9bf9-67c48cc89614.jpg?i_type=t_100x100",
          doc_qualification:  "MDS",
          doc_regno: "210",
          doc_address: "Shop No-4 Karim Bldg 198 Yusuf Meharally Road Mandvi, Vellore,400003,India",
          doc_email: "Santosh.Koshy@gmail.com",
          doc_phone:"91+ 997 319 6887",
        },
        {
          doc_name: "Renu George",
          doc_experience:  "15 years of experience",
          doc_overview: "Dr. Renu E George is a Clinical Psychologist in Vellore and has an experience of 15 years in this field. Dr. Renu E George practices at Brain To Mind: Center For Psychological Assessment & Psychotherapy",
          doc_photo:"https://imagesx.practo.com/providers/dr-renu-e-george-clinical-psychologist-bangalore-901f3210-f853-48cf-bd38-a9b26fa1f065.jpg?i_type=t_100x100",
          doc_qualification:  "MD",
          doc_regno: "4536",
          doc_address: "37 rd Floor / Diamond Mansion Dr Viegas Street Kalbadevi,Vellore,400002,India",
          doc_email: "renu.george@gmail.com",
          doc_phone:"91+ 997 420 6975",
        },
        {
          doc_name: "Dr. Rajan Sundaresan",
          doc_experience:  "6 years of experience",
          doc_overview: "Consultant Head & Neck - Skull Base Surgeon at Chandran Hospital",
          doc_photo:"https://media-exp1.licdn.com/dms/image/C4E03AQF3ArdgM-BXcw/profile-displayphoto-shrink_200_200/0/1585374693718?e=1669248000&v=beta&t=8_fliCXGdaPKrzwWno0SA4ps-cNxXpgz971d-5N1Yz4",
          doc_qualification:  "DLO, MS",
          doc_regno: "3989",
          doc_address: "3 nd Flr Avanti Apts Senapati Bapat Marg Dadar ,Vellore,400028,India",
          doc_email: "Rajan.S@gmail.com",
          doc_phone:"91+ 927 420 3975",
        },
        {
          doc_name: "Dr. Sunil Chandy ",
          doc_experience:  "20 years of experience",
          doc_overview: "A Cardiologist by training he has been in of Chandran Hospital Vellore after his studentship and post-graduation",
          doc_photo:"data:image/jpeg;base64,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",
          doc_qualification:  "MD, DM, M.Phil, FRCP",
          doc_regno: "987",
          doc_address: "B-19adke Compound Surya Nagarnear Police Station Off Lbs Margvikhroli , Vellore,400086,India",
          doc_email: "Sunil.Chandy@gmail.com",
          doc_phone:"91+ 998 823 3125",
        },
        {
          doc_name: "Arun Paul S",
          doc_experience:  "5 years of experience",
          doc_overview: "Specialized in Oral and maxillofacial Surgery & Dentistry",
          doc_photo:"https://www.kimshealth.org/media/filer_public_thumbnails/filer_public/b3/46/b3466aa2-d0c7-4aef-bb4e-14861ea32309/dr-arun-sadasivan.png__253x285_q85_crop_subsampling-2.jpg",
          doc_qualification:  "MDS",
          doc_regno: "4543",
          doc_address: "1134 Dalamal Tower Nariman Point,Vellore,400021,India",
          doc_email: "Arun.paul@gmail.com",
          doc_phone:"91+ 918 824 0021",
        },
        {
          doc_name: "Ankan Gupta",
          doc_experience:  "10 years of experience",
          doc_overview: "Ankan Gupta specialises as Dermatologist, Trichologist, Pediatric Dermatologist.",
          doc_photo:"https://imagesx.practo.com/providers/dr-ankan-gupta-dermatologist-thiruvananthapuram-c7c6ef0c-ec49-49e5-a036-5128327c73ee.jpg?i_type=t_100x100",
          doc_qualification:  "MD DVL",
          doc_regno: "7732",
          doc_address: "37 a Keshav Bldg Hingwala Lane Near L.n.mehtas Classes Ghatkopar , Vellore,400089,India",
          doc_email: "Ankan.G@gmail.com",
          doc_phone:"91+ 994 769 2020",
        }
    ];
    x.forEach((val)=>{
      this.fs.collection('Doctors').doc(val.doc_regno).set({
          regno:val.doc_regno,
	        name:val.doc_name,
          qualification:val.doc_qualification,
          experience:val.doc_experience,
          photo:val.doc_photo,
          overview:val.doc_overview,
          address:val.doc_address,
          email:val.doc_email,
          phone:val.doc_phone,

    }).then((ele)=>console.log('ADDED'))
    })   
  }

}
