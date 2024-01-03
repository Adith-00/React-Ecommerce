import { useDispatch } from "react-redux";
import { profileIcon1, profileIcon2, profileIcon3 } from "../images/images";
// import { setAddress, setCity, setCompanyName, setCountry, setFirstName, setInstruction, setPhone, setPostalCode, setSecondName, setState, setStreet } from "../../redux/Slice/AddressSlice";
import { store } from "../../redux/store";
// let Value = .subscribe()
let Values = store.getState().Address.value.FirstName;
const size = ["XXS", "XL", "XS", "S", "M", "L", "XXL", "3XL", "4XL"];
const colors = [
    "Blue",
    "Black",
    "Red",
    "Yellow",
    "Purple",
    "Green",
    "Pink",
    "Grey",
    "Orange",
    "White",
    "Brown",
    "Navy",
  ];
  const Items = [
    "Top",
    "Kurthis",
    "Printed T-shirts",
    "Plain T-shirts",
    "Boxers",
    "Full sleeve T-shirts",
    "Joggers",
    "Payjamas",
    "Jeans",
  ];
  const Styles = [
    "Classic",
    "Casual",
    "Business",
    "Elegant",
    "Formal (evening)",
  ];

  const feilds=[
    
    {
    id:1,
    label:"First Name",
    Contextname:"FirstName",
    placeholder:"First Name",
    type:'text',
    Style:'type1',
    // functions:setFirstName,
    // Inputvalue:Values,
    
  },
  {
    id:2,
    label:"Last Name",
    Contextname:"SecondName",
    placeholder:"Last Name",
    type:'text',
    Style:'type1',
    // Inputvalue:" SecondName",
    // functions:(setSecondName)
  },
  {
    id:3,
    label:"Country / Region",
    Contextname:"Country",
    placeholder:"Country / Region",
    type:'text',
    Style:'type1',
    // Inputvalue:"Country",
    // functions:(setCountry)
  },
  {
    id:4,
    label:"Company Name ",
    Contextname:"CompanyName",
    placeholder:"Company Name(optional)",
    type:'text',
    Style:'type1',
    // Inputvalue:"CompanyName",
    // functions:(setCompanyName)
  },
  {
    id:5,
    label:"Street Address",
    Contextname:"Address",
    placeholder:"House number And Street Name",
    type:'text',
    Style:'type1',
    // Inputvalue:"Address",
    // functions:(setAddress)
  },
  {
    id:6,
    label:"Apt, suite, uni",
    Contextname:"Street",
    placeholder:"apartment, suite, unit, etc. (optional)",
    type:'text',
    Style:'type1',
    // Inputvalue:"Street",
    // functions:(setStreet)
  },
  {
    id:7,
    label:"City",
    Contextname:"city",
    placeholder:"Town / City",
    type:'text',
    Style:'type1',
    // Inputvalue:"city",
    // functions:(setCity)
  },
  {
    id:8,
    label:"State ",
    Contextname:"State",
    placeholder:"State",
    type:'dropdown',
    Style:'type1',
    Options:["Kerala","Tamil Nadu","Delhi","Punjab","Goa"],
    // Inputvalue:"State",
    // functions:(setState)
  },
  {
    id:9,
    label:"Phone",
    Contextname:"Phone",
    placeholder:"phone",
    type:'text',
    Style:'type1',
    // Inputvalue:"Phone",
    // functions:(setPhone)
  },
  {
    id:10,
    label:"Postal code ",
    Contextname:"PostalCode",
    placeholder:"Postal code",
    type:'text',
    Style:'type1',
    // Inputvalue:"PostalCode",
    // functions:(setPostalCode)
  },
  {
    id:11,
    label:"Delivery Instruction",
    Contextname:"Instruction",
    placeholder:"Delivery Instruction",
    type:'text',
    Style:'type2',
    // Inputvalue:"Instructions",
    // functions:(setInstruction)
    
  }]
  const Chek_outfeilds = [
    {
      id: 1,
      label: "First Name",
      placeholder: "First Name",
      type: "text",
      Style: "type1",
    },
    {
      id: 2,
      label: "Last Name",
      placeholder: "Last Name",
      type: "text",
      Style: "type1",
    },
    {
      id: 3,
      label: "Country / Region",
      placeholder: "Country / Region",
      type: "text",
      Style: "type1",
    },
    {
      id: 4,
      label: "Company Name ",
      placeholder: "Company Name(optional)",
      type: "text",
      Style: "type1",
    },
    {
      id: 5,
      label: "Street Address",
      placeholder: "House number And Street Name",
      type: "text",
      Style: "type1",
    },
    {
      id: 6,
      label: "Apt, suite, uni",
      placeholder: "apartment, suite, unit, etc. (optional)",
      type: "text",
      Style: "type1",
    },
    {
      id: 7,
      label: "City",
      placeholder: "Town / City",
      type: "text",
      Style: "type2",
    },
    {
      id: 8,
      label: "Stat ",
      placeholder: "State",
      type: "dropdown",
      Style: "type2",
      Options:["Kerala","Tamil Nadu","Delhi","Punjab","Goa","Punjab"],
    },
    {
      id: 9,
      label: "Postal code ",
      placeholder: "Postal code",
      type: "text",
      Style: "type2",
    },
    {
      id: 10,
      label: "Phone",
      placeholder: "phone",
      type: "text",
      Style: "type1",
    },
  ];
  const carddetailInput=[{
    id: 1,
    placeholder: "Card number",
    type: "text",
    Style: "type1",
  },{
    id: 2,
    placeholder: "Name of card",
    type: "text",
    Style: "type1",
  },{
    id: 3,
    placeholder: "Expiration date (MM/YY)",
    type: "tel",
    Style: "type1",
  },{
    id: 4,
    placeholder: "Security Code",
    type: "password",
    Style: "type2",
  }]
  const ProfileNavigation=[{
    id :1 ,
    logo : profileIcon1,
    text : "My oders",
    path:"oderpage",
  },{
    id :2 ,
    logo : profileIcon2,
    text : "WishList",
    path:"wishlist"
  },{
    id :3 ,
    logo : profileIcon3,
    text : "My Info",
    path:"userinfo"
  }]
  export {
    size, colors, Items, Styles ,feilds,Chek_outfeilds,carddetailInput,ProfileNavigation
  }