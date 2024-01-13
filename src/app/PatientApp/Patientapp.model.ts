import { NgForm,FormGroup,
                  FormControl,
                    Validators,FormBuilder
} from "@angular/forms";
export class Patient
{
  id:number=0;
  name:string="";
  code:string="";
  age:number=0;
  formPatientGroup:FormGroup=null;

  constructor(){
    //when new instance is created constructor runs first
    var _builder= new FormBuilder();
    this.formPatientGroup=_builder.group({});
    //patient name is required
    this.formPatientGroup.addControl("pnameControl",new FormControl('', Validators.required));




    var validationCollection=[];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
    // regular expression has ^ and $ in start and end respectively for avoiding wildcard match
    // [] define range
    // {} define minimum and maximum character that must be present of the given range


    // PATIENT CODE SHOULD MATCH THE GIVEN PATTERN
    this.formPatientGroup.addControl("pcodeControl",new FormControl('', Validators.compose(validationCollection)));
  }
}


