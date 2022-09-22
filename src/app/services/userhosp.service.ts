import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import {distanceBetween, geohashForLocation, geohashQueryBounds} from 'geofire-common' 

@Injectable({
  providedIn: 'root'
})

export class UserhospService {
  items ! :Observable<any[]> 
  x!:any;
  y!:any;
  constructor(public fs:AngularFirestore) {
    this.items = fs.collection('Hospitals').valueChanges()
  }

  readhospitals() : Observable<any[]>
  {
    return this.items
  }

  addhosp()
  {
    var x = [
      {
        hosp_address:"54, Katpadi Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, TamilNadu 632006",
        hosp_name:"Indira Super Speciality Hospital",
        hosp_photo:"https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-6/305489348_476988887771726_5534053611624099844_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7B4M_VrhmZcAX9BwtUh&_nc_ht=scontent.fmaa12-3.fna&oh=00_AT-ZSCR9Tjd89z1YqVVfzP-1uLHfLzRePwuquKxFByaRqA&oe=633183D7",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.27795202335!2d79.13470561482178!3d12.954057690867431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47185bb9c311%3A0x86287a4d543bf128!2sIndira%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1663748516222!5m2!1sen!2sin",
        hosp_details:'Indira Superspeciality Hospital provides a comprehensive range of specialties with a host of services under one roof. Our setup and infrastructure make us one of the most advanced hospitals in Vellore.',
        hosp_mail: 'info@indirasuperspecialityhospital.com',
	      latitude : 12.954334778237008,
	      longitude : 79.13684063833507,
        hosp_phone:'+91 98423 42525',
        doctors:['65821','507502472','90466'],
      },
      {
        hosp_address:"30, Arni Rd, Kosapet, Vellore, Tamil Nadu 632001, India",
        hosp_name:"CMC Eye Hospital",
        hosp_photo:"https://im.hunt.in/cg/City-Guide/Schell_Eye_Hospital1.jpg",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9195467714217!2d79.1330665!3d12.912892299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fbf01697191d576!2zMTLCsDU0JzQ2LjQiTiA3OcKwMDcnNTkuMCJF!5e0!3m2!1sen!2sin!4v1663750053610!5m2!1sen!2sin",
        hosp_details:'CMC Eye Hospitals is our oldest campus primarily serving patients with ophthalmological problems. Apart from the Department of Ophthalmology, it also houses the Low Cost Effective Care Unit (LCECU) of the Department of Family Medicine. The LCECU was started on December 1982, in response to the needs of the poor in Vellore town.',
        hosp_mail: 'eye@cmcvellore.ac.in',
	      latitude : 12.9128923,
	      longitude : 79.1330665,
        hosp_phone:'0416-228-1201',
        doctors:['1315','5342'],
      },
      {
        hosp_address:"1315, South Avenue Road, Phase 2, Sathuvachari, Vellore, Tamil Nadu 632009, India",
        hosp_name:"Vellore speciality Hospital",
        hosp_photo:"https://content3.jdmagicbox.com/comp/vellore/q4/9999px416.x416.161129220045.f2q4/catalogue/vellore-speciality-centre-sathuvacheri-vellore-hospitals-0yffg3w9pt.jpg?clr=2d392d",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.585878150047!2d79.1589309!3d12.934316899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a18336999e48092!2zMTLCsDU2JzAzLjUiTiA3OcKwMDknMzIuMiJF!5e0!3m2!1sen!2sin!4v1663750807956!5m2!1sen!2sin",
        hosp_details:'Vellore Speciality Centre in Sathuvacheri, Vellore is one of the most renowned Private Hospitals in the area. The specialist has in-depth knowledge of related areas of specialization like ENT Head And Neck Surgeon , Pediatrician And Neonatologist etc.',
        hosp_mail: 'info@sriragavendrahospital.com',
	      latitude : 12.9343169,
	      longitude : 79.1589309,
        hosp_phone:'0416-222-0052',
        doctors:['8743','9932'],
      },
      {
        hosp_address:"No-15, Thiyagarajapuram Rd, Sasthri Nagar, Veerasamy Nagar, Vellore, Tamil Nadu 632001, India",
        hosp_name:"Arun Hospital Ortho & Trauma Care",
        hosp_photo:"https://content3.jdmagicbox.com/comp/vellore/38/9999pmulchnstd1501938/catalogue/arun-ortho-hospital-vellore-ho-vellore-orthopaedic-doctors-0ne3tlnygr.jpg",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0720973328803!2d79.13343379999999!3d12.903085499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x533e6e77e2b042bd!2zMTLCsDU0JzExLjEiTiA3OcKwMDgnMDAuNCJF!5e0!3m2!1sen!2sin!4v1663768463760!5m2!1sen!2sin",
        hosp_details:'Started in 1995, with more than 25 years experience in providing quality health and patient focused outpatient care to the people of vellore city. At Arun Hospital, We help our patients pursue better lives one story at a time.',
        hosp_mail: 'arunhospital2005@yahoo.co.in',
	      latitude :12.9030855,
	      longitude : 79.1334338,
        hosp_phone:'+919500044444',
        doctors:['210','4536'],
      },
      {
        hosp_address:"1, 4th West Cross Road, Gandhinagar West, Suthanthira Ponvizha Nagar, Gandhinagar West, Gandhi Nagar, Vellore, Tamil Nadu 632006, India",
        hosp_name:"Chandran Hospital",
        hosp_photo:"https://content3.jdmagicbox.com/comp/vellore/38/9999pmulchnstd1501938/catalogue/arun-ortho-hospital-vellore-ho-vellore-orthopaedic-doctors-0ne3tlnygr.jpg",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3702137712953!2d79.13552299999999!3d12.948146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2029e2c3d939e129!2zMTLCsDU2JzUzLjMiTiA3OcKwMDgnMDcuOSJF!5e0!3m2!1sen!2sin!4v1663769003535!5m2!1sen!2sin",
        hosp_details:'One of the most renowned gynaecologist & obstetrician doctors in the city, Dr. Vasanthi Chandran in Gandhi Nagar Vellore, Vellore has been serving to offer end-to-end gynaecological treatments to women. From treating various gynaecological conditions in women to conducting periodical check-ups to keep a track of health, the gynaecologist provides complete care and treatment.',
        hosp_mail: 'Chandran.caldwell@gmail.com',
	      latitude :12.948146,
	      longitude : 79.135523,
        hosp_phone:'0416 224 2631',
        doctors:['3989','987'],
      },
      {
        hosp_address:"Govt Pentland Hospital, Road, Kosapet, Vellore, Tamil Nadu 632001, India",
        hosp_name:"ESI Hospital",
        hosp_photo:"https://www.wienerberger.in/references/projects/aspect-clay-facade-for-esi-hospital/jcr:content/root/hero/first-image/image.imgTransformer/crop_8to5/lg-6/1560508543205/ESIC%20Coimbatore.jpg",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8762114635697!2d79.1338086!3d12.9156768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a5bca459ebb8dff!2zMTLCsDU0JzU2LjQiTiA3OcKwMDgnMDEuNyJF!5e0!3m2!1sen!2sin!4v1663769563685!5m2!1sen!2sin",
        hosp_details:'Esi Hospital in Krishna Nagar, Vellore is one of the most renowned Paediatricians in the area. Countless locals in Krishna Nagar have placed immense trust in the practitioner over the years',
        hosp_mail: 'ithelpdesk@esic.nic.in',
	      latitude :12.9156768,
	      longitude : 79.1338086,
        hosp_phone:'0416 222 3052',
        doctors:['4543','7732'],
      },
      {
        hosp_address:"No. 672, Regional Transport Office Rd, near C.M.L. Anneke, Phase 2, Sathuvachari, Vellore, Tamil Nadu 632009, India",
        hosp_name:"VB Hospital",
        hosp_photo:"https://content3.jdmagicbox.com/comp/warangal/h5/9999px870.x870.150728215519.s3h5/catalogue/dr-n-vinay-babu-v-b-hospital--under-bridge-warangal-general-physician-doctors-kklbaso2oa.jpg?clr=333333",
        tag:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.575397332648!2d79.1560221!3d12.9349893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x252e62d274d2edfb!2zMTLCsDU2JzA2LjAiTiA3OcKwMDknMjEuNyJF!5e0!3m2!1sen!2sin!4v1663773311557!5m2!1sen!2sin',
        hosp_details:'V B Hospitals in Vellore has a supportive and friendly staff, and the latest medical know-how to help patients. The clinic abides by all the necessary safety protocols, including Covid-19 precautionary measures. The doctor and team offer world-class care and guidance, always putting their patients first. Services like Knee Care, Sonography, Opd Services etc. are also offered here, so all your treatment needs are taken care of in one place.',
        hosp_mail: 'ithelpdesk@esic.nic.in',
	      latitude :12.9349893,
	      longitude : 79.1560221,
        hosp_phone:'0416 222 3052',
        doctors:[],
      },
      {
        hosp_address:"South Avenue Road, Behind Sub Court, Phase 2, Sathuvachari, Vellore, Tamil Nadu 632009, India",
        hosp_name:"Baba Hospital",
        hosp_photo:"https://scontent.fmaa12-3.fna.fbcdn.net/v/t39.30808-1/305309146_501609761967500_709307873445631335_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=0hkSPyrl8fYAX9Wi6_g&_nc_ht=scontent.fmaa12-3.fna&oh=00_AT8acp1SEI3x5PDOe8UGVWthvADBVUrA9oRpflgrz5YNow&oe=6330D04B",
        tag:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.586520324301!2d79.15872039999999!3d12.934275699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5abb478b1d16ae7e!2zMTLCsDU2JzAzLjQiTiA3OcKwMDknMzEuNCJF!5e0!3m2!1sen!2sin!4v1663773691931!5m2!1sen!2sin',
        hosp_details:'Baba Hospital in Sathuvacheri, Vellore is one of the most renowned ENT Doctors in the area. The specialist has in-depth knowledge of related areas of specialization like Gynaecologist & Obstetrician Doctors etc',
        hosp_mail: 'babahospitals@gmail.com',
	      latitude :12.9342757,
	      longitude : 79.1587204,
        hosp_phone:'0416-2253744',
        doctors:[],
      },
    ];
    x.forEach((val)=>{
      const hash = geohashForLocation([val.latitude, val.longitude]);
      this.fs.collection('Hospitals').doc(val.hosp_name).set({
        address:val.hosp_address,
        name:val.hosp_name,
        photo:val.hosp_photo,
        tag:val.tag,
        detail:val.hosp_details,
        mail: val.hosp_mail,
        geohash: hash,
        doctors:val.doctors,
        lat: val.latitude,
        lng: val.longitude,
        phone:val.hosp_phone,
    })
    })   
  }


}
